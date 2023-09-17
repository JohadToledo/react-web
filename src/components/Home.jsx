import { Link } from 'react-scroll'
import reactsvg from '../../public/assets/react.svg'
import downloadImg from '../../public/assets/download.png'
import Social from './Social';
import Typewriter from './Typewriter';
import { motion } from 'framer-motion';






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
            <motion.section 
            variants={{
            hidden: { opacity: 0, y: 80 },
            visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
            id="home" 
            className="w-screen md:max-w-7xl h-screen sm:h-[calc(100vh-20px)] overflow-hidden flex flex-row-reverse"> 
            <div className="md:px-5 h-2/3 md:h-screen w-screen flex flex-col md:flex-row justify-center items-center text-yellow">
                <div className="lg:pl-12 h-full sm:pl-0 md:pl-0 text-2xl md:text-3xl w-2/3 leading-7 font-thin flex flex-col justify-center items-center sm:items-start">
                <span className="">Hi,</span>
                <span className="py-2">I&#39;m <span className="font-bold text-orange relative inline-block after:content-[''] after:absolute after:bottom-0 after:rounded after:left-0 after:w-full after:h-1.5 after:bg-red">Johad</span></span>
                <Typewriter />
                <Social />
                <Link >
                    <button id="downloadCV" 
                    onClick={downloadFileAtURL} 
                    value="download" 
                    className='my-3 border-3 font-bold rounded w-40 bg-red py-0 sm:py-2 text-white text-lg flex justify-center items-center  hover:bg-orange'>
                        <img className='p-0 w-8 bg-transparent'src={downloadImg} alt="download" />
                        <span className="bg-transparent text-base pl-2">Resume</span></button>
                </Link>
            </div>
            <div className="md:h-96 w-1/2 flex justify-center">
            <img src={reactsvg} className="h-36 absolute md:pr-12 md:h-96" alt="foto" />
            </div>
            </div>
        </motion.section>
            
    )
}