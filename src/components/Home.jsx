import { Link } from 'react-scroll'
import reactsvg from '../../public/assets/react.svg'
import downloadImg from '../../public/assets/download.png'
import Social from './Social';

export function Home(){
    const downloadFileAtURL = () => {
        const pdfUrl = 'public/assets/JohadToledo-CV.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'JohadToledo-CV.pdf'; 
        link.target = '_blank'; 
        link.rel = 'resume';
        link.click();
        }

    return(
        <section id="home" className="w-screen md:max-w-7xl h-screen sm:h-[calc(100vh-20px)] overflow-hidden flex flex-row-reverse"> 
            <div className="md:px-5 h-2/3 sm:h-screen w-screen flex flex-col md:flex-row justify-center items-center ">
                <div className="lg:pl-12 h-full sm:pl-0 md:pl-0 text-xl md:text-3xl w-2/3 leading-7 font-thin flex flex-col justify-center items-center md:items-start">
                <span className="">Hi,</span>
                <span className="py-2">I&#39;m <span className="font-bold text-teal-600 relative inline-block after:content-[''] after:absolute after:bottom-0 after:rounded after:left-0 after:w-full after:h-1.5 after:bg-teal-900">Johad</span></span>
                <p className="text-center sm:text-left">A Web developer building reactive web apps.</p>
                <Social />
                <Link >
                    <button id="downloadCV" 
                    onClick={downloadFileAtURL} 
                    value="download" 
                    className='my-3 border-3 font-bold rounded w-40 bg-teal-500 py-0 sm:py-2 text-white text-lg flex justify-center items-center  hover:bg-teal-600'>
                        <img className='p-0 w-8 bg-transparent'src={downloadImg} alt="download" />
                        <span className="bg-transparent text-base pl-2">Resume</span></button>
                </Link>
            </div>
            <div className="md:h-96 w-1/2 flex justify-center">
            <img src={reactsvg} className="h-36 absolute md:pr-12 md:h-96" alt="foto" />
            </div>
            </div>
        </section>
    )
}