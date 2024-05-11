import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree ,projectFour } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
    return (
        <section
            id="projects"
            className="w-full py-20 border-b-[1px] border-b-blue-600"
        >
            <div className="flex justify-center items-center text-center">
                <Title
                    title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
                    des="My Projects"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
                
            <ProjectsCard
                    title="Personal Portfolio Website "
                    des=" To showcase my Projects, Skills, and Work Experience ! "
                    stack='( Frontend )'
                    src={projectFour}
                    projectLiveLink = 'https://dev-swasata.netlify.app/'
                    projectGitHubLink='https://github.com/swasataghoshskfgi/personal-portfolio'
                />
                <ProjectsCard
                title="Real Estate "
                des=" Users can Buy, Sell houses and also can give Rent to the customers !"
                stack='( MERN Stack )'
                src={projectOne}
                projectLiveLink = 'https://alex-estate-final.onrender.com/'
                // projectGitHubLink='https://alex-estate-final.onrender.com/'
            />
                <ProjectsCard
                    title="Password Generator"
                    des=" Users can generate very strong passwords with numbers and characters according to their required length !"
                    stack='( Frontend )'
                    src={projectTwo}
                    projectLiveLink = 'https://swasata03-passwordgenerator.vercel.app/'
                    projectGitHubLink='https://github.com/swasataghoshskfgi/05passwordgenerator'
                />
                <ProjectsCard
                    title="Weather WebApp"
                    des=" Users can see the temperatures, Humidity, Wind Info in the website !"
                    stack='( Frontend )'
                    src={projectThree}
                    projectLiveLink = 'https://swasata03weather.netlify.app/'
                    projectGitHubLink='https://github.com/swasataghoshskfgi/weather-app'
                />
                {/* <ProjectsCard
                    title="Weather WebApp"
                    des=" Users can see the temperatures, Humidity, Wind Info in the website !"
                    stack='( Frontend )'
                    src={projectOne}
                />
                <ProjectsCard
                    title="Weather WebApp"
                    des=" Users can see the temperatures, Humidity, Wind Info in the website !"
                    stack='( Frontend )'
                    src={projectOne}
                />
                <ProjectsCard
                    title="Weather WebApp"
                    des=" Users can see the temperatures, Humidity, Wind Info in the website !"
                    stack='( Frontend )'
                    src={projectOne}
                /> */}

            </div>
        </section>
    );
}

export default Projects