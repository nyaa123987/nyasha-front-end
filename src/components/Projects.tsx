import ProjectCard from "./ProjectCard";
import Button from "./Button";
import H2 from './Heading2';
import P from './Paragraph';
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
      { title: 'Baker\'s Inn Website', descr: 'A website for Baker\'s Inn that is built using Next.js and TailwindCSS.', github: 'https://github.com/nyaa123987/Bakers-Inn', vercel: 'https://bakers-inn-git-main-nyashas-projects-0049bd2f.vercel.app', img: '/images/bakers-inn.png' },
      { title: 'Tigzozo Media', descr: 'Agency site for Tigzozo Media with dark mode. Built with HTML, CSS and JavaScript.', github: 'https://github.com/nyaa123987/tigzozo-media', vercel: 'https://nyaa123987.github.io/tigzozo-media/', img: '/images/tigzozo.png' },
      { title: 'Start Bootstrap', descr: 'A responsive site built with HTML and CSS, inspired by Start Bootstrap\'s Freelancer theme.', github: 'https://github.com/nyaa123987/StartBootstrap', vercel: 'https://nyaa123987.github.io/StartBootstrap/', img: '/images/start-bootstrap.png' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-[3%] md:px-8 py-16">
      <H2>My Projects</H2>

      {/*<div className="grid grid-cols-3 gap-3 md:gap-10">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className="bg-[#1C0C4E] rounded-xl shadow-xl px-[5%] py-[1vh] md:p-6 hover:shadow-[#2A0F75] transition"
          >
            <div className="h-25 md:h-40 bg-pink-300 rounded-lg mb-4 flex items-center justify-center text-2xl font-bold text-purple-900">
              Project {num}
            </div>
            <P className="opacity-90">
              Short description of project {num} goes here.
            </P>
          </div>
        ))}
      </div>*/}

      <div className="grid grid-cols-3 gap-3 md:gap-10">
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

      <div className="flex justify-center pt-8">
        <Link href="/projects"><Button>View More</Button></Link>
      </div>
    </section>
  );
}
