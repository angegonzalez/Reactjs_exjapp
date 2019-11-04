import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import professor from '../resources/professor.svg';
import blackboard from '../resources/blackboard.svg';
import notebook from '../resources/notebook.svg';
import bookshelf from '../resources/bookshelf.svg';
import wallet from '../resources/wallet.svg';
class AppNavBar extends Component {
    render()
    {
        return(
            <nav class="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand font-weight-bold" href="/">Enseñame
                    <a className="brand-team ml-2 font-weight-normal">By AngCorp</a>
                </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link">
                            <img src={professor} width="40" height="45" class="d-inline-block align-top" alt=""
                                onclick="serProfesor()"/>
                            <span class="navbar-text">Ser profesor</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">
                            <img src={blackboard} width="40" height="45" class="d-inline-block align-top"
                                alt=""/>
                            <span class="navbar-text">
                                Solicitar clases
                            </span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><img src={notebook} width="40" height="45" class="d-inline-block align-top"
                                alt=""/>
                            <span class="navbar-text">
                                Ver mis clases
                            </span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><img src={bookshelf} width="40" height="45" class="d-inline-block align-top"
                                alt=""/>
                            <span class="navbar-text">
                                Ver mis tutorias
                            </span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><img src={wallet} width="40" height="45" class="d-inline-block align-top"
                                alt=""/>
                            <span class="navbar-text">
                                EduPay
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        )
    }
}
export default AppNavBar