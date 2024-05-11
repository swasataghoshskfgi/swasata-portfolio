import React from 'react'
import { FaTwitter, FaLinkedinIn, FaGithub, FaFacebookF, FaInstagram } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
    return (
        <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
            <img
                className="w-full h-64 object-cover rounded-lg mb-2"
                src={contactImg}
                alt="contactImg"
            />
            <div className="flex flex-col gap-4">
                <h3 className="text-4xl font-bold text-amber-600"> Swasata Ghosh</h3>
                <p className="text-lg font-normal text-blue-600">
                    MERN Stack Developer
                </p>
                <p className="text-base text-green-600 tracking-wide">
                    Feel Free To Contact Me & Share Your Openion
                </p>
                <p className="text-base text-gray-400 flex items-center gap-2">
                    Phone: <a href="tel:6291095866" className="text-lightText">+91 6291095866</a>
                </p>

                <p className="text-base text-gray-400 flex items-center gap-2">
                    Email: <a href="mailto:swasataghoshc1209@gmail.com" className="text-lightText">swasataghoshc1209@gmail.com</a>
                </p>

            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
                <div className="flex gap-4 flex-wrap items-center justify-center">
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
        </div>
    );
}

export default ContactLeft