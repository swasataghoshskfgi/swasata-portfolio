import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-xl flex uppercase font-sans mb-4 text-amber-500 ">
          <span className='font-serif'>Find me in </span>
        </h2>
        <div className="flex gap-4">
          <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/swasata-ghosh-061a5a215/'>
            <span className="bannerIcon shadow-sm shadow-blue-600">
              <FaLinkedinIn />
            </span>
          </a>

          <a target='_blank' rel='noopener noreferrer' href='https://github.com/swasataghoshskfgi'>
            <span className="bannerIcon shadow-sm shadow-blue-600">
              <FaGithub />
            </span>
          </a>

          <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/SwasataG33621'>
            <span className="bannerIcon shadow-sm shadow-blue-600">
              <FaTwitter />
            </span>
          </a>

          <a target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/profile.php?id=100089590090154'>
            <span className="bannerIcon shadow-sm shadow-blue-600">
              <FaFacebookF />
            </span>
          </a>

          <a target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/chrixalex2/'>
            <span className="bannerIcon shadow-sm shadow-blue-600">
              <FaInstagram />  
            </span>
          </a>

          
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Media