import { Link } from 'react-scroll'
import './home.css'
import '../../../src/index.css'
import reactsvg from '../../assets/react.svg'
import downloadImg from '../../assets/download.png'

export function Home(){
    return(
        
        <section id="home" className="bg-white">
            <div className="bg-white homeContent text-white">
                <span className="bg-white hello text-white">Hi,</span>
                <span className="bg-white text-white homeText">I am <span className="homeName">Johad</span> <br />Web Developer</span>
                <p className="bg-white homeParag">A Web developer building reactive webapps.</p>
                <Link to=''><button className="bg-white btn"><img className='btnImg'src={downloadImg} alt="download" /><span className="spanResume">Resume</span></button></Link>
            </div>
            <img src={reactsvg} className="bg" alt="foto" />
        </section>
    )
}