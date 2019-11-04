import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand font-weight-bold" href="/">Enseñame
                    <a className="brand-team ml-2 font-weight-normal">By AngCorp</a>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" >{this.props.active} <span className="sr-only">(current)</span></a>
                        </li>
                        <Link to='/contact'>
                            <li className="nav-item">
                                <a className="nav-link">Contact</a>
                            </li>
                        </Link>
                         <Link to = '/about'>
                        <li className="nav-item">
                            <a className="nav-link" href="/users">About</a>
                        </li>
                        </Link> 
                    </ul>
                </div>
            </nav>
        )
    }
}
export default NavBar;
