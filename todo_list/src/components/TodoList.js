import React, { Component } from 'react';
import TodoItem from './TodoItem';
export default class TodoList extends Component {
  render() {
    const {items,clearList,handleDelete,handleEdit}=this.props;
    return (
      <div className='TodoList'>
        <h3 className='text-white text-capitalize text-center'>Todo List</h3>
        <ul className='list-group my-5'>
          {
            items.map(item =>{
              return <TodoItem 
              key={item.id} 
              title={item.title}
              handleDelete={()=>handleDelete(item.id)}
              handleEdit={()=>handleEdit(item.id)}
              />
            })
          }
        </ul>
        <button type='button' className='btn btn-danger btn-block 
          text-capitalize mt-2'
          onClick={clearList}
          >
          clear list
          </button>
      </div>
    )
  }
}
