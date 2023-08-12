import { Link } from 'react-scroll'
import './home.css'
import reactsvg from '../../assets/react.svg'

export function Home(){
    return(
        <section id="home" className="">
            <div className="homeContent">
                <span className="hello">Hi,</span>
                <span className="homeText">I am <span className="homeName">Johad</span> <br />Web Developer</span>
                <p className="homeParag">A Web developer building reactive webapps.</p>
                <Link><button className="btn"><img src="" alt="download" />Download Resume</button></Link>
            </div>
            <img src={reactsvg} className="bg" alt="foto" />
        </section>
    )
}