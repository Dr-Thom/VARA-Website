import React, { Component } from 'react';
import '../Not_Used/App.css';

class SignIn extends Component {
	signIn = (e) => {
		e.preventDefault();
		console.log(e.target.value);
	};
	render() {
		return (
			<div className="d-flex justify-content-center">
				<form className="col-4 d-flex flex-column" onSubmit={this.singIn}>
					<label className="d-flex justify-content-center m-0 mb-4">
						<h5 className="d-flex flex-column justify-content-center col-4 text-right m-0">Email:</h5>
						<input className="col-8 border rounded p-2" type="email" name="email" placeholder="Email" />
					</label>

					<label className="d-flex justify-content-center m-0 mb-4">
						<h5 className="d-flex flex-column justify-content-center col-4 text-right">Password:</h5>
						<input
							className="col-8 border rounded p-2"
							type="password"
							name="password"
							placeholder="Password"
						/>
					</label>

					<button className="btn btn-primary col-2 ml-auto" type="submit">
						Sign in
					</button>
				</form>
			</div>
		);
	}
}

export default SignIn;
