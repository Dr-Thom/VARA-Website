import React, {Component} from 'react';
import '../Not_Used/App.css';


class SingUp extends Component {
    singUp = (e) => {
        e.preventDefault();
	    console.log(e.target);
};
    render() {
        return (
            <div class="d-flex justify-content-center">
                <form class="col-4 d-flex flex-column" onSubmit={this.singIn}>
					<label class="d-flex justify-content-center m-0 mb-4">
						<h5 class="d-flex flex-column justify-content-center col-4 text-right m-0">Name:</h5>
						<input class="col-8 border rounded p-2" type="text" name="name" placeholder="Name" />
					</label>

					<label class="d-flex justify-content-center m-0 mb-4">
						<h5 class="d-flex flex-column justify-content-center col-4 text-right">Email:</h5>
						<input class="col-8 border rounded p-2" type="email" name="email" placeholder="Email"/>
					</label>
                    <label class="d-flex justify-content-center mb-4">
                        <h5 class="d-flex flex-column justify-content-center col-4 text-right">Password:</h5>
                        <input class="col-8 border rounded p-2" type="password" name="password" placeholder="Password" />
                    </label>
                
                    <label class="d-flex justify-content-center mb-4">
                        <h5 class="d-flex flex-column justify-content-center col-4 text-right">Re-type Password:</h5>
                        <input class="col-8 border rounded p-2" type="password" name="password" placeholder="Password" />
                    </label>
                    <button class="btn btn-primary col-2 ml-auto" type="submit">Sign up</button>
                </form>
            </div>
        );
    }
}

export default SingUp;
