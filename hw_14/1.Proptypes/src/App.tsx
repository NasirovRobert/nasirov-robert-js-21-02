import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Sidebar} from './components/sidebar/Sidebar';
import {Comments} from './forms/comments/Comments';
import Calculator from "./forms/Calculator/Calculator";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="body">
          <div className="sidebar-container">
            <Sidebar/>
          </div>
          <div className="content">
            <Comments/>
          </div>
        </div>
        <Calculator/>
      </div>
    );
  }
}

export default App;
