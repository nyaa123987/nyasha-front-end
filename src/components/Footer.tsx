import { FaLinkedin, FaGithub, FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export default function Footer() {
  return (
    <footer className="bg-[#11072e] text-white py-8 text-center">
      <p className='text-[16px] md:text-[20px] pb-[2vh]'>Got a project in mind? Let&apos;s connect.</p>
      
        <div className="px-[3%] my-4 flex justify-center space-x-13 md:space-x-40">

          <div className='flex flex-col space-y-2 md:space-y-4 text-white text-[16px] md:text-[18px]'>
            <a href="https://github.com/nyaa123987" target="_blank" rel="noopener noreferrer" className='flex items-center space-x-3'>
              <FaGithub />
              <span className=' hover:underline'>GitHub</span>
            </a>

            <a href="https://www.linkedin.com/in/nyasha-zimbudzana-10861834b/" target='_blank' rel='noopener noreferrer' className="flex items-center space-x-3">
              <FaLinkedin />
              <span className=' hover:underline'>LinkedIn</span>
            </a>

            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nyashazim07@gmail.com" target='_blank' rel='noopener noreferrer' className="flex items-center space-x-3">
              <HiOutlineMail />
              <span className=' hover:underline'>Email</span>
            </a>
          </div>

          <div className='flex flex-col space-y-2 md:space-y-4 text-white text-[16px] md:text-[18px]'>
            <a href="#" target='_blank' rel='noopener noreferrer' className="flex items-center space-x-1 md:space-x-3">
              <FaPhoneAlt />
              <span className=' hover:underline'>+263 78 310 6031</span>
            </a>

            <a href="#" target='_blank' rel='noopener noreferrer' className="flex items-center space-x-1 md:space-x-3">
              <FaPhoneAlt />
              <span className=' hover:underline'>+263 78 246 7216</span>
            </a>
          </div>
        </div>
        
      <p className='pt-[2vh] text-[12px] md:text-[16px]'>&copy; 2025 Nyasha Zimbudzana. All rights reserved.</p>
    </footer>
  );
}
