import React from "react";
import VaraCar from "../../Images/vara_car.png";
import VaraName from "./../../Images/vara_name.png";
import VaraTagLine from "./../../Images/vara_tagline.png";
import "../../Not_Used/App.css";

function Header() {
    return (
		<div className = "App color_black inline-block" >
			<img className="logo" src = { VaraName } alt = ""/>
			<img className="logo" src = { VaraTagLine } alt = ""/>
		</div>
    );
}

export default Header;
