import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href="#">{this.props.section}
                    <span class="badge badge-dark ml-2">{this.props.ntasks}</span>
                    <span class="sr-only">tasks number</span>
                    <a className="brand-team ml-2"> {this.props.brand}</a>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <Link to='/'>
                        <li className="nav-item active">
                            <a className="nav-link" >Home <span className="sr-only">(current)</span></a>
                        </li>
                        </Link>
                        <Link to='/addingtasks'>
                            <li className="nav-item">
                                <a className="nav-link">Adding tasks</a>
                            </li>
                        </Link>
                        <li className="nav-item">
                            <a className="nav-link" href="/users">Pricing</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default NavBar;
