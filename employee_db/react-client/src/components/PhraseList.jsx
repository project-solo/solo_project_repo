import React from 'react';

const PhraseList = (props) => {

  return(
<div>
    <h1>Employees List</h1>
      <div className="phrases">
        <div className="phrase-table">
          <div className="phrase-header phrase-row">
            <div className="phrase-data">firstName</div>
            <div className="phrase-data">lastName</div>
            <div className="phrase-data">email</div>
            <div className="phrase-data">position</div>
            <div className="phrase-data">salary</div>
            <div className="phrase-data">date</div>
          </div>
          { props.data.map((e,i)=>{
           return(
            <div key={i} >
          <div className="phrase-row" >
            <div className="phrase-data">{e.firstName}</div>
            <div className="phrase-data">{e.lastName}</div>
            <div className="phrase-data">{e.email}</div>
            <div className="phrase-data">{e.position}</div>
            <div className="phrase-data">{e.salary}</div>
            <div className="phrase-data">{e.date}</div>
            <div></div>
          </div>
            <button key={i} >Edit</button> 
            <button  id={e._id} onClick={props.deleteFunc} >Delete</button> 
          </div>
           )
         })
          }
        </div>
      </div>
  </div>
  )
}
  


export default PhraseList;

