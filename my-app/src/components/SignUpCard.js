import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUpCard extends Component {
    render() {
        return(
        <div class="card text-center">
            <div class="card-body">
                <h2 class="card-title font-weight-bold">Signup</h2>
                <br></br>
                <div class="shadow p-3 mb-5 bg-white rounded">
                    <div class="form-group" style={{height: 125+'px'}}>
                        <div class="input-group input-group-sm mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-sm">AngCorp User</span>
                            </div>
                            <input type="text" class="form-control" aria-label="txtUser" aria-describedby="inputGroup-sizing-sm" />
                        </div>

                        <div class="input-group input-group-sm mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-sm">Password</span>
                            </div>
                            <input type="password" class="form-control" aria-label="txtPass" aria-describedby="inputGroup-sizing-sm" />
                        </div>

                        <div class="input-group input-group-sm mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-sm">Confirm password</span>
                            </div>
                            <input type="password" class="form-control" aria-label="txtPassConf" aria-describedby="inputGroup-sizing-sm" />
                        </div>
                    </div>
                </div>
                <p className="text-monospace" style={{ fontSize: 18+'px'}}>🎉👏¡Bienvenido a Enseñame!👏🎉</p>
                <Link to="/signup" ><button type="button" class="btn btn-dark signup" onClick={this.signUp} >Signup</button></Link>
            </div>
        </div>
        )
    }
}
export default SignUpCard;