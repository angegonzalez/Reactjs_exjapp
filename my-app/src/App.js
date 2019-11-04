import React , {Component}from 'react';
import './App.css';
import NavBar from './components/NavBar';
import LoginCard from './components/LoginCard';
import { tasks } from './taskslist.json';
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';

class App extends Component {
  constructor()
  {
    super();
    this.state={
      tasks
    }
  }
  render()
  {
    return (
      <Router>
      <div className="App">
        <NavBar section="Welcome" brand="By AngCorp" ></NavBar>
        <br></br>

        <div className="row">
          <div className="col-md-4">
              <div className="container-fluid">
                <LoginCard></LoginCard>
              </div>
          </div>
        </div>
        
        <Switch>
        </Switch>
      </div>
      </Router>
    );
    }

  }

export default App;


