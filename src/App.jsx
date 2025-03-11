import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/hero/Hero'
import Services from './Components/Services/Programs'
import About from './Components/About/About'
import Core from './Components/Core/Core'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services/> 
      <About/>
      <Core/>
      <Footer/>
       
    </div>
  )
}

export default App