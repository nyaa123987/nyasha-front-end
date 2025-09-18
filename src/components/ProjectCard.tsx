import Image from 'next/image';
import P from './Paragraph';

type ProjectCardProps = {
  title: string;
  descr: string;
  github: string;
  vercel: string;
  img: string;
  onClick: () => void;
};

export default function ProjectCard({ title, descr, github, vercel, img, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="px-[2%] py-[1vh] md:py-[2vh] flex flex-col w-[100%] items-center rounded md:rounded-xl bg-[#1C0C4E] relative shadow-xl hover:shadow-[#2A0F75] transition"
    >
      <div>
        <Image
          src={img}
          alt={descr}
          width={370}
          height={70}
          className="object-cover rounded md:rounded-xl"
        />
      </div>

      <div className='flex flex-col gap-[0.001%] text-center px-[3%] mt-4'>
        <P>{title}</P>
        <h1 className='text-[10px] md:text-[14px] pb-[1vh]'>{descr}</h1>
        <div className='flex justify-center gap-3 items-center text-[12px] md:text-[16px] mt-[2vh]'>
          <a href={github} target="_blank" rel="noopener noreferrer" className='hover:underline pr-3 border-r border-white text-[12px] md:text-base'>View on Github</a>
          <a href={vercel} target="_blank" rel="noopener noreferrer" className='hover:underline pl-1 text-[12px] md:text-base'>Live Preview</a>
        </div>
      </div>
    </div>
  );
}
