import H1 from '../components/Heading1';
import P from '../components/Paragraph';

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-[#11072e] to-[#1f0a5e] text-white px-8 py-20">
        <section className="max-w-4xl mx-auto text-center space-y-6">
          <H1>About Me</H1>
          <p className="text-lg leading-relaxed pt-[2vh]">
            I am a passionate front‑end web developer currently studying at{" "}
            <a href="https://uncommon.org" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
              Uncommon.org
            </a>
            , where I continuously sharpen my skills and push my creative limits. I thrive on learning by doing, taking on challenging{" "}
            <a href="/projects" className="underline underline-offset-4">
              projects
            </a>{" "}
            that push me to think critically, design intuitively, and deliver clean, efficient code. Alongside my core studies, I actively pursue online courses, earning multiple{" "}
            <a href="/certifications" className="underline underline-offset-4">
              certificates
            </a>{" "}
            that demonstrate my commitment to professional growth and mastery of modern web technologies. My expertise spans responsive UI design, mobile‑friendly development, and crafting practical, problem‑solving programs that bring ideas to life. I believe learning never stops, and I am eager to keep exploring new technologies, collaborating with like‑minded innovators, and making a lasting impact through code. If you’d like to work together or discuss how I can contribute to your team, feel free to{" "}
            <a href="/contact" className="underline underline-offset-4">
              contact me
            </a>
            .
          </p>
        </section>
      </main>
    </>
  );
}
