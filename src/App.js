import React from 'react'
import Navbar from './Components/Navbar'
import AboutMe from './Components/AboutMe'
import { ThemeProvider } from './assets/ThemeContext'
import Skill from './Components/Skill'
export default function App() {
  return (
  <>
      <ThemeProvider>
        <Navbar />
        <AboutMe />
        <Skill/>
      </ThemeProvider>
  </>
  )
}
