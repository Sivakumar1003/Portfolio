import React, { createContext } from 'react'
import Navbar from './components/Navbar';
import data from './data/details.json';

export const themeContext = createContext();

function App() {

  return (
    <themeContext.Provider value={{ data }}>
      <Navbar />
    </themeContext.Provider>
  )
}

export default App