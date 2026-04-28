import ServiceWorkerProvider from '../components/ServiceWorkerProvider';
import StarField from '../components/StarField'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

export default function Home() {

  return (
    <main className="noise relative min-h-screen">
        <ServiceWorkerProvider />
      <StarField />
      <Nav />

      {/* Content above stars */}
      <div className="relative z-10">
        <Hero />

        {/* Section divider */}
        <div className="divider-forest max-w-6xl mx-auto px-6" />
        <About />

        <div className="divider-forest max-w-6xl mx-auto px-6" />
        <Experience />

        <div className="divider-forest max-w-6xl mx-auto px-6" />
        <Projects />

        <div className="divider-forest max-w-6xl mx-auto px-6" />
        <Skills />

        <div className="divider-forest max-w-6xl mx-auto px-6" />
        <Contact />
      </div>
    </main>
  )
}
