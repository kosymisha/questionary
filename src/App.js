import React from 'react'
import Header from "./Header";
import LeftNav from "./LeftNav";
import Nav from "./Nav";
import "./App.css";

const App = () => (
    <div>
        <Nav/>
        <div className="container">
            <LeftNav/>
            <div className="content">
                content
            </div>
        </div>
    </div>
);

export default App;