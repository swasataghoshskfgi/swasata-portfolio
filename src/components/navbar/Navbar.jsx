import React, { useState } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { logo } from "../../assets/index"
import { navLinksdata } from '../../constants';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-amber-400 shadow-xl shadow-blue-600 rounded-full pr-10">
      <div>
        <span className='flex flex-wrap justify-center items-center'>
          {/* <img src={logo} alt="logo" className='w-20 border border-amber-500 rounded-full shadow-md shadow-amber-500' /> */}
          <span className='m-14 font-serif text-6xl text-amber-500 '> {`{SG}`} </span>
        </span>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10 mr-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-lg text-gray-400 tracking-widest cursor-pointer hover:text-amber-500 duration-300  font-mono "
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-text-amber-500  cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div className='flex flex-wrap justify-center items-center'>
                <img className="w-32 border border-amber-500 rounded-full shadow-xl" src={logo} alt="logo" />
                <p className="text-sm text-gray-400 mt-2">

                </p>
              </div>
              <ul className="flex flex-col gap-4 text-center">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-amber-500 duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4 text-center justify-center items-center">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex flex-wrap gap-4 ">
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

        
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-text-amber-500 duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar