import React, { Component } from 'react';
import {
    inject,
    observer
  } from 'mobx-react'

@inject ('store') @observer

class Home extends Component {
    constructor(props){
        super(props)
        this.state ={}
    }
    handleTodos(type){
        let { store } = this.props
        switch(type){
            case 'add':
                store.addTodo('add a list')
                break;
            case 'delete':
                store.deleteTodo()
                break;
            case 'reset':
                store.resetTodo()
                break;
        }
    }
    render() {
        let { store } = this.props
        return (
            <div>
                <div>
                    <h1>Use react in mobx</h1>
                </div>
                <div>
                    {store.desc}
                </div>
                <button onClick = {this.handleTodos.bind(this, 'add')}>add a list</button>
                <button onClick = {this.handleTodos.bind(this, 'delete')}>delete a list</button>
                <button onClick = {this.handleTodos.bind(this, 'reset')}>reset a list</button>
                {
                    store.todos.map((element,index,err) => {
                        return(
                        <div key = {index}>{element}</div>
                        )
                    })
                }
            
            </div>
        );
    }
}

export default Home;