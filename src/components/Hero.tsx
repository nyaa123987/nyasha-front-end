"use client";
import Image from "next/image";
import Button from "./Button";
import H from './Heading';

export default function Hero() {
  return (
    <section className="relative text-white w-full h-[85vh] md:h-[90vh] pt-[2vh] px-[3%] flex flex-col-reverse text-center justify-center landscape:flex-row landscape:items-center overflow-hidden">
      
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

      <div className="relative z-10 text-center py-20 md:py-10 landscape:text-start landscape:w-[55%]">
        <H><span className="text-start"><span className="handwritten text-[10px] md:text-xl">Hello!</span> I am<br /></span>Nyasha Zimbudzana</H>
        <p className="text-base md:text-2xl font-medium mb-8">
          Creative Front‑End Developer & Designer building elegant interfaces and high‑performance web apps.
        </p>
        <Button>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nyashazee07@gmail.com" target='_blank' rel='noopener noreferrer'>email me</a>
        </Button>
      </div>

      <div className="w-75 h-75 mx-auto mb-6 rounded overflow-hidden border-4 border-white shadow-lg">
        <Image src="/images/nyasha.jpeg" alt="Nyasha Zimbudzana" width={50} height={50} className="w-full h-full object-cover" />
      </div>
    </section>
  );
}
