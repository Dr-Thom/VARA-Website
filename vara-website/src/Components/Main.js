import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import { Nav } from "react-bootstrap";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import VaraName from "../Images/vara_name.png";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

class Main extends Component {

    render() {
        return (
			<HashRouter>
            <div className="content">
				<ul className = "Header">
					<li><NavLink exact to = "/">Home</NavLink></li>
					<li><NavLink to = "/Stuff">Stuff</NavLink></li>
					<li><NavLink to = "/Contact">Contact</NavLink></li>
						<li><NavLink to="/SignIn">Sign In</NavLink></li>
						<li><NavLink to="/SignUp">Sign Up</NavLink></li>
					</ul>
				<div className = "content" >
            		<Route exact path = "/" component = { Home }/>
					<Route exact path = "/Stuff" component = { Stuff }/>
					<Route exact path="/Contact" component={Contact} />
					<Route exact path="/SignIn" component={SignIn} />
					<Route exact path="/SignUp" component={SignUp}/>
						
				</div>
			</div>
			</HashRouter>
        );
    }
}

export default Main;
