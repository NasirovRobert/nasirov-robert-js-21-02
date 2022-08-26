import React from 'react'

const themes = {
  dark: 'dark',
  light: 'light',
};

export const ContextTheme = React.createContext({theme: themes.light, toogleTheme: () => {}});