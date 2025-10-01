'use client';

import CertificateCard from '../components/CertificateCard';
import H1 from '../components/Heading1';
import Image from 'next/image';
import { useState } from 'react';

type Certificate = {
  title: string;
  img: string;
};

export default function Certifications() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const certificatesData: Certificate[] = [
    { title: 'Introduction to Python from Saylor.org', img: '/images/python.jpg' },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#11072e] to-[#1f0a5e] text-center text-white px-[3%] py-8 md:py-15">
      <H1 data-aos="fade-up">My Certificates</H1>

      <div data-aos="zoom-in" className="pt-[5vh] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-5 md:gap-10">
        {certificatesData.map((certificate, idx) => (
          <CertificateCard
            key={idx}
            title={certificate.title}
            img={certificate.img}
            onClick={() => setSelectedImg(certificate.img)}
          />
        ))}
      </div>

      {selectedImg && (
        <div
          className="fixed inset-0 bg-[#11072e] bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)}>
          <div className="relative">
            <Image
              src={selectedImg}
              alt="Certificate Preview"
              width={800}
              height={600}
              className="rounded-lg shadow-2xl max-w-full max-h-[80vh]"/>
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-2 right-2 text-[#7B1FEA] text-2xl font-bold">
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
