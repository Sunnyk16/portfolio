import { EXPERIENCES } from "../../constants"


function Experience() {
    return (
        <div>
            <div className="border border-neutral-600 pb-4 px-2">
                <div className="">
                    <h1 className="my-20 text-center text-6xl  " >Experience</h1>
                    <div>
                        {
                            EXPERIENCES.map((experience, index) => (
                                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                                    <div className="w-full lg:w-1/4">
                                        <p className="mb-2 text-neutral-400 text-sm"> {experience.year}</p>
                                    </div>
                                    <div className="w-full max-w-xl lg:w-3/4">
                                    <h6 className="mb-2 font-semibold">{experience.role} 
                                        -{""} <span className="text-purple-400 text-sm">{experience.company}</span>
                                    </h6>
                                    <p className="mb-4 text-neutral-400">
                                        {experience.description}

                                    </p>
                                    <div className="flex flex-wrap 
                                    justify-center md:justify-start
                                    lg:justify-start "> 
                                    {experience.technologies.map((tech,index)=>(
                                        <span key={index} className=" mr-2 mt-4 rounded bg-neutral-200 px-2 py-1 text-sm font-medium text-purple-500 ">
                                            {tech}
                                        </span>
                                    ))}
                                    </div>

                                    </div>

                                </div>
                            ))
                        }
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Experience