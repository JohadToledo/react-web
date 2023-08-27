import { Link } from 'react-scroll'
import reactsvg from 'C:/Develop/react-personal-web/react-web/src/assets/react.svg'
import downloadImg from 'C:/Develop/react-personal-web/react-web/src/assets/download.png'
import Social from './Social';

export function Home(){
    const downloadFileAtURL = () => {
        const pdfUrl = 'src/assets/JohadToledo-CV.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'JohadToledo-CV.pdf'; 
        link.target = '_blank'; 
        link.rel = 'resume';
        link.click();
        }

    return(
        <section id="home" className="w-screen max-w-7xl h-[calc(100vh-20px)] overflow-hidden flex flex-row-reverse items-end"> 
            <div className="h-screen w-screen p-8 leading-10 font-bold flex flex-col justify-center">
                <span className="text-3xl font-thin">Hi,</span>
                <span className="text-3xl font-thin py-2">My name is <span className="text-teal-600 relative inline-block after:content-[''] after:absolute after:bottom-0 after:rounded after:left-0 after:w-full after:h-1.5 after:bg-teal-900">Johad</span> <br /> Web Developer</span>
                <p className="text-3xl font-thin">A Web developer building reactive webapps.</p>
                <Social />
                <Link >
                    <button id="downloadCV" 
                    onClick={downloadFileAtURL} 
                    value="download" 
                    className='my-4 border-3 rounded w-40 bg-teal-500 py-2 text-white text-lg flex justify-center items-center  hover:bg-teal-600'>
                        <img className='p-0 w-8 bg-transparent'src={downloadImg} alt="download" />
                        <span className="bg-transparent text-xl pl-2">Resume</span></button>
                </Link>
            </div>
            <img src={reactsvg} className="absolute pr-12 h-96 bottom-64" alt="foto" />
        </section>
    )
}