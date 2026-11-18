import SmoothScroll from './components/SmoothScroll'
import Datum from './components/Datum'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'

export default function App() {
  return (
    <SmoothScroll>
      <Datum />
      <main>
        <Hero />
        <Manifesto />
        <Projects />
        <Services />
        <Contact />
      </main>
    </SmoothScroll>
  )
}
