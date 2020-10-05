import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import { Nav, Button } from "react-bootstrap";
//import { Button } from "react-bootstrap";
//import {VaraSupport } from "../Images/vara_support.png";
//import { firebase_init } from "./../firebase_init";
import * as firebase from "firebase/app";
//import renderAuthButton from "./renderAuthButton";
//import { Firebase } from "./firebase";

import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import VaraCar from "../Images/vara_car.png";
import VaraName from "../Images/vara_name.png";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

let isLoggedIn : boolean;

function Main() {
  //varaSupport = "../Images/vara_support.png";
//ip : String = "0.0.0.0";

// constructor(props){
// 	super(props);
	//console.log(props);
	//varaSupport
// 	const firebase = require("firebase");
// // Required for side-effects
// 	require("firebase/firestore");
// 	firebase.initializeApp({
//   		apiKey: '### FIREBASE API KEY ###',
//   		authDomain: '### FIREBASE AUTH DOMAIN ###',
//   		projectId: '### CLOUD FIRESTORE PROJECT ID ###'
// 	});
//
// 	var db = firebase.firestore();
	//console.log(firebaseConfig);

	//this.click = this.click.bind(this);
//}

//    render() {
		//let isLoggedIn : boolean;
	    const renderAuthButton = (logged : boolean)=>{
	   	if(logged){
	   			//return <li><NavLink to = "/SignUp">Login</NavLink></li>
				this.isLoggedIn = true;
				return (
				<NavLink to = "/Stuff">
					<button>Logout</button>
				</NavLink>);
			} else {
	   			//return <li><NavLink to = "/SignUp">Logout</NavLink></li>
				isLoggedIn = false;
				return (
						<NavLink to = "/Stuff">
							<button>Login</button>
						</NavLink>);
	   		}
	   	}
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

						{renderAuthButton(isLoggedIn)}
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
			<p>{ isLoggedIn }</p>
			<Button onClick={() => clickedWhat()}>what?</Button>

			<button className="btn btn-danger" onClick={() => click("click")}>what2</button>
			</HashRouter>
        );
    //}
	//<Route exact path={renderAuthButton}component={  }/>
//<!--{renderAuthButton(isLoggedIn)}-->



	}

	function clickedLogout(){
		return
	}

	function clickedWhat(){
//(async () => {
		const ipAPI = '//api.ipify.org?format=json'

		const inputValue = fetch(ipAPI)
  			.then(response => response.json())
  			.then(data => data.ip)

		const { value: ipAddress } = Swal.fire({
		//const { value: ipAddress } = await Swal.fire({
  			title: 'Enter your IP address',
  			input: 'text',
  			inputValue: inputValue,
  			showCancelButton: true,
  			inputValidator: (value) => {
				//ip = value;
    		if (!value) {
      			return 'You need to write something!'
  			} else {
	  			Swal.fire(` ${isLoggedIn} Your IP address is ${value}`);
  			}
  		}
	})
if (ipAddress) {
	 Swal.fire(`Your IP address is ${ipAddress}`);
			// Swal.fire({
  			// 	title: 'Hello!',
  			// 	text: 'Do you want to continue',
  			// 	// imageUrl: "../Images/vara_support.png",
			// 	// imageWidth: 64,
			// 	// imageHeight: 64,
  			// 	confirmButtonText: 'Yes'
			// });
		}
	//});
		//alert("clicked on What? Button");
	}
 	function click (selected : string) {
			alert("wuz up " + selected);
	}

export default Main;
