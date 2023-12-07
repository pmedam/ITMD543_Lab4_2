import Head from 'next/head';
import Image from 'next/image';
import Main from '../components/Main';
import About from '../components/About';
import Skills from '../components/Skills';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Contact from '../components/Contact';
import Experiences from '../components/Experiences';

export default function WorkExperience(): JSX.Element {

    return (
        <div>
            <Head>
                <title>Pradeep Kumar Medam - Portfolio</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <Main />
            <About />
            <Skills/>
            <Contact/> */}
            <Experiences/>
        </div>
    );
}
