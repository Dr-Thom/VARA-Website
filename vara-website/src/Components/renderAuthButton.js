import React, { Component } from "react";
import { NavLink } from "react-bootstrap";
//let isLoggedIn : boolean = false;

// RenderAuthButton extends Component{

export function renderAuthButton (isLoggedIn : boolean){

if (isLoggedIn){
	return "/";
} else {
	return "/";
}
// if(isLoggedIn){
// 		//return <li><NavLink to = "/SignUp">Login</NavLink></li>
// 		return (
// 		<li><NavLink to = "/">
// 			<button>Logout</button>
// 		</NavLink></li>);
// 	} else {
// 		//return <li><NavLink to = "/SignUp">Logout</NavLink></li>
// 		return (
// 		<li><NavLink to = "/">
// 			<button>Login</button>
// 		</NavLink></li>);
// 	}
}

//let isLoggedIn : boolean = false;
//}
export { renderAuthButton as default };
//module.exports = { renderAuthButton(isLoggedIn) };
