
import React, { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_x50wvqs', 'template_1kpv4tn', form.current, {
            publicKey: 'HAZsNdYjA5v8e6XoC',
        })
            .then(
                () => {
                    toast.success('Message sent successfully!');
                    console.log('SUCCESS!');
                },
                (error) => {
                    toast.error('Failed to send message. Please try again later.');
                    console.log('FAILED...', error.text);
                },
            );
    }

    return (
        <section id="contact" className="w-full py-20 border-b-[1px] border-b-blue-600">
            <div className="flex justify-center items-center text-center">
                <Title title="CONTACT" des="Contact With Me" />
            </div>
            <div className="w-full">
                <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                    <ContactLeft />
                    <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
                        <form ref={form} onSubmit={sendEmail} className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
                            <div className="w-full flex flex-col lgl:flex-row gap-10">
                                <div className="w-full  flex flex-col gap-4">
                                    <p className="text-sm text-gray-400 uppercase tracking-wide">Your name</p>
                                    <input required name='from_name' className='contactInput' type="text" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
                                <input required name='user_email' className='contactInput' type="email" />
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="text-sm text-gray-400 uppercase tracking-wide">Message</p>
                                <textarea required name='message' className='contactTextArea' cols="30" rows="8"></textarea>
                            </div>
                            <div className="w-full">
                                <button type='submit' value="Send" className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-blue-600 border-transparent">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
}

export default Contact;
