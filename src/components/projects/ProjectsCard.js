import React from 'react'
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, src, stack, projectLiveLink , projectGitHubLink}) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg  flex flex-col bg-gradient-to-r from-slate-950 to-[#011631] group hover:bg-gradient-to-b hover:from-blue-950 hover:bg-black transition-colors duration-1000 shadow-lg shadow-blue-600 border-indigo-700 border-b-2 border-l-2">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-lg uppercase text-amber-500 font-normal">
                <div className='text-base text-violet-600'>{stack}</div>
              {title}
            </h3>
            <div className="flex gap-2">
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-amber-500 duration-300 cursor-pointer shadow-sm shadow-blue-600">
                <a target='_blank' rel='noopener noreferrer' href={projectGitHubLink}>
                <BsGithub />
                </a>
              </span>
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-amber-500 duration-300 cursor-pointer shadow-sm shadow-blue-600">
              <a target='_blank' rel='noopener noreferrer' href={projectLiveLink}>
                <FaGlobe />
                </a>
              </span>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard