import React from 'react';
import './App.css';
import ToDoList from './Components/ToDoList/ToDoList';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ToDoList />
      </div>
    );
  }
}
