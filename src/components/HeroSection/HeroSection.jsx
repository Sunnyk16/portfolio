import { HERO_CONTENT } from "../../constants"
import profile from '../../assets/sunnykumarProfile.png'
import { animate, delay, motion } from "framer-motion"
import Seo from "../SEO/Seo"

const container =(dealy)=>({
    hidden:{x: -100 ,opacity:0},
    animate:"visible",
    visible:{x:0,
        opacity:1,
        transition:{
            delay:dealy,
            duration:0.5
        }
    }
})

function HeroSection() {
  return (
    <div>
        <Seo title="Hero Section" description="Sunny Kumar's portfolio hero section showcasing skills and introduction." />
        <div className='border border-neutral-900 shadow-sm shadow-slate-300  rounded pb-4  my-2 px-2'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1 variants={container(0)} initial='hidden' animate='visible'
                    className='pb-5 p-2 text-6xl font-light tracking-tight lg:mt-16 capitalize font-extrabold'>
                        sunny kumar
                    </motion.h1>
                    <motion.span variants={container(0.5)} initial='hidden' animate='visible' className='bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-4xl  p-2 tracking-tight text-transparent'> 
                        Full Stack Developer
                    </motion.span>
                    <motion.p variants={container(1)} initial='hidden' animate='visible' className="my-2 max-w-xl py-6 font-normal tracking-tight p-2 ">
                        {HERO_CONTENT}
                    </motion.p>

                </div>


                </div>

                <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center ">
                    <motion.img  initial={{x:100,opacity :0}}
                    animate={{x:0,opacity:1}}
                    transition={{delay:1,duration:1.2}}
                    src={profile} alt="Sunny Kumar profile photo" className="h-96  rounded-sm  drop-shadow-smshadow-lg-white"/>

                </div>

                </div>
                </div> 

                

        </div>
    </div>
  )
}

export default HeroSection