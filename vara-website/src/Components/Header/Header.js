import React from "react";
import VaraLogo from "../../Images/vara_logo.png";



function Header() {
	return (
		<div className="">
			<header className="">
				<img
					src={VaraLogo}
					className=""
					alt="logo"
				/>
				<p> example header file </p>{" "}
			</header>{" "}
		</div>
	);
}

export default Header;
