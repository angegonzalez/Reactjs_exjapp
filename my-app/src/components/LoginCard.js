import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginCard extends Component {
    render() {
        return (
            <div class="card text-center ">
                <div class="card-body">
                    <h2 class="card-title font-weight-bold">Login</h2>
                    <br></br>
                    <div class="shadow p-3 mb-5 bg-white rounded">
                    <div class="form-group">
                        <div class="input-group mb-3">
                            <input type="text" id="txtUser" class="form-control " placeholder="Username of AngCorp" aria-label="user"
                                aria-describedby="basic-addon2"></input>
                                <div class="input-group-append">
                                    <span class="input-group-text" id="basic-addon2">@ang.com.co</span>
                                </div>
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">#</span>
                            </div>
                            <input type="password" id="txtPass" class="form-control" placeholder="Password" aria-label="pass"
                                aria-describedby="basic-addon1">
                            </input>
                        </div>
                    </div>
                    </div>
                    <button type="button" class="btn btn-dark" onclick="login()">Login</button>
                    <p className="text-monospace" style={{paddingTop: 8+'px'}}>⬇️¿No te has registrado?⬇️</p>
                    <button type="button" class="btn btn-outline-dark" onclick="login()">Signup</button>
                </div>
            </div>
        )
    }
}
export default LoginCard;