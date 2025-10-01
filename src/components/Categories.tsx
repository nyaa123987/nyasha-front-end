import H3 from './Heading3';
import P2 from './Paragraph2';

export default function Categories() {
  return (
    <main data-aos="fade-up" className="flex justify-between px-[3%] md:px-[10%] py-[20vh] md:pt-20 md:pb-40">
      <div>
        <H3>React & Next.js</H3>
        <P2>Modern, high performance web applications.</P2>
      </div>
      <div className='w-[1px] bg-[white] mr-[3%]'></div>
      <div>
        <H3>Tailwind & CSS Mastery</H3>
        <P2>Clean, responsive, and visually striking designs.</P2>
      </div>
      <div className='w-[1px] bg-[white] mr-[3%]'></div>
      <div>
        <H3>Interactive UI Experiences</H3>
        <P2>Seamless, user-focused animations and interactions.</P2>
      </div>
    </main>
  );
}
