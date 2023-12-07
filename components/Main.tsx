import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main: React.FC = () => {

    const handleMailClick = () => {
        window.open("mailto:pmedam@hawk.iit.edu");
      };
    return (
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>
                        Let&apos;s Build Something Together
                    </p>
                    <h1 className='py-4 text-gray-600'>
                        Hi, I&apos;m <span className='text-[#5651e5]'>
                            Pradeep Kumar Medam</span>
                    </h1>
                    <h2 className='py-2 text-gray-600'>
                        I&apos;m a Front End Web Developer
                    </h2>
                    <p className='py-4 text-gray-700 max-w-[70%] m-auto'>I&apos;m a front-end developer specializing in building responsive web applications.
                        Currently, I&apos;m focused on building responsive full-stack web applications.
                        I&apos;m passionate about learning and creating.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <a href="https://www.linkedin.com/in/pradeep-kumar-medam/">
                                <FaLinkedinIn />
                            </a>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <a href="https://github.com/pradeepkumarmedam">
                                <FaGithub />
                            </a>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300' onClick={handleMailClick} >
                            <AiOutlineMail />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsFillPersonLinesFill />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
