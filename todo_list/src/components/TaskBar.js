import React, { Component } from 'react'
// import { BsFillStickiesFill } from "react-icons/bs";
export default class TaskBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
        currentCollection: "1",
        tasks: [],
    }
  }
  componentDidMount() {
    fetch('/json/collection.json').then(res => res.json()).then(response=>{
        this.setState({tasks: response})
    })
  }
  render() {
    const{changeState}=this.props
    return (
      <div className="taskar text-white h-100">
          <div className="list-group ">
                    <button 
                    type="button" 
                    className="list-group-item list-group-item-action active border-0 px-5 d-flex"
                    style={{color:'#ff008a'}}
                    >
                    Collections</button>
                    {this.state.tasks.map(task =>{
                         return <button 
                         type="button" 
                         key={task.id} 
                         onClick={()=>changeState(task.id)}
                         className="list-group-item list-group-item-action px-5">{task.title}</button>
                    })}
          </div>
      </div>
    )
  }
}
