import React from 'react';
import {render} from 'react-dom';
import '../css/module1.css';
import {BrowserRouter as Router, Route, Link, Switch, Redirect, browserHistory} from "react-router-dom";

import TileList from './tileList.js';
import Home from './home.js';
import Search from './search.js';
import TileForm from './tileForm.js';


class App extends React.Component{
    render(){
        return(
            <Router history={browserHistory} forceRefresh={true}>
                <div className="navBar">
                    <ul className="navBarTabLinks">
                        <li className="navLinks" ><Link to="/home">Home</Link></li>

                    </ul>
                    <Switch>
                        <Redirect exact from="/" to="/home"/>
                        <Route  path="/home" component={Home}/>
                        <Route  path="/search/:id" component={Search}/>
                        <Route  path="/details/:id" component={TileForm}/>
                    </Switch>
                </div>

            </Router>
        );
    }
}

export default App;