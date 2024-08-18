import profile from '../../assets/sunnykumarProfile.png'
import { ABOUT_TEXT } from '../../constants'
import {     motion } from "framer-motion"

function About() {
    return (
        <div >
            <div className="border border-neutral-800  p-1" >
                <motion.h2 initial={{x:-100 ,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{duration:0.5}}
                className="my-10  text-center text-6xl sm:mb-5 ">About me</motion.h2>

                {/* <div className="flex flex-wrap ">
                <div className="w-full lg:w-1/2  lg:p-8 sm:">
                <img src={profile} className='rounded-2xl  lg:w-full'/>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8  ">
                <p className='my-2 text-2xl md:text-base p-3 sm:text-xs '>{ABOUT_TEXT}</p>
                </div>
            </div> */}
                <div className="flex flex-wrap">
                    <motion.div whileInView={{opacity:1,x:0}}
                    initial={{opacity:0 ,x:-100}}
                    transition={{duration:0.5}}
                    className="hidden md:block w-full sm:w-1/2  md:w-1/2 lg:w-1/2 p-4 lg:p-4  ">
                        <img
                            src={profile}
                            className='rounded-2xl w-4/6 '
                        />
                    </motion.div>
                    <motion.div 
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0 ,x:100}}
                    transition={{duration:0.5}}
                    className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 p-4 lg:p-8 flex justify-center items-center">
                        <p className='text-xs sm:text-sm md:text-lg lg:text-2xl p-3 my-auto'>
                            {ABOUT_TEXT}
                        </p>
                    </motion.div>
                </div>

            </div>

        </div>
    )
}

export default About