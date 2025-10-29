import About from './components/about';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import SkillsSection from './components/SkillsSection';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>  
    <section id="home"><Header /></section>
    <Hero/>
    <Stats />
    <section id="about"><About /></section>
    <section id="skill"><SkillsSection /></section>
    <section id="services"><Services /></section>
    <section id="projects"><Projects /></section>
    <section id="contact"><Contact /></section>
    <section id="footer"><Footer /></section>
    </>
  );
}

export default App;
