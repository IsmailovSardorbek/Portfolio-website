import { MatrixRain } from './components/MatrixRain'
import { Cursor } from './components/Cursor'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function Divider() {
  return <div className="section-divider" />
}

export default function App() {
  return (
    <>
      <MatrixRain />
      <Cursor />
      <Navbar />
      <Hero />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <About />
      <Divider />
      <Experience />
      <Divider />
      <Contact />
      <Footer />
    </>
  )
}
