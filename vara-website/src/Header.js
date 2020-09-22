import React from "react";
import VaraLogo from "./Images/vara_logo.png";
import "./App.css";

function Header() {
	return (
		<div className="App">
			<header className="App-header">
				<img
					src={VaraLogo}
					className="App-logo"
					alt="logo"
				/>
				<p> example header file </p>{" "}
			</header>{" "}
		</div>
	);
}

export default Header;
