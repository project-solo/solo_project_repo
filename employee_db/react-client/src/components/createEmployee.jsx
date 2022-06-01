import React from 'react';
import axios from 'axios';

class CreateEmployee extends React.Component{
    constructor(props) {
      super(props);
      this.state={
        firstName:"",
        lastName:"",
        email:"",
        position:"",
        salary:"",
       date:""
      }
    }
   AddEmployeeToddb(a,b,c,d,e,f){
        axios.post("api/employee/",{
            firstName:a,
            lastName:b,
            email:c,
            position:d,
            salary:e,
            date:f

        }).then(res=>console.log(res))
    }
   
      render(){
  return (
    <div className="small-container">
        <form >
            <h1>Add Employee</h1>
            <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                type="text"
               name="firstName"
               onChange={(e)=>{this.setState({firstName:e.target.value})}}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
                id="lastName"
                type="text"
                name="lastName"   
                onChange={(e)=>{this.setState({lastName:e.target.value})}} />
            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="email"
                name="email"
                onChange={(e)=>{this.setState({email:e.target.value})} }
            />
            <label htmlFor="salary">Salary ($)</label>
            <input
                id="salary"
                type="number"
                name="salary"
                onChange={(e)=>{this.setState({salary:e.target.value})}}
            />
            <label htmlFor="position">position</label>
            <input
                id="position"
                type="position"
                name="position"
                onChange={(e)=>{this.setState({position:e.target.value})} }
            />
            <label htmlFor="date">Date</label>
            <input
                id="date"
                type="date"
                name="date"
                onChange={(e)=>{this.setState({date:e.target.value})}}

            />
            <div style={{ marginTop: '30px' }}>
                <input type="submit" value="Add" 
                onClick={()=>{this.AddEmployeeToddb(this.state.firstName,this.state.lastName,this.state.email,this.state.position,this.state.salary,this.state.date); this.setState({firstName:"",lastName:"",email:"",salary:"",date:""})}}/>
                <input
                    style={{ marginLeft: '12px' }}
                    className="muted-button"
                    type="button"
                    value="Cancel"
                   
                />
            </div>
        </form>
    </div>
);
}
}
export default CreateEmployee;
