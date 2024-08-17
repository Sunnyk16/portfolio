import logo from '../assets/kevinRushLogo.png'

import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'   


function Navbar() {
  return (
    <div className=''>
        {/* navcomponet */}
        <nav className="  mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img src={logo} alt=""/>
            </div>

            <div className='m-8 flex items-center justify-center gap-4 text-2xl text-white'>
                <FaLinkedin/>
                <FaGithub/>
                <FaInstagram/>

            </div>

        </nav>
    </div>
  )
}

export default Navbar