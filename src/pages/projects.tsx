import ProjectCard from '../components/ProjectCard';
import H1 from '../components/Heading1';

type Project = {
  title: string;
  descr: string;
  github: string;
  vercel: string;
  img: string;
};

export default function ProjectsPage() {
  const projectsData: Project[] = [
    { title: 'Ever After - Wedding Planner App', descr: 'Coming soon...', github: 'https://github.com/nyaa123987/wedding-planner', vercel: 'https://wedding-planner-omega-flame.vercel.app/', img: '/images/ever-after.png' },
    { title: 'Baker\'s Inn Website', descr: 'A website for Baker\'s Inn that is built using Next.js and TailwindCSS.', github: 'https://github.com/nyaa123987/Bakers-Inn', vercel: 'https://bakers-inn-git-main-nyashas-projects-0049bd2f.vercel.app', img: '/images/bakers-inn.png' },
    { title: 'Tigzozo Media', descr: 'Agency site for Tigzozo Media with dark mode. Built with HTML, CSS and JavaScript.', github: 'https://github.com/nyaa123987/tigzozo-media', vercel: 'https://nyaa123987.github.io/tigzozo-media/', img: '/images/tigzozo.png' },
    { title: 'Stopwatch', descr:'Clean, responsive, and fully functional stopwatch app, built using React.js.', github: 'https://github.com/nyaa123987/stopwatch', vercel:'https://stopwatch-7i9rloekh-nyashas-projects-0049bd2f.vercel.app/', img: '/images/stopwatch.png' },
    { title: 'Start Bootstrap', descr: 'A responsive site built with HTML and CSS, inspired by Start Bootstrap\'s Freelancer theme.', github: 'https://github.com/nyaa123987/StartBootstrap', vercel: 'https://nyaa123987.github.io/StartBootstrap/', img: '/images/start-bootstrap.png' },
    { title: 'Stylish Portfolio', descr: 'A sleek, multi-section personal website built with HTML, CSS & Bootstrap 5.', github: 'https://github.com/nyaa123987/Bootstrap', vercel: 'https://nyaa123987.github.io/Bootstrap/', img: '/images/stylish-portfolio.png' },
    { title: 'My Portfolio Website', descr: 'My first portfolio website that I built using HTML, CSS and JavaScript.', github: 'https://github.com/nyaa123987/portfolio-site', vercel: 'https://nyaa123987.github.io/portfolio-site/', img: '/images/portfolio-site.png' },
    { title: 'Weather App', descr: 'A weather app that accepts user input and fetches real-time weather for any city. Built using React.', github: 'https://github.com/nyaa123987/Weather-App-React', vercel: 'https://weather-app-react-lj5t2vbpq-nyashas-projects-0049bd2f.vercel.app/', img: '/images/weather-app.png' },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#11072e] to-[#1f0a5e] text-center text-white px-[3%] py-8 md:py-15">
      <H1 data-aos="fade-up">My Projects</H1>

      <div data-aos="zoom-in" className="pt-[5vh] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-5 md:gap-10">
        {projectsData.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            descr={project.descr}
            github={project.github}
            vercel={project.vercel}
            img={project.img}
            onClick={() => {}}
          />
        ))}
      </div>
    </section>
  );
}
