import React, { useMemo, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import CommentList from './forms/CommentList/CommentList';
import { ContextTheme } from './Contexts/ContextTheme';

function App() {
  const [theme, toggleTheme] = useState('light');

  const memoValue = useMemo(
    () => ({
      theme,
      toggleTheme: () => {
        if (theme === 'light') {
          toggleTheme('dark');
        } else if (theme === 'dark') {
          toggleTheme('light');
        }
      },
    }),
    [theme],
  );

  return (
    <div className="App">
      <ContextTheme.Provider value={memoValue}>
        <Header />
        <CommentList />
      </ContextTheme.Provider>
    </div>
  );
}

export default App;
