import React from 'react';
import './Header.css';
import {ContextTheme} from '../../Contexts/ContextTheme';

export default class extends React.Component {
  render() {
    return <ContextTheme.Consumer>
      {({theme, toggleTheme}) => (
        <header className={theme == 'light' ? 'header__div header__div_light' : 'header__div header__div_dark'}>
        <input type="checkbox" onChange={toggleTheme}/>
        <h2 className='header__p'>Тёмная тема</h2>
      </header>
      ) }
    </ContextTheme.Consumer>
  }
}


