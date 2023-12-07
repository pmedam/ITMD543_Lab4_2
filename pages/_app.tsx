import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />;
        </>
    );
}

export default MyApp;
