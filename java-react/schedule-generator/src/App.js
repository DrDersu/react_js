import "./bootstrap-4.5.3-dist/css/bootstrap.min.css"
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import UserProvider from "./UserProvider";
import {useContext} from "react";
import UserContext from "./UserContext";
import Header from "./Header";
import Profile from "./Profile";

function App() {
    const user = useContext(UserContext);
    return (
        <UserProvider>
            <div>
                <Router>
                    <Header currentUser={user}/>
                    <Switch>
                        <Route path="/login">
                            <Login/>
                        </Route>
                        <Route path='/register'>
                            <Register/>
                        </Route>
                        <Route path='/profile'>
                            <Profile/>
                        </Route>
                        <Route path='/'>
                            <Home/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        </UserProvider>
    );
}

export default App;
