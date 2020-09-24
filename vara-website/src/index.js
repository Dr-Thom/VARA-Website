import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
	<React.StrictMode>
    <Header />
    </React.StrictMode>,
    document.getElementById("header"),
);

ReactDOM.render(
    <React.StrictMode>
    <Main / >
    </React.StrictMode>,
    document.getElementById("main"),
);

ReactDOM.render(
	<React.StrictMode >
    <Footer />
    </React.StrictMode>,
    document.getElementById("footer"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
