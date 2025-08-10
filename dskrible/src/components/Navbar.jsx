import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
    <nav className="w-full bg-white border-b border-gray-200 fixed top-0 left-0 z-50">
      <div className="h-16 flex items-center justify-between px-8 md:px-8">
        <div className="text-xl font-bold text-gray-800 tracking-tight lg:ml-20">
          dSkribe.ai
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 flex-grow justify-start ml-12">
          <a href="#product" className="text-gray-600 font-medium text-sm hover:text-gray-800">Product</a>
          <a href="#why" className="text-gray-600 font-medium text-sm hover:text-gray-800">Why dSkribe?</a>
          <a href="#solutions" className="text-gray-600 font-medium text-sm hover:text-gray-800">Solutions</a>
          <a href="#pricing" className="text-gray-600 font-medium text-sm hover:text-gray-800">Pricing</a>
          <a href="#resources" className="text-gray-600 font-medium text-sm hover:text-gray-800">Resources</a>
          <Link to="/contact" className="text-gray-600 font-medium text-sm hover:text-gray-800">Contact</Link>
        </div>

        <div className="hidden md:block bg-gray-300 mr-20 rounded-full px-4 py-2 text-xs font-medium text-gray-600">
          Coming Soon
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-2 space-y-2">
            <a href="#product" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-600 font-medium text-sm hover:text-gray-800">Product</a>
            <a href="#why" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-600 font-medium text-sm hover:text-gray-800">Why dSkribe?</a>
            <a href="#solutions" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-600 font-medium text-sm hover:text-gray-800">Solutions</a>
            <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-600 font-medium text-sm hover:text-gray-800">Pricing</a>
            <a href="#resources" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-600 font-medium text-sm hover:text-gray-800">Resources</a>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-600 font-medium text-sm hover:text-gray-800">Contact</Link>
            <div className="py-2">
              <div className="block w-full rounded-full px-4 py-2 text-xs font-medium bg-gray-600 text-white text-center">
                Coming Soon
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
    </>
  );
};

export default Navbar;
