import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=' bg-gray-900  md:bg-gray-900 w-full fixed z-50 py-3 top-0'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center '>
            <a to='/' className='text-white text-xl font-bold pb-3'>
              <p className='text-4xl text-white font-bold'>
                OA<span className='text-8xl'>.</span>
              </p>
            </a>
          </div>
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  isActive ? "navActive" : "nav navDesktop"
                }
              >
                Home
              </NavLink>
              <NavLink
                to='contact'
                className={({ isActive }) =>
                  isActive ? "navActive" : "nav navDesktop"
                }
              >
                Contact
              </NavLink>

              <NavLink
                to='about'
                className={({ isActive }) =>
                  isActive ? "navActive" : "nav navDesktop"
                }
              >
                About
              </NavLink>
              {/* Add more menu items here */}
            </div>
          </div>
          <div className='-mr-2 flex md:hidden px-2'>
            <button
              onClick={toggleMenu}
              type='button'
              className='bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden mb-10`}
        id='mobile-menu'
      >
        <div className='fixed top-0 left-0 h-screen w-64 bg-white shadow-2xl text-black text-left p-4'>
          <button
            onClick={toggleMenu}
            type='button'
            className=' inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-white mb-5'
            aria-controls='mobile-menu'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
            <svg
              className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? "navActive" : "nav")}
          >
            Home
          </NavLink>
          <NavLink
            to='contact'
            className={({ isActive }) =>
              isActive ? "navActive" : "nav navMobile"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to='about'
            className={({ isActive }) =>
              isActive ? "navActive" : "nav navMobile"
            }
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Header;
