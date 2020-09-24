import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";

import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import VaraName from "../Images/vara_name.png";

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
			<Nav className="justify-content-center" activeKey="#/" onSelect={(selectedKey) => click(`${selectedKey}`)}>
			   <Nav.Item>
				   <Nav.Link eventKey="Home" className="Header" href="#/">Home</Nav.Link>
			   </Nav.Item>
			   <Nav.Item>
				   <Nav.Link eventKey="Stuff" className="Header" href="#/Stuff">Stuff</Nav.Link>
			   </Nav.Item>
			   <Nav.Item>
				   <Nav.Link eventKey="Contact" className="Header" href="#/Contact">Contact</Nav.Link>
			   </Nav.Item>
			</Nav>

			</div>
			<div className = "content" >

				<Route exact path = "/" component = { Home }/>
				<Route exact path = "/Stuff" component = { Stuff }/>
				<Route exact path = "/Contact" component = { Contact }/>
			</div>

			<Button onClick={callbackFunc}>what?</Button>
			</HashRouter>
        );
    }




	}
	function clickedWhat(){
		alert("clicked on What? Button");
	}
 	function click (selected : int) {
			alert("wuz up " + selected);
	}

export default Main;
