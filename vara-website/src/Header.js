import React from "react";
import VaraLogo from "./Images/vara_logo.png";
import VaraName from "./Images/vara_name.png";
import "./App.css";

function Header() {
    return (
		<div className = "App" >
			<img src = { VaraName } alt = ""/>
		</div>
    );
}

export default Header;
