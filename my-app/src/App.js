import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import LoginCard from './components/LoginCard';
import { notices } from './taskslist.json';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUpCard from './components/SignUpCard';
import AppNavBar from './components/AppNavBar';


var firebase = require("firebase/app");
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBUKo-7_RNCanGw1_EtGc8bejX5Hk2-Gag",
  authDomain: "angapp-6e8f8.firebaseapp.com",
  databaseURL: "https://angapp-6e8f8.firebaseio.com",
  projectId: "angapp-6e8f8",
  storageBucket: "angapp-6e8f8.appspot.com",
  messagingSenderId: "626239018121",
  appId: "1:626239018121:web:4299c3f1875e764e21e258"
};
firebase.initializeApp(firebaseConfig);

class App extends Component {
  constructor() {
    super();
    this.state = {
      notices
    }
  }
  render() {
    const notices = this.state.notices.map((notice, i) => {
      return (
        <div class="card mt-2 text-white bg-dark mb-3" style={{ maxWidth: 25 + 'rem' }}>
          <div class="card-body">
            <h5 class="card-title">{notice.title}</h5>
            <p class="card-text text-left text-monospace">{notice.description}</p>
          </div>
          <div class="card-footer">
            <p class="card-text text-left text-monospace"><small class="text-muted">Last updated {notice.minutes} mins ago</small></p>
          </div>
        </div>

      )
    }
    )
    return (
      <Router>
        <div className="App">

          <Route exact path="/">
            <NavBar active="Login" ></NavBar>
            <br></br>
            <div className="row">
              <div className="col-md-3">
              </div>
              <div className="col-md-4">
                <div className="container" style={{ paddingTop: 10 + '%' }}>
                  <LoginCard></LoginCard>
                </div>
              </div>
              <div class="col-md-4">
                <div className="container" style={{ paddingTop: 10 + '%', paddingLeft: 0 }}>
                  {notices}
                </div>
              </div>

            </div>
          </Route>

          <Route path="/signup">
            <NavBar active="SignUp" ></NavBar>
            <br></br>
            <div className="row">
              <div className="col-md-3">
              </div>
              <div className="col-md-4">
                <div className="container" style={{ paddingTop: 10 + '%' }}>
                  <SignUpCard></SignUpCard>
                </div>
              </div>
              <div class="col-md-5">
                <div className="container" style={{ paddingTop: 10 + '%', paddingLeft: 0 + '%' }}>
                  {notices}
                </div>
              </div>
            </div>
          </Route>

          <Route path="/main">
            <AppNavBar></AppNavBar>
          </Route>

        </div>
      </Router>
    );
  }

}

export default App;


