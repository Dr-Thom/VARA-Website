import React, { Component } from "react";
import techSupport from "../Images/tech-support.jpg";


class TechnicalSupport extends Component {
	render() {
		return (
			<div className="container">
                <div className ="row">
                    <div className ="col-md">
                         <img src ={techSupport}/>
                    </div>
                    <div className ="col-md">
                        <p className="accent-clr tech-text">
                            We are here to help you 24/7, 
                            better platform understating and technical support
                        </p>
                    </div>
               </div>
			</div>
		);
	}
}

export default TechnicalSupport;
