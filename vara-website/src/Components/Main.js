import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import { Nav } from "react-bootstrap";

import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import SignUp from "./SighUp";
import VaraCar from "../Images/vara_car.png";

class Main extends Component {

    render() {
        return (
			<HashRouter>
            <div className="content">
				
				<ul className = "Header">
					<div className="menu-items">
						<img className="nav-logo" src = { VaraCar } alt = ""/>
						<li><NavLink exact to = "/">Home</NavLink></li>
						<li><NavLink to = "/Stuff">Stuff</NavLink></li>
						<li><NavLink to = "/Contact">Contact</NavLink></li>
						<botton className="signup-btn"><NavLink to = "/SignUp">Sing Up</NavLink></botton>
					</div>
				 </ul>
				<div className = "content" >
            		<Route exact path = "/Home" component = { Home }/>
					<Route exact path = "/Stuff" component = { Stuff }/>
					<Route exact path = "/Contact" component = { Contact }/>
            		<Route exact path = "/SingUp" component = { SignUp }/>

				</div>
			</div>
			</HashRouter>
        );
    }
}

export default Main;
