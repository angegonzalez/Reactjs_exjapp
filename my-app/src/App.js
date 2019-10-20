import React , {Component}from 'react';
import './App.css';
import NavBar from './components/NavBar';

import { tasks } from './taskslist.json';


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

    const tasks= this.state.tasks.map((task,i)=>
    {
      return(
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">
                  {task.title}
                </h5>
                <span className="badge badge-pill badge-warning">{task.priority}</span>
              </div>
              <div className="card-body">
                <p className="card-text">
                  {task.description}
                </p>
                <h6>Responsible: <span class="badge badge-secondary">{task.responsible}</span></h6>
              </div>
            </div>
            <br></br>
          </div>
      )
        
    }
    )
    return (
      <div className="App">

        <NavBar section="Tasks" brand="By AngCorp" ntasks={this.state.tasks.length}></NavBar>
        <br></br>
        <div className="container-fluid">
          <div className="row">
            {tasks}
            
          </div>
          
        </div>
      </div>
    );
    }

  }

export default App;



