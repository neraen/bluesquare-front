import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar'
import { HashRouter, Switch, Route, withRouter, Redirect } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import authAPI from "./services/authAPI";
import AuthContext from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import HomePage from "./pages/HomePage";




authAPI.setup();

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(authAPI.isAuthenticated());

    const NavbarWitRouter = withRouter(Navbar)

    const context = {
        isAuthenticated: isAuthenticated,
        setIsAuthenticated: setIsAuthenticated,
    }

    return (
        <AuthContext.Provider value={context}>
            <HashRouter>
                <NavbarWitRouter />
                <main className={!isAuthenticated ? "": "" + "pt-5"}>
                    <Switch>
                        <Route path="/connexion" component={LoginPage}/>
                        <Route path="/register" component={RegisterPage}/>
                        <PrivateRoute path="/tickets" component={HomePage} />
                        <Route path="/" component={HomePage} />
                    </Switch>
                </main>
            </HashRouter>
        </AuthContext.Provider>
  );
}

export default App;
