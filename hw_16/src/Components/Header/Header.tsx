import React, { useContext } from 'react';
import './Header.css';
import { ContextTheme } from '../../Contexts/ContextTheme';

function Header() {
  const theme = useContext(ContextTheme);
  return (
    <header className={theme.theme === 'light' ? 'header__div header__div_light' : 'header__div header__div_dark'}>
      <input type="checkbox" onChange={theme.toggleTheme} />
      <h2 className="header__p">Тёмная тема</h2>
    </header>
  );
}

export default Header;
