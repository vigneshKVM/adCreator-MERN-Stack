const PostTemplate = require('../models/postTemplate');

// exports.getAddTemplate = (req, res, next) => {
//   res.render('admin/edit-Template', {
//     pageTitle: 'Add Template',
//     path: '/admin/add-Template',
//     editing: false
//   });
// };

exports.postAddTemplate = (req, res, next) => {
  const title = req.body.title;
  const type = req.body.type;
  const elements = req.body.elements;
  const Template = new PostTemplate({
    title: title,
    type: type,
    elements: elements,
    userId: req.user
  });
  console.log(Template)
  Template
    .save()
    .then(result => {
      // console.log(result);
      console.log('Created Template');
      res.status(200)
        return res.json({
            message: "Created Template Successfully"
        })
    })
    .catch(err => {
      console.log(err);
        res.status(500)
        return res.json({
            error: err
        })
    });
};

// exports.getEditTemplate = (req, res, next) => {
//   const editMode = req.query.edit;
//   if (!editMode) {
//     return res.redirect('/');
//   }
//   const prodId = req.params.TemplateId;
//   PostTemplate.findById(prodId)
//     .then(Template => {
//       if (!Template) {
//         return res.redirect('/');
//       }
//       res.render('admin/edit-Template', {
//         pageTitle: 'Edit Template',
//         path: '/admin/edit-Template',
//         editing: editMode,
//         Template: Template
//       });
//     })
//     .catch(err => console.log(err));
// };

exports.postEditTemplate = (req, res, next) => {
  const templateId = req.body.templateId;
  const updatedTitle = req.body.title;
  const updatedType = req.body.type;
  const updatedElements = req.body.elements;

    PostTemplate.findById(templateId)
    .then(Template => {
        console.log(Template)
      if (Template.userId.toString() !== req.user._id.toString()) {
        res.status(404)
          return res.json({
              message: "Template Not Found"
          })
      }
      Template.title = updatedTitle;
      Template.type = updatedType;
      Template.elements = updatedElements;
      return Template.save().then(result => {
        console.log('UPDATED Template!');
          res.status(200)
          return res.json({
              message: "Template Updated"
          })
      });
    })
    .catch(err => {
        console.log(err)
        res.status(404)
        return res.json({
            message: "Error Occured",
            error: err
        })
    });
};

exports.getTemplates = (req, res, next) => {
  PostTemplate.find({ userId: req.user._id })
    // .select('title price -_id')
    // .populate('userId', 'name')
    .then(Templates => {
      console.log(Templates);
      if (Templates.length === 0) {
          res.status(404)
          return res.json({
              message: "No Templates Found for the User"
          })
      }
      res.status(200)
        return res.json({
            message: "Templates Found for the user",
            data: Templates
        })
    })
    .catch(err => {
        console.log(err)
        res.status(404)
        return res.json({
            message: "Error Occured",
            error: err
        })
    });
};

exports.postDeleteTemplate = (req, res, next) => {
  const prodId = req.body.templateId;
    PostTemplate.deleteOne({ _id: prodId, userId: req.user._id })
    .then(() => {
      console.log('DESTROYED Template');
        res.status(200)
        return res.json({
            message: "Templates Deleted Successfully",
        })
    })
    .catch(err => {
        console.log(err)
        res.status(404)
        return res.json({
            message: "Error Occured",
            error: err
        })
    });
};
