import React, { useState, useEffect } from 'react';
import { Link as LinkV6 } from 'react-router-dom';
import H1 from './components/Common/H1';
import './Layout.css';
import MenuButton from './MenuButton';
import BlobAnimation from './components/BlobAnimation/BlobAnimation';




const Layout = ( { children } ) =>
{
  // state variable to control visibility of mobile dropdown menu
  const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState( false );

  // function to toggle mobile menu
  const toggleMobileMenu = () =>
  {
    setIsMobileMenuOpen( !isMobileMenuOpen );
  };

  const closeMobileMenu = () =>
  {
    setIsMobileMenuOpen( false );
  };


  useEffect( () =>
  {
    // Function to handle changes in screen size
    const handleResize = () =>
    {
      if ( window.innerWidth >= 640 )
      {
        // Ensure the menu is always open on screens larger than or equal to 640px
        setIsMobileMenuOpen( false );
      } else
      {
        // Close the menu on smaller screens if it was previously open
        setIsMobileMenuOpen( false );
      }
    };

    // Add a resize event listener to handle changes in screen size
    window.addEventListener( 'resize', handleResize );

    // Initial check for screen size when the component mounts
    handleResize();

    // Clean up the event listener when the component unmounts
    return () =>
    {
      window.removeEventListener( 'resize', handleResize );
    };
  }, [] );

  return (
    <div className='flex min-h-screen overflow-hidden relative;'>
            <BlobAnimation />


      { window.innerWidth < 640 && (
        <MenuButton
          isMobileMenuOpen={ isMobileMenuOpen }
          toggleMobileMenu={ toggleMobileMenu }
        />
      ) }
      <div
        id="sideNav"
        className={ `w-full sm:w-1/3 lg:w-1/4 flex-shrink-0 p-4 bg-slate-900 relative ${ isMobileMenuOpen || window.innerWidth >= 640 ? 'block' : 'hidden'
          }` }
      >
        <nav className="sticky top-0 py-8 px-4 bg-slate-700 rounded-xl my-3 w-full mt-8 sm:mt-0">
          <h2 className=" text-4xl font-extrabold tracking-tight text-slate-900 typewriter-text">
            <span className="text-indigo-300 block" style={ { maxWidth: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' } }>
              Components
            </span>
          </h2>

          <div className="spacer py-4"></div>
          <ul>
            <li className="text-white hover:text-indigo-300 pb-2" onClick={ closeMobileMenu }><LinkV6 to="/todo">To-do list</LinkV6></li>
            <li className="text-white hover:text-indigo-300 pb-2" onClick={ closeMobileMenu }><LinkV6 to="/stopwatch">Stopwatch</LinkV6></li>
            <li className="text-white hover:text-indigo-300 pb-2" onClick={ closeMobileMenu }><LinkV6 to="/countdown">Countdown</LinkV6></li>
            <li className="text-white hover:text-indigo-300 pb-2" onClick={ closeMobileMenu }><LinkV6 to="/calculator">Calculator</LinkV6></li>
            <li className="text-white hover:text-indigo-300 pb-2" onClick={ closeMobileMenu }><LinkV6 to="/memory-game">Memory Game</LinkV6></li>
          </ul>
        </nav>
        <nav className="sticky top-0 p-4 bg-slate-700 rounded-xl w-full">
          <ul>
            {/* <li className="text-white hover:text-indigo-300 pb-2"><LinkV6 to="/">Home</LinkV6></li> */ }
            <li className="text-white hover:text-indigo-300" onClick={ closeMobileMenu }>
              <div className="flex gap-2 pb-2">
                <img src="img/page/homeIcon.svg" alt="home icon" width="20" />
                <LinkV6 to="/">Home</LinkV6>
              </div>

            </li>
            <li className="text-white hover:text-indigo-300" onClick={ closeMobileMenu }>
              <div className="flex gap-2">
                <img src="img/page/aboutIcon.svg" alt="about icon" width="20" />
                <LinkV6 to="/about">About</LinkV6>
              </div>
            </li>
          </ul>

        </nav>
        <footer className="absolute bottom-0 w-full px-4 py-3 text-white">
          <p className="typewriter-text text-2xl">Reactology</p>
          <p className="text-xs opacity-70"><span>&#169;</span> 2023 Eleanor Mears</p>
        </footer>
      </div>

      <main role="main" className="w-full flex-grow py-16 px-10 overflow-auto" >

        { children }

      </main>
    </div>
  );
};

export default Layout;
