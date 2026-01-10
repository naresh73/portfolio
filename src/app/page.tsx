import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ITBerries from '@/components/ITBerries'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ITBerries />
      <About />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />
    </main>
  )
}

