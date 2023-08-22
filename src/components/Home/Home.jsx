import { Link } from 'react-scroll'
import './home.css'
import reactsvg from '../../assets/react.svg'
import downloadImg from '../../assets/download.png'

export function Home(){
    return(
        
        <section id="home" className="w-screen max-w-7xl h-[calc(100vh-20px)] ">
            <div className="homeContent">
                <span className="hello">Hi,</span>
                <span className="homeText">I am <span className="text-indigo-600">Johad</span> <br />Web Developer</span>
                <p className="homeParag">A Web developer building reactive webapps.</p>
                <Link><button className="btn"><img className='btnImg'src={downloadImg} alt="download" /><span className="spanResume">Resume</span></button></Link>
            </div>
            <img src={reactsvg} className="bg" alt="foto" />
        </section>
    )
}