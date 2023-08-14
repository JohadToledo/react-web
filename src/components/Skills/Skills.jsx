import { skills } from '../data'
import './skill.css'

export function Skills(){
    return(
        <section id="skill">
            <div className="container">
                <div className="skill-text">
                    <h1>
                        Skill &amp; Technologies
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, veniam. Sint qui quaerat ratione nesciunt? Architecto vel est molestias molestiae. Quam, quae amet. Laboriosam, voluptatum illo. Voluptate ipsa numquam consequuntur?</p>

                </div>
                <div className="skills-items">
                    {skills.map((skills) => (
                <div key={skills} className="skill-item">
                    <div className="item">
                        <span>
                            {skills}
                        </span>
                    </div>
                </div>
                        
                    ))}

                </div>
            </div>
        </section>
    )
}  