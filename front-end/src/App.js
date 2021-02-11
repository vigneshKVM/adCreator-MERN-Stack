/*****************************************************/

import React, {useState, useCallback} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// Auth
import { AuthContext } from './shared/context/auth-context';

// Pages
import PostCreator from "./pages/postCreator/postCreator";
import Login from "./pages/login";
import Signup from "./pages/signup";

// Styles
import GlobalStyles from "./shared/global.style";
import DrawInReact from "./shared/components/includes/drawInReact";

/*****************************************************/

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [userId, setUserId] = useState(null);

    const login = useCallback(uid => {
        setIsLoggedIn(() => true);
        setUserId(() => uid);
    }, []);

    const logout = useCallback(() => {
        setIsLoggedIn(false);
        setUserId(null);
    }, []);

    return (
        <AuthContext.Provider
            value={{ isLoggedIn: isLoggedIn, userId: userId, login: login, logout: logout }}
        >
            <GlobalStyles/>
            <Router>
                {/*<MainNavigation />*/}
                <main>
                    {isLoggedIn
                        ? (
                        <Switch>
                            <Route exact={true} path="/" component={PostCreator}/>
                            <Redirect to="/" />
                        </Switch>
                    )
                        : (
                            <Switch>
                                <Route exact={true} path="/login" component={Login}/>
                                <Route exact={true} path="/signup" component={Signup}/>
                                <Redirect to="/login" />
                            </Switch>
                        )
                    }
                </main>
            </Router>
        </AuthContext.Provider>
    );
}

/*****************************************************/
export default App;
/*****************************************************/
