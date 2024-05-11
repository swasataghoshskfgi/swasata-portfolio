import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Frontend Developer .", "MERN Stack Developer .", "Mobile App Developer ."],
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 20,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">
            <span className='text-3xl font-semibold font-sans text-amber-500'>{"<h2> "}</span>
            <span className='text-2xl'> 
            <span className="text-4xl text-yellow-600">{"("}</span>
            <span className="text-3xl text-white">{"("}</span>
            {" WELCOME TO MY PROFILE "} 
            <span className="text-3xl text-white">{")"}</span>
            <span className="text-4xl text-yellow-600">{")"}</span>
            </span>
            <span className='text-3xl font-semibold font-sans text-amber-500'>{"</h2>"}</span>
        </h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm
          <br />
          <span className="text-amber-500 capitalize">
             {"`{ Swasata Ghosh }`"}
             </span>
        </h1>
        <h2 className="text-4xl font-semibold font-sans text-white">
          A <span className='text-violet-600'>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#0000FF"
          />
        </h2>
        <p className="text-lg leading-6 tracking-wide font-sans">
        <span className="text-xl">I</span> am an enthusiastic, self-motivated, reliable, responsible and hardworking person, specializing in <span className="text-blue-600">Full Stack Development</span><span className="text-blue-600 text-xl">.</span> Experienced with all stages of the development cycle for frontend web projects<span className="text-blue-600 text-xl">.</span> Well-versed in numerous programming languages including <span className="text-blue-600">C, JAVA, PYTHON</span>. I am able to work well under pressure<span className="text-blue-600 text-xl">.</span>
        </p>
      </div>
     {/* Media */} 
     <Media />
    </div>
  );
}

export default LeftBanner