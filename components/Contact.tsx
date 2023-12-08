import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import Link from 'next/link';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import axios from 'axios';

const Contact: React.FC = () => {
    // companyName: String,
    // startDate: String,
    // endDate: String,
    // roleName: String,
    // rolesAndResponsibilities: String
    // const [name, setName] = useState('');
    // const [phoneNumber, setPhoneNumber] = useState('');
    // const [email, setEmail] = useState('');
    // const [subject, setSubject] =   useState('');
    // const [message, setMessage] = useState('');

    // const formRef = useRef<HTMLFormElement>(null)

    const handleMailClick = () => {
        window.open("mailto:pmedam@hawk.iit.edu");
    };
    const handleHRdetails = async (e: React.MouseEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const form = document.querySelector("form")
        const name = form?.childNodes[0]?.childNodes[0]?.childNodes[1]?.value
        const phoneNumber = form?.childNodes[0]?.childNodes[1]?.childNodes[1]?.value
        const email = form?.childNodes[1]?.childNodes[1]?.value
        const subject = form?.childNodes[2]?.childNodes[1]?.value
        const message = form?.childNodes[3]?.childNodes[1]?.value
        console.log(name, phoneNumber, email, subject, message)

        await axios.post('http://localhost:3001', {
            name,
            phoneNumber,
            email,
            subject,
            message
        })
    }
    return (
        <div id='contact' className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
                <h2>Get In Touch</h2>
                <div className='grid lg:grid-cols-5 gap-8'>
                    {/* left */}
                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full'>
                            <div>
                                <img className='rounded-xl hover:scale-105 ease-in duration-300' src="/../assets/contact.jpg" alt='/' />
                            </div>
                            <div className=''>
                                <h2 className='py-2'>Name Here</h2>
                                <p>Front-End Developer</p>
                                <p>I am available for fulltime positions. Contact me and let&apos;s talk.</p>
                            </div>
                            <div>
                                <p className='uppercase pt-8'>Connect With Me</p>
                                <div className='flex items-center justify-between py-4'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <a href="https://www.linkedin.com/in/pradeep-kumar-medam/">
                                            <FaLinkedinIn />
                                        </a>
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <a href="https://github.com/pmedam">
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

                    {/* right */}

                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                        <div className='p-4'>
                            <form>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text"/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Phone Number</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text"/>
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Subject</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea className='border-2 rounded-lg p-3 border-gray-300' rows={10}></textarea>
                                </div>
                                <button className='w-full rounded-lg p-4 text-gray-100 mt-4' onClick={handleHRdetails}>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center py-12'>
                    <Link href='/'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <HiOutlineChevronDoubleUp className='text-[#5651e5]' />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact