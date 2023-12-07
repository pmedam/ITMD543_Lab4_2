import React from 'react';
import Link from 'next/link';
import Experiences from './Experiences';

const About: React.FC = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl track-widest text-[#5651e5]'>About</p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='py-2 text-gray-600'>Seasoned RPA (Robotic Process Automation) professional with 8 years of hands-on experience in architecting, implementing, and managing automation workflows and initiatives. Expertise in leading-edge RPA platforms, orchestrating complex workflows, and driving cost-effective process improvements. Expert at aligning automation strategies with business objectives and fostering cross-functional collaboration to deliver transformative results.</p>
                    <Link href='/workexperience'>
                    <p className='py-4 uppercase text-xl track-widest text-[#5651e5] underline'>Work Experience</p>
                    </Link>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:200 ease-in duration-300'>
                    <img className='rounded-xl' src="/../assets/skills/professionalpic.jpeg" width = '350' height = '250' alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;
