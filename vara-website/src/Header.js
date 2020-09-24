import React from "react";
import VaraCar from "./Images/vara_car.png";
import VaraName from "./Images/vara_name.png";
import "./App.css";

function Header() {
    return (
		<div className = "App" >
			<img src = { VaraCar} alt = ""/>
			<img src = { VaraName } alt = ""/>
		</div>
    );
}

export default Header;
