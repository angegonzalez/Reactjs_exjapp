import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import App from '../App';

var bandera=0;
class LoginCard extends Component {
    
    login() {
        var firebase = require("firebase/app");
        require("firebase/firestore");
        var db = firebase.firestore();
        var usuario = document.getElementById("txtUser").value;
        var contraseña = document.getElementById("txtPass").value;
        var arrayUsuarios = new Array();
        var arrayContraseñas = new Array();
        db.collection("users").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var users = `${doc.data().username}`;
                var password = `${doc.data().password}`;
                arrayUsuarios.push(users);
                arrayContraseñas.push(password);

            });
            for (var i = 0; i < arrayUsuarios.length; i++) {
                if (arrayUsuarios[i] === usuario && arrayContraseñas[i] === contraseña) {
                    alert("Hola " + usuario);
                    window.location = "/main";
                }
                else {
                    if(bandera==0)
                    {
                        var alerta= document.createElement("p");
                        var alert_text= document.createTextNode("Los datos suministrados no coinciden");
                        alerta.appendChild(alert_text);
                        alerta.style="padding-top: 15px; padding-bottom: 0px; color:red ";
                        alerta.className="text-monospace";
                        document.getElementById("login-card").appendChild(alerta);
                        bandera++;
                    }
                    
                    
                }
            }

        });

    }


    render() {
        return (
            <div class="card text-center">
                <div class="card-body" id="login-card">
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
                    <button type="button" class="btn btn-dark" onClick={this.login}>Login</button>
                    <p className="text-monospace" style={{ paddingTop: 8 + 'px' }}>⬇️¿No te has registrado?⬇️</p>
                    <Link to="/signup" ><button type="button" class="btn btn-outline-dark" onClick={this.signUp}>Signup</button></Link>
                </div>
            </div>
        );

    }
}
export default LoginCard;

