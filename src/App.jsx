import Navbar from './Components/Navbar'
import './App.css'
import { EmblaCarousel } from './Components/EmbalaCarousel'
import FeaturedProducts from './Components/features'
import ContactForm from './Components/ContactForm'
import Footer from './Components/footer'

function App() {
  return (
    <>
      <Navbar/>
      <EmblaCarousel/>
      <FeaturedProducts/>
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default App
