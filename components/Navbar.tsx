import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar: React.FC = () => {
    const [nav, setNav] = useState<boolean>(false);
    const [shadow, setshadow] = useState(false)

    const handleNav = (): void => {
        setNav(!nav);
    };

    const handleMailClick = () => {
        window.open("mailto:pmedam@hawk.iit.edu");
      };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setshadow(true)
            }
            else {
                setshadow(false)
            }
        };
        window.addEventListener('scroll', handleShadow)
    }, [])

    return (
        <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
            <div className='flex justify-between rounded-full items-center w-full h-full px-2 2xl:px-16'>
                <Link href='/'>
                    <Image src="/assets/PKMLogo.png" width='80' height='40' alt="/" />
                </Link>
                <div>
                    <ul className='hidden md:flex'>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                        </Link>
                        <Link href='/#about'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                        </Link>
                        <Link href='/#skills'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                        </Link>
                        <Link href='/#contact'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[40%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 w-[75%] p-10 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Link href='/'>
                                <Image src='/../assets/PKMLogo.png' width='80' height='40' alt='/' />
                            </Link>
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className='d-[85%] md:w[90%] py-4'>Let&apos;s build something legendary together</p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/#about'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>About</li>
                            </Link>
                            <Link href='/#skills'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Skills</li>
                            </Link>
                            <Link href='/#contact'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-[#5651e5]'>Let&apos;s Connect</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <a href="https://www.linkedin.com/in/pradeep-kumar-medam/">
                                        <FaLinkedinIn />
                                    </a>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <a href="https://github.com/pmedam">
                                        <FaGithub />
                                    </a>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300' onClick={handleMailClick} >
                                    <AiOutlineMail />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <BsFillPersonLinesFill />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
