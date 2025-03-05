import { useState } from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import { EmblaCarousel } from './Components/EmbalaCarousel'
import FeaturedProducts from './Components/features'
import ContactForm from './Components/ContactForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <EmblaCarousel/>
      <FeaturedProducts/>
      <ContactForm/>
    </>
  )
}

export default App
