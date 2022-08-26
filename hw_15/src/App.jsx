import React from 'react'
import './App.css';
import Header from "./Components/Header/Header";
import CommentList from "./forms/CommentList/CommentList";
import {ContextTheme} from './Contexts/ContextTheme';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTheme = this.toggleTheme.bind(this);
    this.state = {
      theme: 'light',
      toggleTheme:  this.toggleTheme,
    }
  }

  toggleTheme() {
    this.setState(state => ({
      theme: state.theme == 'light' ? 'dark' : 'light',
      })
    )
  }


  render() {
    return (
      <div className="App">
        <ContextTheme.Provider value={this.state}>
          <Header/>
          <CommentList/>
        </ContextTheme.Provider>
      </div>
    );
  }
}

export default App;
