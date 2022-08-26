import React from 'react';
import './App.css';
import ToDoList from './Components/ToDoList/ToDoList';
import WithHover from './Components/WithHover/WithHover';
import { Comments } from './Components/comments/Comments';
import { Header } from './Components/header/Header';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { Sidebar } from './Components/sidebar/Sidebar';

export default class App extends React.Component {
  render() {
    return (
      <ThemeContextProvider>
        <div className="App">
          <Header />
          <Sidebar />
          <WithHover comment="Это ТуДулист"><ToDoList /></WithHover>
          <Comments />
        </div>
      </ThemeContextProvider>
    );
  }
}
