import { useState } from "react"


function Navbar() {
  const [isMenuOpen, setisMenuOpen] = useState(false)

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-blue-500 p-4 sticky top-0">
        <div className="container mx-auto flex justify-between items-center">
            <a href="#" className="text-white text-2xl font-semibold">
                ReactSite
            </a>

            {/* toggle menu */}
            <div className="md:hidden">
              <button id="menu-toggle" className="text-white" onClick={toggleMenu}>
                <svg 
                  fill='none' 
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>

            {/* menu normal */}
            <ul className="hidden md:flex space-x-4">
                <li><a href="#" className="text-white">Home</a></li>
                <li><a href="#" className="text-white">About</a></li>
                <li><a href="#" className="text-white">Services</a></li>
                <li><a href="#" className="text-white">Contact</a></li>
            </ul>
        </div>

        {/* mobile menu */}
        {isMenuOpen ? (
          <ul className="flex-col md:hidden text-center">
            <li className="py-2"><a href="#" className="text-white hover:text-gray-300">Home</a></li>
            <li className="py-2"><a href="#" className="text-white hover:text-gray-300">About</a></li>
            <li className="py-2"><a href="#" className="text-white hover:text-gray-300">Services</a></li>
            <li className="py-2"><a href="#" className="text-white hover:text-gray-300">Contact</a></li>
          </ul>
        ): null}

    </nav>
  )
}

export default Navbar