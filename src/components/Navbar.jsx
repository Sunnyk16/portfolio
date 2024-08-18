import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'


function Navbar() {
  return (
    <div className='overflow-x-hidden text-neutral-900  antialiased selection:to-blue-600 selection:text-blue-300'>
      {/* navcomponet */}
      <nav className="  mb-5 flex items-center justify-between py-6">
        {/* <div className="flex flex-shrink-0 items-center">
          <img src={logo} alt=""/>
          

        </div> */}
        <div className="flex flex-shrink-0 items-center">
          {/* <img src={logo} alt=""/> */}
          <a
            href="https://drive.google.com/file/d/16MExcnDePwZPrCwXmqf0BbwDcFjf7HeE/view"
            target="_blank"
            rel="noreferrer"
          >
            
            <button
              className="border border-neutral-800 shadow-sm shadow-slate-200  text-white font-medium py-2 px-4 rounded-lg hover:bg-white hover:text-black transition duration-200"
            >
              Resume
            </button>
          </a>
        </div>


        <div className='m-8 flex items-center justify-center gap-4 text-2xl text-white'>
          {/* <a className='hover:text-blue-800' href="https://www.linkedin.com/in/sunny-kumar16/" target="_blank" rel="noreferrer "><FaLinkedin /></a>
         <a href='https://github.com/Sunnyk16' target='_blank' rel='noreferrer'> <FaGithub /></a>
          <a href='https://www.instagram.com/_sunny.16_/' target='_blank' rel='noreferrer'><FaInstagram /></a> */}
          <a
            className='hover:text-blue-800 hover:scale-110 transform transition duration-200'
            href="https://www.linkedin.com/in/sunny-kumar16/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className='hover:text-gray-900 hover:scale-110 transform transition duration-200'
            href='https://github.com/Sunnyk16'
            target='_blank'
            rel='noreferrer'
          >
            <FaGithub />
          </a>
          <a
            className='hover:text-pink-600 hover:scale-110 transform transition duration-200'
            href='https://www.instagram.com/_sunny.16_/'
            target='_blank'
            rel='noreferrer'
          >
            <FaInstagram />
          </a>

        </div>

      </nav>
    </div>
  )
}

export default Navbar