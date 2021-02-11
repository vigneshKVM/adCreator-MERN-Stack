import React, {useContext, useState} from 'react';
import { Redirect } from 'react-router-dom';

// Material UI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// Formik
import {Formik, Form, Field, ErrorMessage} from 'formik';
import { TextField } from 'formik-material-ui';

// Additions
import { useForm } from '../shared/hooks/form-hook';
import { useHttpClient } from '../shared/hooks/http-hook';
import { AuthContext } from '../shared/context/auth-context';
import ErrorText from "../shared/errorText";

/*****************************************************/

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
        marginTop: theme.spacing(1),
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

/*****************************************************/

export default function Login() {
    const classes = useStyles();

    const auth = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    // const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [errors, setErrors] = useState({});

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Formik
                    onSubmit={(values, { setSubmitting }) => {

                        setIsLoading(() => true)
                        setSubmitting(false);
                        try {
                            fetch('http://localhost:5000/api/login', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    email: values.email,
                                    password: values.password
                                })
                            })
                                .then(response => response.json())
                                .then(data => {
                                    if (data.errors === undefined) {
                                        setErrors(data)
                                        if (data.message === 'Login Successful') {
                                            auth.login(data.userDetails._id);
                                        }
                                    }
                                    else if (data.errors.length > 0) {
                                        console.log(data.errors)
                                        let email;
                                        let password;
                                        data.errors.map((error) => {
                                            if (error.param ===  'password') {
                                                password = error.msg
                                            }
                                            if (error.param ===  'email') {
                                                email = error.msg
                                            }
                                            console.log({email, password})
                                            setErrors({email, password})
                                        })
                                    }
                                    setIsLoading(() => false)
                                })
                        } catch (err) {
                            console.log(err);
                            setIsLoading(() => false)
                        }

                    }}
                    initialValues={{
                        email: '',
                        password: '',
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
                    {({ submitForm, isSubmitting }) => {
                        return(
                        <Form className={classes.form}>

                            <Grid container spacing={2}>
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
                                    <ErrorText value={errors.password} />
                                    <ErrorText value={errors.message} />
                                    {isLoading && <div className={classes.root}>
                                        <CircularProgress/>
                                    </div>}
                                </Grid>
                                {/*<Grid item xs={12}>*/}
                                {/*    <FormControlLabel*/}
                                {/*        control={<Checkbox value="allowExtraEmails" color="primary" />}*/}
                                {/*        label="I want to receive inspiration, marketing promotions and updates via email."*/}
                                {/*    />*/}
                                {/*</Grid>*/}
                            </Grid>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                disabled={isSubmitting}
                                onClick={submitForm}
                            >
                                Login
                            </Button>

                            <Grid container justify="flex-end">
                                <Grid item>
                                    <Link href="/signup" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Form>
                    )}}
                </Formik>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}

/*****************************************************/
