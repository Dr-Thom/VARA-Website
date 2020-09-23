import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import { Nav } from "react-bootstrap";

import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import VaraName from "../Images/vara_name.png";

class Main extends Component {

    render() {
		const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
        return (
			<HashRouter>
            <div className="content">
			<Nav className="justify-content-center" activeKey="/home">
			   <Nav.Item>
				   <Nav.Link eventKey="1" className="Header" href="#/">Home</Nav.Link>
			   </Nav.Item>
			   <Nav.Item>
				   <Nav.Link eventKey="2" className="Header" href="#/sample/stuff">Stuff</Nav.Link>
			   </Nav.Item>
			   <Nav.Item>
				   <Nav.Link eventKey="3" className="Header" href="#/sample/contact">Contact</Nav.Link>
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

export default Main;
