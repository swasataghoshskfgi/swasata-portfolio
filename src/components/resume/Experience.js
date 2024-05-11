import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-2 font-titleFont flex gap-20"
    >
      <div>
        <div className=" w-full h-[300px] flex flex-col flex-wrap gap-10">
          <ResumeCard
            title="Full Stack Developer"
            subTitle="TCM STUNNER IT CONSULTANTS LLP - ( July 2023 - January 2024 )"
            result="KOLKATA"
            des="Quickly adapt to the dynamic work environment and showcased excellent problem-solving skills, consistently finding innovative solutions to complex tasks. Throughout the internship, I demonstrated exceptional dedication, enthusiasm, and a strong commitment to learning and development."
          />
        </div>
      </div>
      
    </motion.div>
  );
};

export default Experience;
