import React, {Component} from 'react';
import '../Not_Used/App.css';


class SingUp extends Component {
    singUp = (e) => {
	console.log(e.target.toString());
};
    render() {
        return (
            <div class="d-flex justify-content-center">
                <form class="col-7 d-flex flex-column" onSubmit={this.singUp}>
                     <label class="d-flex justify-content m-0 mb-4">
                        <h5 class="d-flex flex-column justify-content-center col-5 text-right m-0">Name:</h5>
                        <input class="col-7 border rounded p-2" type="text" name="name" placeholder="Name" />
                    </label>

                    <label class="d-flex justify-content m-0 mb-4">
                        <h5 class="d-flex flex-column justify-content-center col-5 text-right m-0">Email:</h5>
                        <input class="col-7 border rounded p-2" type="email" name="email" placeholder="Email" />
                    </label>

                    <label class="d-flex justify-content-center mb-4">
                        <h5 class="d-flex flex-column justify-content-center col-5 text-right">Password:</h5>
                        <input class="col-7 border rounded p-2" type="password" name="password" placeholder="Password" />
                    </label>
                
                    <label class="d-flex justify-content-center mb-4">
                        <h5 class="d-flex flex-column justify-content-center col-5 text-right">Confirm Password:</h5>
                        <input class="col-7 border rounded p-2" type="password" name="password" placeholder="Password" />
                    </label>
                    <button class="btn btn-primary col-2 ml-auto" type="submit">Sign up</button>
                </form>
            </div>
        );
    }
}

export default SingUp;
