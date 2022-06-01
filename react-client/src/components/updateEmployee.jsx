import React from "react"
import axios from "axios"

class UpdateEmployees extends React.Component{
constructor (props){
    super(props)
    this.state={
        salary:"",
        
    }
    // this.updateEmployee=this.updateEmployee.bind(this)
    this.handleOnChange=this.handleOnChange.bind(this)

}
updateEmployee(a){
    axios.put(`http://localhost:3000/api/employee/${this.props.id}`,{salary:a}).then((res) => console.log(res))
    this.props.getData()
}
handleOnChange (e){
    this.setState({
        salary:e.target.value,
        })
}
render(){
    console.log(this.props.id)
    return(
        <span>
         <textarea placeholder="add a new salary" onChange={this.handleOnChange}> </textarea>
         <button onClick={()=>{this.updateEmployee(this.state.salary)}}>confirm</button>
         
         </span>
    )
}
}
export default UpdateEmployees;