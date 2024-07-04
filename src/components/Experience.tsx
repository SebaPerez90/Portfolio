import { useStore } from '@/context/store';
import { Roboto } from 'next/font/google';
import { motion } from 'framer-motion';
import experience from '@/utils/experience.json';
import Link from 'next/link';
import { FaCircleExclamation } from 'react-icons/fa6';

const roboto = Roboto({
  weight: ['900'],
  subsets: ['latin'],
});

const Experience = () => {
  const { engLanguageActive } = useStore();

  return (
    <section
      id='experience-section'
      className='flex flex-col items-center  relative'>
      <h1
        className='text-4xl max-[500px]:w-[7em] dark:text-zinc-200 text-[#334155] text-center'
        style={roboto.style}>
        {engLanguageActive ? 'Experience.' : 'Experiencia.'}
      </h1>
      <div className='flex flex-col p-[7em] bg-[#e8e8e8] rounded-lg dark:bg-theme_dark-main-bg'>
        <div className='relative work-experience-container z-10 gap-32 flex flex-col before:absolute before:h-[90%] before:top-11 before:w-[1px] before:bg-[#6161619b] max-[900px]:w-auto max-[900px]:m-[0_auto] max-[450px]:translate-x-7 max-[450px]:scale-90'>
          <div className='dark:bg-theme_dark-main-bg dark:text-theme_dark-sup-sky absolute left-[-1em] flex gap-4 justify-center pt-6 w-36 h-36 bg-[#e8e8e8] text-6xl font-black z-50 text-light-500 bottom-[28%]'>
            <span className='animate-[loading_1s_linear_infinite]'>.</span>
            <span className='animate-[loading_1s_linear_infinite] [animation-delay:200ms]'>
              .
            </span>
            <span className='animate-[loading_1s_linear_infinite] [animation-delay:400ms]'>
              .
            </span>
          </div>
          {experience.map((item, key) => (
            <motion.article
              transition={{ delay: 0.2, staggerChildren: 0.3, duration: 0.7 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              key={key}
              className='dark:before:bg-theme_dark-sup-sky relative w-full gap-6 md:gap-0 flex flex-col items-center md:items-start md:flex-row justify-between before:absolute before:w-8 before:h-8 before:rounded-full before:bg-light-800 before:left-[-1em] before:top-1'>
              <div className='px-10 flex flex-col items-center'>
                <h1 className='dark:text-slate-50 font-black [letter-spacing:2px] text-light-500 text-center w-full text-3xl'>
                  {item.company}
                </h1>

                <h2 className='dark:text-theme_dark-sup-pink text-xl font-bold text-[#333333]'>
                  {engLanguageActive ? item.position[0] : item.position[1]}
                </h2>
                <span className='dark:text-zinc-300 text-sm text-[#333333] italic font-medium'>
                  {item.date}
                </span>
              </div>
              <p className='dark:text-zinc-300 w-[20em] text-sm text-[#333333] font-semibold p-6 bg-white border-l-[12px] dark:border-theme_dark-sup-pink dark:bg-theme_dark-box-second border-light-500  dark:border-r-slate-700/50 dark:border-t-slate-700/50 dark:border-b-slate-700/50 rounded-[0_0.3em_0.3em_0]'>
                {engLanguageActive
                  ? item.tasks_description[0]
                  : item.tasks_description[1]}
              </p>
            </motion.article>
          ))}
        </div>
        <div className='flex flex-col items-center gap-3 mt-14 translate-y-8'>
          <p className='text-base text-[#333333] font-semibold dark:text-slate-50 flex items-center gap-1'>
            <FaCircleExclamation className='dark:text-theme_dark-sup-pink text-light-500 text-2xl' />
            {engLanguageActive
              ? 'If you want to know more about my work experience, you can click here.'
              : 'Si querés saber más acerca de mi experiencia laboral, podés hacer clic aquí.'}
          </p>
          <Link
            className='bg-light-500 p-3 w-max text-slate-50 rounded-md text-xs font-bold hover:bg-light-400 duration-200 hover:duration-200 active:scale-95 dark:bg-theme_dark-sup-sky'
            href={'/about'}
            aria-label='contact-link'>
            {engLanguageActive ? 'About me' : 'Sobre mi'}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Experience;