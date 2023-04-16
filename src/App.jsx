import {react, useContext, useState } from 'react'
import './App.css'
import Calculator from './components/Calculator'
import { ThemesContext } from './components/ThemeContext'

function App() {

  const {theme, setTheme} = useContext(ThemesContext);


  return (
    <div className={`App ${theme == 0 ? "theme-1" : theme == 1 ? "theme-2" : "theme-3" }  h-screen w-screen bg-skin-fill flex justify-center items-center`}>
      <Calculator/>
    </div>
  )
}

export default App
