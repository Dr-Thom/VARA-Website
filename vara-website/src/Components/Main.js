import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import { Nav } from "react-bootstrap";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import VaraCar from "../Images/vara_car.png";
import VaraName from "../Images/vara_name.png";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

class Main extends Component {

    render() {
        return (
			<HashRouter>
        <div className="content">
				  < ul className = "Header">
					  <div className="menu-items">
						  <img className="nav-logo" src = { VaraCar } alt = ""/>
						  <li><NavLink exact to = "/">Home</NavLink></li>
						  <li><NavLink to = "/Stuff">Stuff</NavLink></li>
						  <li><NavLink to = "/Contact">Contact</NavLink></li>
						  <button className="signup-btn"><NavLink to = "/SignIn">Sign In</NavLink></button>
						  <button className="signup-btn"><NavLink to = "/SignUp">Sign Up</NavLink></button>
					  </div>
				 </ul>

				<div className = "content" >
          			<Route exact path = "/Home" component = { Home }/>
					<Route exact path = "/Stuff" component = { Stuff }/>
					<Route exact path="/Contact" component={ Contact } />
					<Route exact path="/SignIn" component={ SignIn } />
					<Route exact path="/SignUp" component={ SignUp }/>
				</div>
			</div>
			</HashRouter>
        );
    }
}

export default Main;
