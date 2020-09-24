import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import { Nav } from "react-bootstrap";

import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import VaraName from "../Images/vara_name.png";

class Main extends Component {

    render() {
        return (
			<HashRouter>
            <div className="content">
			<Nav className="justify-content-center" activeKey="#/" onSelect={(selectedKey) => click(`${selectedKey}`)}>
			   <Nav.Item>
				   <Nav.Link eventKey="Home" className="Header" href="#/">Home</Nav.Link>
			   </Nav.Item>
			   <Nav.Item>
				   <Nav.Link eventKey="Stuff" className="Header" href="#/sample/stuff">Stuff</Nav.Link>
			   </Nav.Item>
			   <Nav.Item>
				   <Nav.Link eventKey="Contact" className="Header" href="#/sample/contact">Contact</Nav.Link>
			   </Nav.Item>
			</Nav>

			</div>
			<div className = "content" >
				<Route exact path = "/" component = { Home }/>
				<Route exact path = "/sample/stuff" component = { Stuff }/>
				<Route exact path = "/sample/contact" component = { Contact }/>
			</div>
			</HashRouter>

        );
    }

	}
	function click(selected : int){
		alert("wuz up " + selected);
}

export default Main;
