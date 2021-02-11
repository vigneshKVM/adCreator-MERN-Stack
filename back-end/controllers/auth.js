const crypto = require('crypto');

const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const { validationResult } = require('express-validator/check');

const User = require('../models/user');

const transporter = nodemailer.createTransport({
  host: "mail.winzetech.com",
  port: 587,
  secure: false,
  auth: {
    user: "vignesh@winzetech.com",
    pass: "WinSee12345$"
  }
});

exports.getLogin = (req, res, next) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    errorMessage: message,
    oldInput: {
      email: '',
      password: ''
    },
    validationErrors: []
  });
};

exports.getSignup = (req, res, next) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render('auth/signup', {
    path: '/signup',
    pageTitle: 'Signup',
    errorMessage: message,
    oldInput: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationErrors: []
  });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // return res.status(422).render('auth/login', {
    //   path: '/login',
    //   pageTitle: 'Login',
    //   errorMessage: errors.array()[0].msg,
    //   oldInput: {
    //     email: email,
    //     password: password
    //   },
    //   validationErrors: errors.array()
    // });
    res.status(422);
    return res.json({
      errors: errors.array()
    })

  }

  User.findOne({ email: email })
    .then(user => {
      if (!user) {
        return res.status(422).render('auth/login', {
          path: '/login',
          pageTitle: 'Login',
          errorMessage: 'Invalid email or password.',
          oldInput: {
            email: email,
            password: password
          },
          validationErrors: []
        });
      }
      bcrypt
        .compare(password, user.password)
        .then(doMatch => {
          if (doMatch) {
            req.session.isLoggedIn = true;
            req.session.user = user;
            return req.session.save(err => {
              console.log(err);
              if (!err) {
                return res.status(200).send({
                  message: "Login Successful",
                  userDetails: req.session.user
                })
              }
            });
          }
          // return res.status(422).render('auth/login', {
          //   path: '/login',
          //   pageTitle: 'Login',
          //   errorMessage: 'Invalid email or password.',
          //   oldInput: {
          //     email: email,
          //     password: password
          //   },
          //   validationErrors: []
          // });

          return res.status(422).send({
            message: "Login Failed, Try Again"
          })
        })
        .catch(err => {
          console.log(err);
          return res.status(422).send({
            message: "Login Failed, Try Again"
          })
        });
    })
    .catch(err => console.log(err));
};

exports.postSignup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors.array());
    // return res.status(422).render('auth/signup', {
    //   path: '/signup',
    //   pageTitle: 'Signup',
    //   errorMessage: errors.array()[0].msg,
    //   oldInput: {
    //     email: email,
    //     password: password,
    //     confirmPassword: req.body.confirmPassword
    //   },
    //   validationErrors: errors.array()
    // });
    res.status(422);
    return res.json({
      errors: errors.array()
    })
  }

  bcrypt
    .hash(password, 12)
    .then(hashedPassword => {
      const user = new User({
        email: email,
        password: hashedPassword,
        templates: []
      });
      return user.save();
    })
    .then(result => {
      // res.redirect('/login');

      return res.status(201).send({
        message: "Signed Up Successfully"
      })

      // return transporter.sendMail({
      //   to: email,
      //   from: 'shop@node-complete.com',
      //   subject: 'Signup succeeded!',
      //   html: '<h1>You successfully signed up!</h1>'
      // });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    if (!err) {
      return res.status(201).send({
        message: "Logged Out Successfully"
      })
    }
  });
};

exports.getReset = (req, res, next) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render('auth/reset', {
    path: '/reset',
    pageTitle: 'Reset Password',
    errorMessage: message
  });
};

exports.postReset = (req, res, next) => {
  crypto.randomBytes(32, (err, buffer) => {
    if (err) {
      console.log(err);
      res.status(422)
      return res.json({
        error: err
      })
    }
    const token = buffer.toString('hex');
    User.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          req.flash('error', 'No account with that email found.');
          res.status(422)
          return res.json({
            message: "No User With this Email Address"
          })
        }
        user.resetToken = token;
        user.resetTokenExpiration = Date.now() + 3600000;
        return user.save();
      })
      .then(result => {
        transporter.sendMail({
          to: req.body.email,
          from: 'noreply@kvmtech.com',
          subject: 'Password reset',
          html: `
            <p>You requested a password reset</p>
            <p>Click this <a href="http://localhost:5000/reset/${token}">link</a> to set a new password.</p>
          `
        });
        res.status(201)
        return res.json({
          message: `An Email is Sent To Your Email ID to Reset the Password`,
          token: token
        })
      })
      .catch(err => {
        console.log(err);
      });
  });
};

exports.getNewPassword = (req, res, next) => {
  const token = req.params.token;
  User.findOne({ resetToken: token, resetTokenExpiration: { $gt: Date.now() } })
    .then(user => {
      let message = req.flash('error');
      if (message.length > 0) {
        message = message[0];
      } else {
        message = null;
      }
      res.render('auth/new-password', {
        path: '/new-password',
        pageTitle: 'New Password',
        errorMessage: message,
        userId: user._id.toString(),
        passwordToken: token
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postNewPassword = (req, res, next) => {
  const newPassword = req.body.password;
  const userId = req.body.userId;
  const passwordToken = req.body.passwordToken;
  let resetUser;

  User.findOne({
    resetToken: passwordToken,
    resetTokenExpiration: { $gt: Date.now() },
    _id: userId
  })
    .then(user => {
      resetUser = user;
      return bcrypt.hash(newPassword, 12);
    })
    .then(hashedPassword => {
      resetUser.password = hashedPassword;
      resetUser.resetToken = undefined;
      resetUser.resetTokenExpiration = undefined;
      return resetUser.save();
    })
    .then(result => {
      res.status(201)
      return res.json({
        message: `New Password has been Updated Successfully`
      })
    })
    .catch(err => {
      console.log(err);
    });
};
