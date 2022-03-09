import React, { Component } from 'react';
import {BsPenFill , BsTrashFill } from "react-icons/bs";

export default class TodoItem extends Component {
  render() {
    const {title,handleDelete,handleEdit}=this.props
    return (
      <li className='list-group-item text-capitalize 
      d-flex justify-content-between my-2 text-white'>
                <h6>{title}</h6>
                <div className='todo_icons'>
                          <span 
                          className='mx-2 text-success'
                          onClick={handleEdit}
                          >
                                    <BsPenFill/>
                          </span>
                          <span 
                          className='mx-2 text-danger'
                          onClick={handleDelete}
                          >
                                    <BsTrashFill/>
                          </span>
                </div>

      </li>
    )
  }
}
