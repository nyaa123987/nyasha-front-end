import ProjectCard from "./ProjectCardHero";
import Button from "./Button";
import H2 from './Heading2';
import Link from 'next/link';

type Project = {
  title: string;
  descr: string;
  github: string;
  vercel: string;
  img: string;
};

export default function Projects() {
  const projectsData: Project[] = [
    { title: 'Ever After', descr: 'A wedding planner app that guides couples through the entire process of planning a wedding.', github: 'https://github.com/nyaa123987/wedding-planner', vercel: 'https://wedding-planner-omega-flame.vercel.app/', img: '/images/ever-after.png' },
    { title: 'Baker\'s Inn Website', descr: 'A multi-page website for Baker\'s Inn that is built using Next.js and TailwindCSS.', github: 'https://github.com/nyaa123987/Bakers-Inn', vercel: 'https://bakers-inn-git-main-nyashas-projects-0049bd2f.vercel.app', img: '/images/bakers-inn.png' },
    { title: 'Tigzozo Media', descr: 'Agency site for Tigzozo Media. Built with HTML, CSS and JavaScript.', github: 'https://github.com/nyaa123987/tigzozo-media', vercel: 'https://nyaa123987.github.io/tigzozo-media/', img: '/images/tigzozo.png' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-[3%] md:px-8 py-16">
      <H2 data-aos="fade-up">My Projects</H2>

      <div data-aos="zoom-in" className="grid grid-cols-3 gap-3 md:gap-10">
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

      <div data-aos="fade-up" className="flex justify-center pt-8">
        <Link href="/projects"><Button>View More</Button></Link>
      </div>
    </section>
  );
}
