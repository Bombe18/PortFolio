================================================================================
                       PORTFOLIO - CYRIL COLIN
                     Développeur Web Junior
================================================================================

  Site portfolio personnel présentant mes projets, compétences et parcours.
  Conçu avec une esthétique moderne : fond animé de particules, dégradés
  cyan/violet, et navigation flottante.

--------------------------------------------------------------------------------
  TECHNOLOGIES
--------------------------------------------------------------------------------

  Frontend
  --------
  - React 19          Framework UI
  - React Router 7    Navigation SPA (Single Page Application)
  - Tailwind CSS 4    Styles utilitaires
  - Vite 8            Bundler & serveur de développement

--------------------------------------------------------------------------------
  STRUCTURE DU PROJET
--------------------------------------------------------------------------------

  portfolio-2/
  ├── frontend/
  │   ├── public/
  │   │   └── images/         Icônes et illustrations (HTML5, CSS3, GitHub...)
  │   └── src/
  │       ├── components/
  │       │   ├── Background.jsx      Fond animé de particules
  │       │   ├── FloatingNav.jsx     Barre de navigation flottante
  │       │   ├── ArticleCard.jsx     Carte réutilisable
  │       │   └── SectionPage.jsx     Wrapper de section
  │       ├── pages/
  │       │   ├── HeroPage.jsx        Page d'accueil (hero)
  │       │   ├── AboutPage.jsx       Section "À propos"
  │       │   ├── CompetencesPage.jsx Barres de progression des compétences
  │       │   ├── ProjectsPage.jsx    Grille des projets
  │       │   ├── ProjectDetailPage   Détail d'un projet
  │       │   ├── ContactPage.jsx     Formulaire de contact
  │       │   └── NotFoundPage.jsx    Page 404
  │       ├── data/
  │       │   ├── competence.json     Liste des compétences avec niveaux
  │       │   └── projectsData.json   Données des projets
  │       ├── app.jsx                 Composant racine
  │       ├── Layout.jsx              Layout global
  │       └── main.jsx                Point d'entrée
  └── ReadMe.txt

--------------------------------------------------------------------------------
  INSTALLATION ET LANCEMENT
--------------------------------------------------------------------------------

  Prérequis : Node.js >= 18

  1. Installer les dépendances
     > cd frontend
     > npm install

  2. Lancer en développement
     > npm run dev
     Ouvrir http://localhost:5173 dans le navigateur

  3. Build de production
     > npm run build

  4. Prévisualiser le build
     > npm run preview

--------------------------------------------------------------------------------
  PAGES ET FONCTIONNALITÉS
--------------------------------------------------------------------------------

  /                   Hero + toutes les sections (one-page scroll)
  /projects           Section projets avec ancre
  /projet/:id         Page de détail d'un projet
  *                   Page 404 personnalisée

  Fonctionnalités :
  - Fond de particules animé
  - Navigation flottante avec scroll fluide
  - Barres de compétences animées au survol (shimmer + glow)
  - Cartes projet avec hover (lien GitHub ou cas d'usage)
  - Téléchargement du CV en PDF
  - Design entièrement responsive (mobile-first)
  - Accessibilité : aria-labels, tabIndex, contraste optimisé

--------------------------------------------------------------------------------
  AUTEUR
--------------------------------------------------------------------------------

  Cyril Colin — cyrilco18@gmail.com
  Formation OpenClassrooms — Développeur Web

================================================================================
