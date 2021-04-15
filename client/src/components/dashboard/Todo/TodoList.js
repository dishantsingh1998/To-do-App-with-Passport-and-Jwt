import React, { Component } from 'react'
import  TodoForm  from "./TodoForm";
import Todo from "./Todo";
import {DeleteTwoTone} from '@ant-design/icons';

export default class TodoList extends React.Component {
state= {
    todos: [],
    todoToShow: "all",
    toggleAllComplete: true
};

addTodo = todo => {
    this.setState(state => ({
      todos: [todo, ...state.todos]
    }));
  };

  toggleComplete = id => {
    this.setState(state => ({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    }));
  };

  updateTodoToShow = s => {
    this.setState({
      todoToShow: s
    });
  };

  handleDeleteTodo = id => {
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== id)
    }));
  };

  

    render() {

        let todos = [];

        if (this.state.todoToShow === "all") {
          todos = this.state.todos;
        } else if (this.state.todoToShow === "active") {
          todos = this.state.todos.filter(todo => !todo.complete);
        } else if (this.state.todoToShow === "complete") {
          todos = this.state.todos.filter(todo => todo.complete);
        }
        return (
            <div>
            <TodoForm  onSubmit={this.addTodo} />
            
            {todos.map(todo => (
              <h3>
              <nav class="navbar navbar-light bg-light">
              <span class="navbar-brand mb-0 h1"></span>
              <Todo 
                key={todo.id}
                toggleComplete={() => this.toggleComplete(todo.id)}
                onDelete={() => this.handleDeleteTodo(todo.id)}
                todo={todo}
              />
               </nav>
               </h3>
            ))}
           
            
            
            <div>
              todos left: {this.state.todos.filter(todo => !todo.complete).length}
            </div>
            <div class="btn-group" role="group" aria-label="Basic example">
            <div className="input-field col s12">
              <button type="button" class="btn btn-primary btn-sm" onClick={() => this.updateTodoToShow("all")}>All</button>
              <button  type="button" class="btn btn-primary btn-sm" onClick={() => this.updateTodoToShow("active")}>Active</button>
              <button  type="button" class="btn btn-primary btn-sm" onClick={() => this.updateTodoToShow("complete")}> Complete</button>
            </div>
            </div>
            
          </div>
        )
    }
}
