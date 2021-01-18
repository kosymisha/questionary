import React from 'react'
import Header from "./Header";
import LeftNav from "./LeftNav";
import Nav from "./Nav";
import "./App.css";
import {Route, Switch} from "react-router-dom";
import Login from "./pages/components/Login";
import Settings from "./pages/components/Settings";
import NewSurvey from "./pages/components/NewSurvey";
import routes from "./routes"

const App = () => (
    <div>
        <Nav/>
        <div className="container">
            <LeftNav/>
            <div className="content">
                <Switch>
                    {
                        Object.values(routes)
                            .map(route => <Route
                                key={route.id}
                                path={route.path}
                                component={route.component}
                            />)
                    }
                </Switch>
            </div>
        </div>
    </div>
);

export default App;