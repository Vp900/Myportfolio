import './Projects.css';

const projects = [
  {
    title: 'Uvita Nutrition Website',
    image: require('../assets/uvita.png'),
    link: 'https://uvitanutrition.com/'
  },
  {
    title: 'Ila Homes Website',
    image: require('../assets/ilahomes.png'),
    link: 'https://ilahomes.com/'
  },
    {
    title: 'Kem Cards Website',
    image: require('../assets/kemcards.png'),
    link: 'https://kemcards.in/'
  },
    {
    title: 'RCube Website',
    image: require('../assets/rcuberecycling.png'),
    link: 'https://rcuberecycling.com/'
  },
  {
    title: 'Creative Honchos Website',
    image: require('../assets/ch.png'),
    link: 'https://creativehonchos.com/'
  },
  {
    title: 'North Bombay Durga Puja Website',
    image: require('../assets/nbdp.png'),
    link: 'https://northbombaydurgapuja.com/'
  },
  {
    title: 'Kamroons Production Website',
    image: require('../assets/kamroons.png'),
    link: 'https://kamroonsproduction.com/'
  },
    {
    title: 'The Glamorholic Website',
    image: require('../assets/theglamorholic.png'),
    link: 'https://theglamorholic.com/'
  },
  
  {
    title: 'Strivik Business Solutions Website',
    image: require('../assets/strivik.png'),
    link: 'https://strivik.com/'
  },
  {
    title: 'Basant Envelopes-N-Print Ltd Website',
    image: require('../assets/basantenvelopes.png'),
    link: 'https://basantenvelopes.com/'
  },


  {
    title: 'INDET Concrete Website',
    image: require('../assets/ind-etctpl.png'),
    link: 'https://ind-etctpl.com/'
  },
  {
    title: 'Deluxe Enterprises Website',
    image: require('../assets/deluxenterprise.png'),
    link: 'https://deluxenterprise.in/'
  },
];

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="section-heading">My Projects</h2>
      <p className="section-description">Here are some of the projects I’ve built using various web technologies.</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-box" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <a
              href={project.link}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 Visit Website
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
