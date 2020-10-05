import React, {Component} from 'react';
import '../Not_Used/App.css';


class SingUp extends Component {
    singUp = (e) => {
        e.preventDefault();
	    console.log(e.target);
};
    render() {
        return (
            <div className="d-flex justify-content-center">
                <form className="col-4 d-flex flex-column" onSubmit={this.singIn}>
					<label className="d-flex justify-content-center m-0 mb-4">
						<h5 className="d-flex flex-column justify-content-center col-4 text-right m-0">Name:</h5>
						<input className="col-8 border rounded p-2" type="text" name="name" placeholder="Name" />
					</label>

					<label className="d-flex justify-content-center m-0 mb-4">
						<h5 className="d-flex flex-column justify-content-center col-4 text-right">Email:</h5>
						<input className="col-8 border rounded p-2" type="email" name="email" placeholder="Email"/>
					</label>
                    <label className="d-flex justify-content-center mb-4">
                        <h5 className="d-flex flex-column justify-content-center col-4 text-right">Password:</h5>
                        <input className="col-8 border rounded p-2" type="password" name="password" placeholder="Password" />
                    </label>

                    <label className="d-flex justify-content-center mb-4">
                        <h5 className="d-flex flex-column justify-content-center col-4 text-right">Re-type Password:</h5>
                        <input className="col-8 border rounded p-2" type="password" name="password" placeholder="Password" />
                    </label>
                    <button className="btn btn-primary col-2 ml-auto" type="submit">Sign up</button>
                </form>
            </div>
        );
    }
}

export default SingUp;
