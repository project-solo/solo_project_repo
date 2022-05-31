import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from "axios"
import Practice from './components/Practice.jsx';
import PhraseList from './components/PhraseList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'phrases',
      data:[]
    };
    this.deleteFunc=this.deleteFunc.bind(this)
  }
  componentDidMount(){
    axios.get("/api/employee").then(res=>{
      this.setState({data:res.data})
      console.log(res.data)
    })
  }
  deleteFunc(e){
    axios.delete(`/api/employee/${e.target.id}`).then((result)=>{
        console.log(e.target.id)
    })
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
          <span className={this.state.view === 'phrases'
            ? 'nav-selected'
            : 'nav-unselected'}
          onClick={() => this.changeView('phrases')}>
            Phrase List
          </span>
          <span className={this.state.view === 'practice'
            ? 'nav-selected'
            : 'nav-unselected'}
          onClick={() => this.changeView('practice')}>
            Practice
          </span>
        </div>

        <div className="main">
          {this.state.view === 'phrases'
            ? <PhraseList  data={this.state.data} deleteFunc={this.deleteFunc}/>
            : <Practice />
          }
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
