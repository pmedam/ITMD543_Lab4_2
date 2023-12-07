import React from 'react'
import Image from 'next/image'

const Skills: React.FC = () => {
    return (
        <div id = 'skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center hj-full'>
                <p className='text-xl tracking-widest text-[#5651e5]'>Skills</p>
                <h2 className='py-4'>What I can do</h2>
                <div className='grid md:grid-cols-2 lg:grod-cols-3 gap-8'>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src='/../assets/html5.png'
                                    width='64'
                                    height='64'
                                    alt="/" />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src='/../assets/css.png'
                                    width='64'
                                    height='64'
                                    alt="/" />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src='/../assets/Blue_Prism_logo.png'
                                    width='64'
                                    height='64'
                                    alt="/" />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Blue Prism</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;