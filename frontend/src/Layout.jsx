import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ParticlesBackground from './components/Background.jsx'
import FloatingNav from './components/FloatingNav.jsx'
import { mainStyles } from './styles/main.styles.js'
import HeroPage from './pages/HeroPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import CompetencesPage from './pages/CompetencesPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import ContactPage from './pages/ContactPage.jsx'

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    // Determine target id from pathname
    const path = location.pathname === '/' ? '/' : location.pathname
    const id = path === '/' ? 'home' : path.replace(/^\//, '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location.pathname])

  return (
    <div className="relative ">
      <ParticlesBackground />
      <FloatingNav />

      <main className={mainStyles.mainContainer + ' relative z-10'}>
        <section id="home" >
          <HeroPage />
        </section>

        <section id="about" >
          <AboutPage />
        </section>

        <section id="competences" >
          <CompetencesPage />
        </section>

        <section id="projects" >
          <ProjectsPage />
        </section>

        <section id="contact" >
          <ContactPage />
        </section>
      </main>
    </div>
  )
}
