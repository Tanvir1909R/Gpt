import React from 'react'
import './app.css'
import { Brand,Cta,Navbar } from './components'
import { Blog,Features,Footer,Header,Possibility, WhatGpt } from './container'

const App = () => {
  return (
    <div className="app">
      <div className="gradient_bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGpt/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App