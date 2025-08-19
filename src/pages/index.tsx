import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Categories from "../components/Categories";

export default function HomePage() {
  return (
    <>
      <main className="bg-gradient-to-br from-[#11072e] to-[#1f0a5e] text-white font-sans">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Categories />
      </main>
    </>
  );
}
