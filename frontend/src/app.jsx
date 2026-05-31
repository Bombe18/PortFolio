import FloatingNav from './components/FloatingNav.jsx'
import HeroPage from './pages/HeroPage.jsx';
import { mainStyles } from './styles/main.styles.js';
import ParticlesBackground from './components/Background.jsx';
import Aboutpage from './pages/AboutPage.jsx';
import Competencespage from './pages/CompetencesPage.jsx';
import Projectspage from './pages/ProjectsPage.jsx';
import Contactpage from './pages/ContactPage.jsx';

function App() {
  return (
    <div>
      <ParticlesBackground />
      <FloatingNav />
      <div className={mainStyles.mainContainer}>
        <HeroPage />
        <Aboutpage />
        <Competencespage />
        <Projectspage />
        <Contactpage />
      </div>
    </div >
  )
}

export default App