import { MotionConfig } from 'framer-motion'
import Nav from './components/Nav'
import Hero from './components/Hero'
import HoursStrip from './components/HoursStrip'
import MenuSection from './components/MenuSection'
import Catering from './components/Catering'
import Gallery from './components/Gallery'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main id="main">
        <Hero />
        <HoursStrip />
        <MenuSection />
        <Catering />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
