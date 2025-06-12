import About from './components/about';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import SkillsSection from './components/SkillsSection';
import Services from './components/Services';

function App() {
  return (
    <>  
    <section id="home"><Header /></section>
    <Hero/>
    <Stats />
    <section id="about"><About /></section>
    <section id="skill"><SkillsSection /></section>
    <section id="services"><Services /></section>
    </>
  );
}

export default App;
