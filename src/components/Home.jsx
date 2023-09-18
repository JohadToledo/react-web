import { Link } from 'react-scroll'
// import reactsvg from '../../public/assets/react.svg'
import downloadImg from '../../public/assets/download.png'
import Social from './Social';
import Typewriter from './Typewriter';
import { motion } from 'framer-motion';
import ParticlesBg from './ParticlesBg';






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
            <>
            <ParticlesBg /> 
            <motion.section 
            variants={{
            hidden: { opacity: 0, y: -80 },
            visible: { opacity: 1, y: 1 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
            id="home" 
            className="w-screen md:max-w-7xl h-screen sm:h-[calc(100vh-20px)] overflow-hidden z-1 absolute bg-transparent">
            
            <div className="md:px-5 h-2/3 md:h-screen w-screen flex flex-col md:flex-row justify-center items-center bg-transparent">
                <div className="bg-transparent lg:pl-12 h-full sm:pl-0 md:pl-0 text-2xl md:text-3xl w-2/3 leading-7 font-thin flex flex-col justify-center items-center sm:items-start">
                <span className="bg-transparent text-yellow">Hi,</span>
                <span className="bg-transparent text-yellow py-2">I&#39;m <span className="bg-transparent text-orayellow font-bold relative inline-block after:content-[''] after:absolute after:bottom-0 after:rounded after:left-0 after:w-full after:h-1.5 after:bg-lorange">Johad</span></span>
                <Typewriter />
                <Social />
                <Link >
                    <button id="downloadCV" 
                    onClick={downloadFileAtURL} 
                    value="download" 
                    className='border-3 font-bold rounded w-40 bg-red py-5 sm:py-2 text-yellow text-lg flex justify-center items-center  hover:bg-orange hover:text-bordo'>
                        <img className='p-0 w-8 bg-transparent'src={downloadImg} alt="download" />
                        <span className="bg-transparent text-base pl-2">Resume</span></button>
                </Link>
            </div>
            <div className="md:h-96 w-1/2 flex justify-center bg-transparent">
            {/* <img src={reactsvg} className="h-36 absolute md:pr-12 md:h-96" alt="react-logo" /> */}
            </div>
            </div>
        </motion.section>
        </>
    )
}