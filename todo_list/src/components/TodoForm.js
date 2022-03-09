import React, { Component } from 'react'
import { BsFillStickiesFill } from "react-icons/bs";
export default class TodoForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {item,handleChange,handleSubmit,editItem}=this.props;
    return (
      <div className='TodoForm '>
        <h3 className='text-white text-capitalize text-center'>Todo Input</h3>
        <div className='card card-body my-3 bg-dark'>
          <form onSubmit={handleSubmit}>
            <div className='input-group bg-dark'>
               <div className='input-group-prepend input-group-text bg-primary text-white border-0'>
                 <BsFillStickiesFill />
               </div>
            <input 
            type='text' 
            className='form-control text-capitalize bg-dark text-white border-0'
            placeholder='add a todo item'
            value={item}
            onChange={handleChange}
            ></input>
            <div className="input-group-append">
            <button 
            type='submit' 
            className={
              editItem ?
              "btn btn-block btn-success":
              "btn btn-block btn-primary"
            }
            >{
              editItem ?
              "edite item":"add item"
            }
            </button>
            </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
