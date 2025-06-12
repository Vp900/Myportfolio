import './Projects.css';

const projects = [
  {
    title: 'E-commerce Website',
    image: require('../assets/uvita.png'),
   description: 'A product-focused Shopify e-commerce website developed using custom Liquid code, along with free and paid Shopify apps. Designed with personalized theme modifications to offer a seamless shopping experience and boost product sales effectively.',
    link: 'https://uvitanutrition.com/',
    tech: 'Developed on Shopify'
  },
  {
    title: 'Informational Website',
    image: require('../assets/ch.png'),
   description: 'A digital marketing agency website specializing in social media management, content creation, and online brand promotion. Built with HTML, CSS, JavaScript, jQuery, PHP, and Bootstrap, the site offers a responsive layout, showcases services, and drives client engagement through interactive features.',
   link: 'https://creativehonchos.com/',
    tech: 'Developed on Coding with HTML, CSS, JS, jQuery, PHP, Bootstrap'
  },
  {
    title: 'Informational Website',
    image: require('../assets/nbdp.png'),
   description: 'A culturally rich website dedicated to Durga Puja, created for a celebrity to share information, rituals, events, and celebrations related to the festival. The site includes photo galleries, blogs, and updates to connect with devotees and fans during the festive season.',
   link: 'https://northbombaydurgapuja.com/',
    tech: 'Developed on Coding with HTML, CSS, JS, jQuery, PHP, Bootstrap'
  },
  {
    title: 'Informational Website',
    image: require('../assets/kamroons.png'),
   description: 'A film production website created to showcase our work in movies, music, and song production. It highlights our latest projects and offers opportunities for partnerships and collaborations with artists, producers, and creative professionals in the entertainment industry.',
   link: 'https://kamroonsproduction.com/',
    tech: 'Developed on Coding with HTML, CSS, JS, jQuery, PHP, Bootstrap'
  },
  {
    title: 'News & Blogs Website',
    image: require('../assets/theglamorholic.png'),
   description: 'A dynamic news and blog website that publishes fresh content daily across multiple categories, including films, entertainment, lifestyle, technology, and more. Designed to keep readers updated with the latest happenings from every field.',
   link: 'https://theglamorholic.com/',
    tech: 'Developed on WordPress'
  },
  {
    title: 'Informational Website',
    image: require('../assets/ilahomes.png'),
   description: 'A villa booking website designed for tourists looking to rent luxurious rooms for short or long stays. Users can browse available villas, check amenities, and book rooms in real-time for a comfortable and relaxing getaway experience.',
 link: 'https://ilahomes.com/',
    tech: 'Developed on Coding with HTML, CSS, JS, jQuery, PHP, Bootstrap'
  }
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
