import About from './component/About'
import Contact from './component/Contact'
import Experience from './component/Experience'
import Hero from './component/Hero'
import Skills from './component/Skills'


export default function Home() {
  return (
    <div id='home' className="bg-cyan-600">
    <Hero />
    <Skills />
    <Experience />
    <About />
    <Contact />
  
    </div>
  )
}
