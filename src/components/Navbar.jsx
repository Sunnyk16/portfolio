import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import Seo from './SEO/Seo'


function Navbar() {
  return (
    <header className="bg-neutral-900 text-white shadow-md">
      <Seo title="Sunny Kumar - Portfolio" description="Sunny Kumar's official portfolio showcasing projects in web development, design, and more. Explore my skills and work." />
      <nav className="mb-5 flex items-center justify-between py-6 px-4 md:px-12">
        {/* Logo or Brand Name */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-wide">Sunny Kumar</span>
        </div>
        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <li>
            <a href="#about" className="hover:text-blue-400 transition">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </li>
        </ul>
        {/* Resume Button */}
        <div className="flex items-center gap-4">
          <a
            href="https://drive.google.com/file/d/13Sn3mWRzhLO5fovweBJZJ_Vf4agtAJxS/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button
              className="border border-neutral-800 shadow-sm shadow-slate-200 text-white font-medium py-2 px-4 rounded-lg hover:bg-white hover:text-black transition duration-200"
            >
              Resume
            </button>
          </a>
          {/* Social Icons */}
          <div className="flex items-center gap-3 text-2xl">
            <a
              className="hover:text-blue-800 hover:scale-110 transform transition duration-200"
              href="https://www.linkedin.com/in/sunny-kumar16/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              className="hover:text-gray-900 hover:scale-110 transform transition duration-200"
              href="https://github.com/Sunnyk16"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              className="hover:text-pink-600 hover:scale-110 transform transition duration-200"
              href="https://www.instagram.com/_sunny.16_/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        {/* Mobile Menu Icon (optional, for future enhancement) */}
      </nav>
    </header>
  )
}

export default Navbar