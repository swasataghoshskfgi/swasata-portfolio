import React, {  useState } from 'react'
import Title from '../layouts/Title';
import Experience from "./Experience"

const Resume = () => {
  return (
    <section id="experience" className="w-full py-20 border-b-[1px] border-b-blue-600">
      <div className="flex justify-center items-center text-center">
        <Title title="6+ Months of Experience" des="My Work Experience" />
      </div>
      <div>
        <Experience/>
      </div>
 
    </section>
  );
}

export default Resume