import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from "axios"
import CreateEmployee from './components/createEmployee.jsx';
import EmployeesList from './components/EmployeesList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'employee',
      data:[],
      changed:"NO"
    };
    this.deleteFunc=this.deleteFunc.bind(this)
    this.getData=this.getData.bind(this)
  }

  componentDidMount(){
    this.getData()
  }
    getData(){
    axios.get("/api/employee").then(res=>{
      this.setState({data:res.data})
      console.log(res.data)
    })
  }
  
  deleteFunc(e){
    axios.delete(`/api/employee/${e.target.id}`).then((result)=>{
        this.setState({changed:"YES"})
    })
    this.getData()
    }
  changeView(option) {
    this.setState({
      view: option
    });
  }

  render() {
    return (
      <div>
        <div className="nav" >
          <span className="logo">HR EMPLOYEES MANAGEMENT SYSTEM</span>
          <span className={this.state.view === 'employee'
            ? 'nav-selected'
            : 'nav-unselected'}
          onClick={() => this.changeView('employee')}>
            Employees List
          </span>
          <span className={this.state.view === 'practice'
            ? 'nav-selected'
            : 'nav-unselected'}
          onClick={() => this.changeView('practice')}>
            Create new employee
          </span>
        </div>

        <div className="main">
          {this.state.view === 'employee'
            ? <EmployeesList  data={this.state.data} deleteFunc={this.deleteFunc} getData={ this.getData} changed={this.state.changed}/>
            : <CreateEmployee />
          }
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
