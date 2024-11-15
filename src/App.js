import React from 'react'
import { ThemeProvider } from './assets/ThemeContext'
import { Navbar, AboutMe, Skill, Project } from '.';
export default function App() {
  return (
  <>
      <ThemeProvider>
        <Navbar />
        <AboutMe />
        <Skill/>
        <Project/>
      </ThemeProvider>
  </>
  )
}
