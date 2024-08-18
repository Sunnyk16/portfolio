import { HERO_CONTENT } from "../../constants"
import profile from '../../assets/sunnykumarProfile.png'


function HeroSection() {
  return (
    <div>
        <div className='border border-neutral-900  rounded pb-4  my-2 px-2'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <h1 className='pb-5 p-2 text-4xl font-light tracking-tight lg:mt-16'>
                        sunny kumar
                    </h1>
                    <span className='bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-4xl  p-2 tracking-tight text-transparent'> 
                        Full Stack Developer
                    </span>
                    <p className="my-2 max-w-xl py-6 font-light tracking-tight p-2 ">
                        {HERO_CONTENT}
                    </p>

                </div>


                </div>

                <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center ">
                    <img src={profile} alt="sunny kumar" className="h-96  rounded-sm  drop-shadow-smshadow-lg-white"/>

                </div>

                </div>
                </div> 

                

        </div>
    </div>
  )
}

export default HeroSection