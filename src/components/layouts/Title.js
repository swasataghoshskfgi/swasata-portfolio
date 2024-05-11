import React from 'react'

const Title = ({title, des}) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h3 className="text-base uppercase font-light text-blue-500 tracking-wide">
       {title}
      </h3>
      <h1 className="text-5xl font-serif font-semibold">
            <span className="text-amber-400">{des} </span>
          </h1>
    </div>
  );
}

export default Title