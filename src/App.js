import About from './components/about';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';

function App() {
  return (
    <>  <section id="home">
          <Header />
        </section>
     
      <Hero/>
      <Stats />
         <section id="about">
        <About />
        </section>
    </>
  );
}

export default App;
