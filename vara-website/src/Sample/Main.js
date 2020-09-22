import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import VaraName from "../Images/vara_name.png";

class Main extends Component {
	render() {
		let varaName = "/src/Images/vara_name.png";
		return (
			<HashRouter>
				<div>
					<img src={VaraName} />{" "}
					<h1> Simple SPA </h1>{" "}
					<ul className="header">
						<li>
							<NavLink exact to="/">
								Home{" "}
							</NavLink>{" "}
						</li>{" "}
						<li>
							<NavLink
								exact
								to="/sample/stuff"
							>
								Stuff{" "}
							</NavLink>{" "}
						</li>{" "}
						<li>
							<NavLink
								exact
								to="/sample/contact"
							>
								Contact{" "}
							</NavLink>{" "}
						</li>{" "}
					</ul>{" "}
					<div className="content">
						<Route
							exact
							path="/"
							component={Home}
						/>{" "}
						<Route
							exact
							path="/sample/stuff"
							component={Stuff}
						/>{" "}
						<Route
							exact
							path="/sample/contact"
							component={Contact}
						/>{" "}
					</div>{" "}
				</div>{" "}
			</HashRouter>
		);
	}
}

export default Main;
