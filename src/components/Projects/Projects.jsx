// import { CodeIcon } from "@heroicons/react/24/solid"
import "./projects.css";
import {projects} from './data'

export function Projects() {
    return (
        <section id="projects" className="project-section">
            <div className="container">
                <div className="">
                {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
                <h1 className="">Apps I&apos;ve Built</h1>
                <p className="">
                Here you can find out some projects that I&apos;ve been builting
                out.
                </p>
                </div>
                <div className="project-items">
                {projects.map((project) => (
                <a
                href={project.link}
                key={project.image}
                className="project-item"
                >
                <div className="project-item-div">
                <img
                alt="gallery"
                className="project-item-img"
                src={project.image}
                />
                <div className="project-item-desc">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                </h1>
                <p className="leading-relaxed">{project.description}</p>
                </div>
                </div>
                </a>
                ))}
                </div> 
            </div>
        </section>
    );
}
