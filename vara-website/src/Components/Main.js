import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";

import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import VaraCar from "../Images/vara_car.png";
import VaraName from "../Images/vara_name.png";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

class Main extends Component {


constructor(props){
	super(props);
	//this.click = this.click.bind(this);
}

    render() {

		  const callbackFunc = () => {
				clickedWhat();
			}

        return (
			<HashRouter>
        <div className="content">
				  < ul className = "Header">
					  <div className="menu-items">
						  <img onClick={() => click("click")} className="nav-logo" src = { VaraCar } alt = ""/>
						  <li><NavLink exact to = "/">Home</NavLink></li>
						  <li><NavLink to = "/Stuff">Stuff</NavLink></li>
						  <li><NavLink to = "/Contact">Contact</NavLink></li>
						  <li><NavLink to = "/SignIn">Sign In</NavLink></li>
						  <li><NavLink to = "/SignUp">Sign Up</NavLink></li>
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

			<Button onClick={() => clickedWhat()}>what?</Button>

			<button class="btn btn-danger" onClick={() => click("click")}>what2</button>
			</HashRouter>
        );
    }




	}
	function clickedWhat(){
		alert("clicked on What? Button");
	}
 	function click (selected : string) {
			alert("wuz up " + selected);
	}

export default Main;
