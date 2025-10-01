"use client";
import Image from "next/image";
import Button from "./Button";
import H from './Heading';
import ResumeModal from "./ResumeModal";

export default function Hero() {
  return (
    <section className="relative text-white w-full h-[75vh] md:h-[90vh] pt-[2vh] px-[3%] flex text-center justify-center landscape:flex-row landscape:items-center landscape:justify-start overflow-hidden">
      
      {/* Portrait background image */}
      <div className="absolute inset-0 landscape:hidden z-0">
        <Image 
          src="/hero-bgsm.png"
          alt="Background portrait"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
      </div>

      {/* Landscape background image */}
      <div className="absolute inset-0 hidden landscape:block z-0">
        <Image 
          src="/hero-bglg.png"
          alt="Background landscape"
          fill
          style={{ objectFit: "cover", objectPosition: "bottom" }}
          priority
        />
      </div>

      <div data-aos="fade-up" className="relative z-10 text-center py-20 pb-10 md:pb-0 md:py-10 landscape:text-start landscape:w-[55%]">
        <H><span className="text-start"><span className="handwritten text-[10px] md:text-xl">Hello!</span> I am<br /></span>Nyasha Zimbudzana</H>
        <p className="text-base md:text-2xl font-medium mb-8">
          Creative Front‑End Developer & Designer building elegant interfaces and high‑performance web apps.
        </p>

        <div className="flex gap-3 justify-center md:justify-start">
          <Button>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nyashazim07@gmail.com" target='_blank' rel='noopener noreferrer'>email me</a>
          </Button>

          <button className="landscape:hidden">
            <a
              href="/Nyasha-Zimbudzana-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="capitalize cursor-pointer text-[12px] md:text-xl px-2 py-1 md:px-4 md:py-2 bg-white text-[#7B1FEA] rounded shadow-lg hover:bg-[#7B1FEA] hover:text-white transition active:opacity-[0.5]"
            >
              resume
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
