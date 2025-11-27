import './Projects.css';

const projects = [
  {
    title: 'Uvita Nutrition Website',
    image: require('../assets/uvita.png'),
    link: 'https://uvitanutrition.com/',
    description: 'A modern and responsive nutrition brand website built with clean UI, optimized performance, and user-friendly navigation.'
  },
{
  title: 'Ila Homes Website',
  image: require('../assets/ilahomes.png'),
  link: 'https://ilahomes.com/',
  description: 'A premium villa and room booking platform designed with an elegant layout, showcasing luxury stays with a seamless, mobile-friendly user experience.'
},

{
  title: 'Kem Cards Website',
  image: require('../assets/kemcards.png'),
  link: 'https://kemcards.in/',
  description: 'A printing and packaging website for premium playing cards with clean product showcasing and smooth order experience.'
},

{
  title: 'The Glamorholic Website',
  image: require('../assets/theglamorholic.png'),
  link: 'https://theglamorholic.com/',
  description: 'Daily news and blog website featuring the latest articles, trending stories, and engaging content with optimized loading and responsive design.'
},

  {
    title: 'INDET Concrete Website',
    image: require('../assets/ind-etctpl.png'),
    link: 'https://ind-etctpl.com/',
    description: 'Corporate industrial website built with a professional layout, service showcase, and fast-loading pages.'
  },
  {
    title: 'Deluxe Enterprises Website',
    image: require('../assets/deluxenterprise.png'),
    link: 'https://deluxenterprise.in/',
    description: 'Business website featuring product highlights, clean UI, and improved client engagement sections.'
  },
  {
    title: 'RCube Recycling Website',
    image: require('../assets/rcuberecycling.png'),
    link: 'https://rcuberecycling.com/',
    description: 'Recycling and waste-management website with structured layouts, info-based sections, and responsive design.'
  },
  {
    title: 'Creative Honchos Website',
    image: require('../assets/ch.png'),
    link: 'https://creativehonchos.com/',
    description: 'Portfolio + agency website built with modern animations, fast loading, and SEO-friendly structure.'
  },
  {
    title: 'North Bombay Durga Puja Website',
    image: require('../assets/nbdp.png'),
    link: 'https://northbombaydurgapuja.com/',
    description: 'Event-based website featuring galleries, schedules, and an easy-to-navigate interface for visitors.'
  },
  {

  title: 'Kamroons Production Website',
  image: require('../assets/kamroons.png'),
  link: 'https://kamroonsproduction.com/',
  description: 'Film production website highlighting projects, behind-the-scenes content, and engaging visuals with responsive video sections.'
},

{
  title: 'Strivik Business Solutions Website',
  image: require('../assets/strivik.png'),
  link: 'https://strivik.com/',
  description: 'Corporate business consulting website with a clean professional interface, structured service modules, and an enhanced mobile-first user journey.'
},

{
  title: 'Basant Envelopes-N-Print Ltd Website',
  image: require('../assets/basantenvelopes.png'),
  link: 'https://basantenvelopes.com/',
  description: 'Corporate printing and packaging website featuring envelope manufacturing, product catalog display, and professional business layout.'
},

];

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="section-heading">My Projects</h2>
      <p className="section-description">
        Here are some of the professional websites and applications I have developed using modern web technologies, focusing on clean UI, performance, and responsive design.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-box" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <h3 className="project-title">{project.title}</h3>

            <p className="project-description">{project.description}</p>

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
