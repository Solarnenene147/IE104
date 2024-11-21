// src/pages/index.js
import Home from './Home';
import About from './Organization/About';
import FeaturedProjects from './Organization/FeaturedProjects';
import Achievements from './Organization/Achievements';
import Stats from './Stats/Stats';
import Donate from './Donate/Donate';
import OnlineDonate from './Donate/OnlineDonate';
import OfflineDonate from './Donate/OfflineDonate';
import FAQ from './Contact/FAQ';
import Support from './Contact/Support';
import Login from './Authorization/Login';
import Register from './Authorization/Register'
import Term from './Term/Term'

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/featured-projects", element: <FeaturedProjects /> },
  { path: "/achievements", element: <Achievements /> },
  { path: "/stats", element: <Stats /> },
  { path: "/donate", element: <Donate /> },
  { path: "/donate/online", element: <OnlineDonate /> },
  { path: "/donate/offline", element: <OfflineDonate /> },
  { path: "/faq", element: <FAQ /> },
  { path: "/support", element: <Support /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/term", element: <Term /> },
];
