import { Link } from 'react-scroll'
import reactsvg from '../../assets/react.svg'
import downloadImg from '../../assets/download.png'

export function Home(){
    return(
        
        <section id="home" className="w-screen max-w-7xl h-[calc(100vh-20px)] overflow-hidden flex flex-row-reverse items-end"> 
            <div className="h-screen w-screen p-8 text-5xl leading-10 font-bold flex flex-col justify-center">
                <span className="text-3xl font-thin">Hi,</span>
                <span className="text-3xl font-thin">I am <span className="text-indigo-600">Johad</span> <br />Web Developer</span>
                <p className="text-3xl font-thin">A Web developer building reactive webapps.</p>
                <Link to='https://www.linkedin.com/in/johad-toledo-webdeveloper/'><button className="bg-white text-3xl flex items-center rounded-3xl my-4 px-8"><img className='p-0 w-8 bg-transparent'src={downloadImg} alt="download" /><span className="bg-transparent pl-2">Resume</span></button></Link>
            </div>
            <img src={reactsvg} className="absolute pr-12 h-2/3 " alt="foto" />
        </section>
    )
}