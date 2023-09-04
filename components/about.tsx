'use client';

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { FaHeart } from 'react-icons/fa';

export default function About() {
  const { ref } = useSectionInView('About');
  return (
    <motion.section 
    ref={ref} 
    className='mb-28 flex flex-col max-w-[50rem] text-xl !leading-[1.5] text-center justify-center sm:mb-40 scroll-mt-28 '
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id="about">
        <SectionHeading>Looks like you want to know more. Great!</SectionHeading>
        <p className="mb-3 text-gray-700 dark:text-white/60"> 
        After graduating with a degree in <span className='font-medium'>Engineering</span>, I opted to pursue a career in software development, where I discovered that I could use my creative abilities to make something better, solve user problems, and improve the capabilities of a product.
        <br></br> <br></br><span className="italic">I love the
        feeling of finally figuring out a solution to a problem <FaHeart className='inline text-red-400' /> </span>
        <br></br> <br></br> This quest led me to immerse myself in design literature and also enrolled in courses dedicated to mastering diverse <span className="font-medium">design tools such as Figma, Adobe XD, Photoshop, Whimsical, and FigJam.</span>
        <br></br> <br></br>Apart from designing, I am good at coding and focus mostly on frontend. My core stack
        is{" "}
        <span className="font-medium">
          Angular, HTML, CSS, Javascript, Typescript, RxJS, TailwindCSS, Bootstrap, Angular Material
        </span>
        . I am also familiar with ReactJs, Next.js and Framer Motion. I am always looking to
        learn new technologies. <br></br> <br></br>I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a UI/UX Designer and a frontend Developer.
      </p>

      <p className='text-gray-700 dark:text-white/60'>
        <span className="italic">When I'm not coding</span>, I enjoy 
        painting, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">AR and VR</span>.
      </p>
    </motion.section>
  )
}
