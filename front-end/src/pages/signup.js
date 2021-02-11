import React, {useContext, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import {AuthContext} from "../shared/context/auth-context";
import {useHttpClient} from "../shared/hooks/http-hook";
import ErrorText from "../shared/errorText";
import CircularProgress from '@material-ui/core/CircularProgress';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
        alignItems: 'center',
        justifyContent: 'center'
    },
}));

// interface Values {
//     email: string;
//     password: string;
// }
export default function Signup() {
    const classes = useStyles();
    const auth = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});

    // const { isLoading, error, sendRequest, clearError } = useHttpClient();;

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Formik
                    onSubmit={(values, { setSubmitting }) => {

                        setIsLoading(() => true)
                        setSubmitting(false);
                        try {
                            fetch('http://localhost:5000/api/signup', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    email: values.email,
                                    password: values.password,
                                    confirmPassword: values.confirmPassword
                                })
                            })
                                .then(response => response.json())
                                .then(data => {
                                    if (data.errors === undefined) {
                                        setErrors(data)
                                        if (data.message === 'Signed Up Successfully') {
                                            auth.login();
                                        }
                                    }
                                    else if (data.errors.length > 0) {
                                        console.log(data.errors)
                                        let email;
                                        let password;
                                        let confirmPassword;
                                        data.errors.map((error) => {
                                            if (error.param === 'password') {
                                                password = error.msg
                                            }
                                            if (error.param === 'email') {
                                                email = error.msg
                                            }
                                            if (error.param === 'confirmPassword') {
                                                confirmPassword = error.msg
                                            }
                                            console.log({email, password, confirmPassword})
                                            setErrors({email, password, confirmPassword})
                                        })
                                    }
                                })
                            setIsLoading(() => false)
                            // const responseData = response.json();

                        } catch (err) {
                            console.log(err);
                            setIsLoading(() => false)
                        }

                    }}
                    initialValues={{
                        // firstname: '',
                        // lastname: '',
                        email: '',
                        password: '',
                        confirmPassword: ''
                    }}
                    // validate={values => {
                    //     const errors = {};
                    //
                    //     if (!values.email) {
                    //         errors.email = 'Required';
                    //     } else if (
                    //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                    //     ) {
                    //         errors.email = 'Invalid email address';
                    //     }
                    //
                    //     return errors;
                    // }}
                >
                    {({ submitForm, isSubmitting }) => (
                        <Form className={classes.form}>

                            <Grid container spacing={2}>
                                {/*<Grid item xs={12} sm={6}>*/}
                                {/*    <Field*/}
                                {/*        component={TextField}*/}
                                {/*        autoComplete="fname"*/}
                                {/*        name="firstname"*/}
                                {/*        variant="outlined"*/}
                                {/*        required*/}
                                {/*        fullWidth*/}
                                {/*        id="firstname"*/}
                                {/*        label="First Name"*/}
                                {/*        autoFocus*/}
                                {/*    />*/}
                                {/*</Grid>*/}
                                {/*<Grid item xs={12} sm={6}>*/}
                                {/*    <Field*/}
                                {/*        component={TextField}*/}
                                {/*        variant="outlined"*/}
                                {/*        required*/}
                                {/*        fullWidth*/}
                                {/*        id="lastname"*/}
                                {/*        label="Last Name"*/}
                                {/*        name="lastname"*/}
                                {/*        autoComplete="lname"*/}
                                {/*    />*/}
                                {/*</Grid>*/}
                                <Grid item xs={12}>
                                    <Field
                                        component={TextField}
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <ErrorText value={errors.email} />
                                <Grid item xs={12}>
                                    <Field
                                        component={TextField}
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                    />
                                </Grid>
                                <ErrorText value={errors.password} />
                                <Grid item xs={12}>
                                    <Field
                                        component={TextField}
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="confirmPassword"
                                        label="Confirm Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                    />
                                </Grid>
                                <ErrorText value={errors.confirmPassword} />
                                <ErrorText value={errors.message} />

                                {/*<Grid item xs={12}>*/}
                                {/*    <FormControlLabel*/}
                                {/*        control={<Checkbox value="allowExtraEmails" color="primary" />}*/}
                                {/*        label="I want to receive inspiration, marketing promotions and updates via email."*/}
                                {/*    />*/}
                                {/*</Grid>*/}
                            </Grid>
                            {isLoading && <div className={classes.root}>
                                <CircularProgress/>
                            </div>}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                disabled={isSubmitting}
                                onClick={submitForm}
                            >
                                Sign Up
                            </Button>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <Link href="/login" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}
