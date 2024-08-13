import './App.css'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Map from './Components/Map/Map'
import Nav from './Components/Nav/Nav'
import Places from './Components/Places/Places'
import Register from './Components/Register/Register'
import { useState } from 'react'

function App() {


  const [open , setOpen] = useState(false);
  

  return (
    <>
      <Nav  setOpen={setOpen}/>
      <Hero />
      <Places />
      <About />
      <Map />
      <Footer />
      
      {open && <Register setOpen={setOpen}/>}
        
    </>
  )
}

export default App
