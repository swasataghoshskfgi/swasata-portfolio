import React from 'react'
import { BiLogoRedux } from 'react-icons/bi'
import { BsBootstrap } from 'react-icons/bs'
import { DiNodejs } from 'react-icons/di'
import { FaCss3, FaDocker, FaGitAlt, FaGithub, FaHtml5, FaJava, FaJs, FaPython, FaReact } from 'react-icons/fa'
import { FaC } from 'react-icons/fa6'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiCodeigniter, SiExpress, SiMongodb, SiMongoose, SiNetlify, SiPostman, SiRender, SiSublimetext, SiVercel, SiVisualstudio } from 'react-icons/si'
import { TbBrandFramerMotion, TbBrandReactNative, TbSql } from 'react-icons/tb'

const Skills = () => {
  return (
    <>
      <div id="skills" className="py-10 border-b-[1px] border-b-blue-600">
        <div className=" w-full flex flex-wrap justify-center items-center py-3">
          <h1 className="text-5xl font-serif font-semibold">
            <span className="text-amber-500">{"My Skills"}</span>
            {/* <span className="text-blue-500">{"y "} </span>
            <span className="text-white">{" Skills "} </span> */}
          </h1>
        </div>
        <div className="py-3">
          <h1 className="text-indigo-600 font-serif text-2xl pb-2"> Programming Languages</h1>
        </div>
        <div className="w-full flex flex-wrap gap-5 capitalize">
          <span className="bannerIcon shadow-sm shadow-blue-600 text-2xl">
            <FaC />
          </span>
          <span className="bannerIcon shadow-sm shadow-blue-600 text-2xl">
            <FaJava />
          </span>
          <span className="bannerIcon shadow-sm shadow-blue-600 text-2xl">
            <FaJs />
          </span>
          <span className="bannerIcon shadow-sm shadow-blue-600 text-2xl">
            <FaPython />
          </span>
        </div>



        <div className="pt-10 py-3">
          <h1 className="text-blue-500 font-serif text-2xl pb-2"> Framework and Libraries</h1>
        </div>
        <div className="w-full flex flex-wrap gap-5 capitalize">
        <span className="bannerIcon shadow-sm shadow-blue-600 text-2xl">
            <FaHtml5 />
          </span>
          <span className="bannerIcon shadow-sm shadow-blue-600 text-2xl">
            <FaCss3 />
          </span>
          <span className="bannerIcon shadow-sm shadow-blue-600 text-2xl">
            <FaReact />
          </span>
          <span className="bannerIcon shadow-sm shadow-blue-600 text-2xl">
            <BiLogoRedux />
          </span><span className="bannerIcon shadow-sm shadow-blue-600 text-2xl">
            <BsBootstrap />
          </span>
          <span className="bannerIcon shadow-sm shadow-blue-600 text-2xl">
            < RiTailwindCssFill/>
          </span>
          <span className="bannerIcon shadow-sm shadow-blue-600 text-5xl">
            <DiNodejs />
          </span>
          <span className="bannerIcon shadow-sm shadow-blue-600 text-2xl">
            <SiExpress />
          </span>
          <span className="bannerIcon shadow-sm shadow-blue-600 text-2xl">
            <TbBrandReactNative />
          </span>
          <span className="bannerIcon shadow-sm shadow-blue-600 text-2xl">
            <TbBrandFramerMotion />
          </span>
          <span className="bannerIcon shadow-sm shadow-blue-600 text-3xl">
            <SiMongoose />
          </span>
          <span className="bannerIcon shadow-sm shadow-blue-600 text-3xl">
            <SiCodeigniter />
          </span>
          
        </div>




        <div className="pt-10 py-3">
          <h1 className="text-sky-500 font-serif text-2xl pb-2"> Database</h1>
        </div>
        <div className="w-full flex flex-wrap gap-5 capitalize">
        <span className="bannerIcon shadow-sm shadow-blue-600 text-3xl">
            <TbSql />
          </span>
          <span className="bannerIcon shadow-sm shadow-blue-600 text-2xl">
            <SiMongodb />
          </span>         
        </div>


        <div className="pt-10 py-3">
          <h1 className="text-sky-300 font-serif text-2xl pb-2"> Tools</h1>
        </div>
        <div className="w-full flex flex-wrap gap-5 capitalize">
        <span className="bannerIcon shadow-sm shadow-blue-600 text-3xl">
            <FaGithub />
          </span>
          <span className="bannerIcon shadow-sm shadow-blue-600 text-2xl">
          <FaGitAlt />
          </span>         
          <span className="bannerIcon shadow-sm shadow-blue-600 text-2xl">
          <SiPostman />
          </span>         
          <span className="bannerIcon shadow-sm shadow-blue-600 text-2xl">
          <FaDocker />
          </span>         
          <span className="bannerIcon shadow-sm shadow-blue-600 text-2xl">
          <SiVisualstudio />
          </span> 
          <span className="bannerIcon shadow-sm shadow-blue-600 text-2xl">
          <SiSublimetext />
          </span>
        </div>



        <div className="pt-10 py-3">
          <h1 className="text-emerald-500 font-serif text-2xl pb-2"> Deployment</h1>
        </div>
        <div className="w-full flex flex-wrap gap-5 capitalize">
        <span className="bannerIcon shadow-sm shadow-blue-600 text-3xl">
            <SiNetlify />
        </span>
        <span className="bannerIcon shadow-sm shadow-blue-600 text-3xl">
            <SiVercel />
        </span>
        <span className="bannerIcon shadow-sm shadow-blue-600 text-3xl">
            <SiRender />
        </span>

        </div>

      </div>
    </>
  )
}

export default Skills