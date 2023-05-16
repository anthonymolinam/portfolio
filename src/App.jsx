import React from 'react'
import './App.css'
import Home from './components/home/Home'
import Projects from './components/projects/projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {

  return (
    <main className="main">
      <Home/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App
