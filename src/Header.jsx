import { Projects } from "./NavComp/Projects"
import { Skills } from "./NavComp/Skills"
import { Contact } from "./NavComp/contact"


function Header() {
    return(
        <div className="header-content">
        <div> Johad Toledo </div>
        <nav>
        <Projects />
        <Skills />
        <Contact />
        </nav>
            

        </div>
    )
}

export default Header