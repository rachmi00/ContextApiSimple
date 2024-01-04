import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <h1>Theme Toggle</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default App;
