import { PROJECTS } from "../../constants"


function Projects() {
    return (
        <div>
            <div className="border border-neutral-500 pb-4 px-2 my-2">
                <h2 className="my-10 text-center text-6xl" >Projects</h2>
                <div>
                    {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center  gap-2  ">
                        <div className="w-full lg:w-1/4 ">
                            <img src={project.image} alt={project.title} className="rounded-lg mb-3 sm:w-72 lg:h-48  "  />
                        </div>
                        <div className="w-full max-w-xl lg:2-3/4">
                        <h6 className="mb-2 font-bold"> 
                            {project.title}
                        </h6>
                        <p className="mb-4 text-neutral-400">{project.description}</p>
                        <div className="flex flex-wrap gap-y-4 gap-x-2">
                            {project.technologies.map((tech, index) => (
                                <div key={index}>
                                    <span className=" border border-neutral-800 shadow-sm shadow-slate-300 py-1 px-2 mr-2 rounded text-sm font-medium text-purple-500 sm:text-xs my-1">
                                        {tech}
                                    </span>
                                </div>
                            ))}
                        </div>

                        </div>


                    </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default Projects