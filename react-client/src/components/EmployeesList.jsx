import React from 'react';
import UpdateEmployees from './updateEmployee.jsx';
import axios from 'axios';
  class EmployeesList extends React.Component {
    constructor(props) {
      super(props);
      this.state={
    showUp: "No",
    data:[],
    id:0
}
    }
  //   componentDidUpdate(){
  //     if(this.props.changed==="YES"){
  //       axios.get("/api/employee").then(res=>{
  //         this.setState({data:res.data})
  //     })
  //   }
  // }
render() {
  console.log(this.state.id)

  return(
<div>
    <h1>Employees List</h1>
      <div className="employees">
        <div className="employee-table">
          <div className="employee-header employee-row">
            <div className="employee-data">firstName</div>
            <div className="employee-data">lastName</div>
            <div className="employee-data">email</div>
            <div className="employee-data">position</div>
            <div className="employee-data">salary</div>
            <div className="employee-data">date</div>
          </div>
          { this.props.data.map((e,i)=>{
            console.log(e._id)
           return(
            <div key={i} >
          <div className="employee-row" >
            <div className="employee-data">{e.firstName}</div>
            <div className="employee-data">{e.lastName}</div>
            <div className="employee-data">{e.email}</div>
            <div className="employee-data">{e.position}</div>
            <div className="employee-data">{e.salary}</div>
            <div className="employee-data">{e.date}</div>
            <div></div>
          </div>
            <button key={i}  onClick={()=>{this.setState({showUp:"YES",id:e._id})}} >Edit Salary</button> 
            <button  id={e._id} onClick={this.props.deleteFunc}   >Delete</button> 
            <div>{this.state.id===e._id && this.state.showUp==="YES" && <UpdateEmployees  getData={this.props.getData} id={this.state.id}/>} </div>
          </div>
           )
         })
          }
        </div>
      </div>
  </div>
  )
}
  
    }

export default EmployeesList;

