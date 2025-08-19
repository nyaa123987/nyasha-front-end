import H2 from './Heading2';

export default function Skills() {
  const skills = ["Next.js", "Tailwind CSS", "React", "JavaScript", "CSS", "HTML", "Python", "ChatGPT", "Git"];

  return (
    <section className="max-w-7xl mx-auto px-8 py-16 md:py-40">
      <H2>Skills & Tools</H2>
      <div className="flex flex-wrap justify-center gap-10">
        {skills.map((skill) => (
          <div
            key={skill}
            className="w-50 h-20 rounded-full bg-[#1d0b55] flex items-center justify-center font-semibold text-xl shadow-lg text-white"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
