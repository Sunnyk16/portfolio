import profile from '../../assets/sunnykumarProfile.png'
import { ABOUT_TEXT } from '../../constants'

function About() {
    return (
        <div >
            <div className="border border-neutral-800  pb-4" >
                <h2 className="my-10 text-center text-6xl">About me</h2>

                {/* <div className="flex flex-wrap ">
                <div className="w-full lg:w-1/2  lg:p-8 sm:">
                <img src={profile} className='rounded-2xl  lg:w-full'/>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8  ">
                <p className='my-2 text-2xl md:text-base p-3 sm:text-xs '>{ABOUT_TEXT}</p>
                </div>
            </div> */}
                <div className="flex flex-wrap">
                    <div className="hidden md:block w-full sm:w-1/2  md:w-1/2 lg:w-1/2 p-4 lg:p-8  ">
                        <img
                            src={profile}
                            className='rounded-2xl w-full h-5/6'
                        />
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 p-4 lg:p-8 flex justify-center items-center">
                        <p className='text-xs sm:text-sm md:text-lg lg:text-2xl p-3 my-auto'>
                            {ABOUT_TEXT}
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default About