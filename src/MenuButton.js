import React from 'react';

const MenuButton = ({ isMobileMenuOpen, toggleMobileMenu }) => {
  const strokeColor = isMobileMenuOpen ? 'white' : 'black';

  return (
    <button
      className="block sm:hidden top-0 right-0 m-4 absolute z-10"
      onClick={toggleMobileMenu}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-6 w-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke={strokeColor}
        onClick={toggleMobileMenu}
        style={{ cursor: 'pointer' }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-6 w-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke={strokeColor}
        onClick={toggleMobileMenu}
        style={{ cursor: 'pointer' }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};

export default MenuButton;
