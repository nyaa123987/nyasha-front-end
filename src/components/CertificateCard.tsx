import Image from 'next/image';

type CertificateCardProps = {
  title: string;
  img: string;
  onClick: () => void;
};

export default function CertificateCard({ title, img, onClick }: CertificateCardProps) {
  return (
    <div
      onClick={onClick}
      className="px-[2%] py-[1vh] md:py-[2vh] flex flex-col w-[100%] items-center rounded-xl bg-[#1C0C4E] relative shadow-xl hover:shadow-[#2A0F75] transition"
    >
      <div>
        <Image
          src={img}
          alt={title}
          width={370}
          height={70}
          className="object-cover rounded-xl"
        />
      </div>

      <div className='flex text-center px-[3%] mt-4'>
        <h1 className='text-[12px] md:text-[16px] pb-[1vh]'>{title}</h1>
      </div>
    </div>
  );
}
 