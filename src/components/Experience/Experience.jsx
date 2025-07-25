import { EXPERIENCES } from "../../constants"
import { motion } from "framer-motion"
import Seo from "../SEO/Seo"


function Experience() {
    return (
        <div>
            <Seo title="Experience Section" description="Sunny Kumar's portfolio experience section showcasing professional background and skills." />
            <div className="border border-neutral-900 shadow-sm shadow-slate-300 pb-4 px-2">
                <div className="">
                    <motion.h1 whileInView={{opacity:1,y:0}}
                    initial={{opacity:0,y:-100}}
                    transition={{duration:0.5}}
                    className="my-20 text-center text-6xl  " >Experience</motion.h1>
                    <div>
                        {
                            EXPERIENCES.map((experience, index) => (
                                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                                    <motion.div whileInView={{opacity:1 ,x:0}}
                                    initial={{opacity:0,x:-100}}
                                    transition={{duration:0.5}}
                                    className="w-full lg:w-1/4">
                                        <p className="mb-2 text-neutral-400 text-sm"> {experience.year}</p>
                                    </motion.div>
                                    <motion.div whileInView={{opacity:1 ,x:0}}
                                    initial={{opacity:0,x:100}}
                                    transition={{duration:0.5}}
                                    className="w-full max-w-xl lg:w-3/4">
                                        <h6 className="mb-2 font-semibold">{experience.role}
                                            -{""} <span className="text-purple-400 text-sm">{experience.company}</span>
                                        </h6>
                                        <p className="mb-4 text-neutral-400">
                                            {experience.description}

                                        </p>
                                        <div className="flex flex-wrap 
                                    justify-center md:justify-start
                                    lg:justify-start ">
                                            {experience.technologies.map((tech, index) => (
                                                <span key={index} className=" mr-2 mt-4 rounded  shadow-sm shadow-slate-200 border border-neutral-800 px-2 py-1 text-sm font-medium text-purple-500 ">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                    </motion.div>

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