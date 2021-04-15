import React, { Component } from 'react'
import shortid from "shortid";

export default class TodoForm extends Component {
    state={
        text:""
    };

    handleChange = event =>{
    this.setState({
        [event.target.name]: event.target.value
    });
    };

    handleSubmit = (event) =>{

        event.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.text,
            complete:false
        })
        this.setState({
            text: ""
          });

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
        <input
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="todo..."
        />
        <button type="button" class="btn btn-primary btn-lg" onClick={this.handleSubmit}>Add Todo</button>
      </form>
        )
        
    }
}
