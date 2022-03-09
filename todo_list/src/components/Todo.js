import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TaskBar from "./TaskBar";
import {v4 as uuid} from "uuid";
export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      id:uuid(),
      item:'',
      editItem:false,
      currentTask:'1'
    }
  }
    changeState=(id)=>{
      this.setState({currentTask: id})
    }
    loadPersonalTasks=()=>{
      fetch('/json/personal.json').then(response => {
        return response.json()
    }).then(res =>{
        this.setState({items: res})
    })
    }
    loadUniTasks=()=>{
      fetch('/json/uni.json').then(response => {
        return response.json()
    }).then(res =>{
        this.setState({items: res})
    })     
    }
    loadMaktabTasks=()=>{
      fetch('/json/maktab.json').then(response => {
        return response.json()
    }).then(res =>{
        this.setState({items: res})
    })     
    }
    componentDidMount(){
      this.loadPersonalTasks();
    }
    componentDidUpdate(prevProps){
      let currentTask = this.state.currentTask;
      if(currentTask !== prevProps){
          switch (currentTask) {
            case '1':
              this.loadPersonalTasks();
              break;
            case '2':
              this.loadUniTasks();
              break;
            case '3':
              this.loadMaktabTasks();
              break;
            default:
              this.loadPersonalTasks();
          }
      }
    }
  handleChange = (e)=>{
      this.setState({
        item:e.target.value
      })
  }
  handleSubmit = (e)=>{
      e.preventDefault();
      const newItem = {
        id:this.state.id,
        title:this.state.item
      }
      const updateItem = [...this.state.items, newItem]
      this.setState({
        items:updateItem,
        item:"",
        id:uuid(),
        currentTask:'1',
        editItem:false,
      })
    }
    clearList=()=>{
      this.setState({
        items:[]
      })
    }
    handleDelete=(id)=>{
      const filterItems = this.state.items.filter(item=>item.id !==id )
      this.setState({
            items:filterItems
      })
    }
    handleEdit=(id)=>{
      const filterItems = this.state.items.filter(item=>item.id !==id )
      const selectedItem = this.state.items.find(item=>item.id === id)
      this.setState({
            items:filterItems,
            id:id,
            item:selectedItem.title,
            editItem:true,
      })
    }
  render() {
    return (
      <div className="wrapper d-flex bg-dark m-5 overflow-auto shadow rounded">
       <TaskBar 
       changeState={this.changeState}
       />
       <div className="container">
        <div className="row">
         <div className="col-10 mx-auto col-md-8 mt-4">
           <TodoForm 
             item={this.state.item}
             handleChange={this.handleChange}
             handleSubmit={this.handleSubmit}
             editItem={this.state.editItem}
           />
           <TodoList 
           currentTask={this.state.currentTask}
           items={this.state.items} 
           clearList={this.clearList}
           handleDelete={this.handleDelete}
           handleEdit={this.handleEdit}
           />
          </div>
       </div>
      </div>
      </div>
    )
  }
}
