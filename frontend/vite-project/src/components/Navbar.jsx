import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, LogOut, Menu } from 'your-icon-library';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const user = { image: '/path/to/avatar.png' };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const setContentType = (type) => {
  };

  const logout = () => {
  };

  return (
    <header className='max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20'>
      <div className='flex items-center gap-10 z-50'>
        <Link to='/'>
          <img src='/netflix-logo.png' alt='Netflix Logo' className='w-32 sm:w-40' />
        </Link>

      
        <div className='hidden sm:flex gap-2 items-center'>
          <Link to='/' className='hover:underline' onClick={() => setContentType("movie")}>
            Movies
          </Link>
          <Link to='/' className='hover:underline' onClick={() => setContentType("tv")}>
            TV Shows
          </Link>
          <Link to='/history' className='hover:underline'>
            Search History
          </Link>
        </div>
      </div>

      <div className='flex gap-2 items-center z-50'>
        <Link to='/search' aria-label='Search'>
          <Search className='size-6 cursor-pointer' />
        </Link>
        <img src={user.image} alt='Avatar' className='h-8 rounded cursor-pointer' />
        <LogOut className='size-6 cursor-pointer' onClick={logout} aria-label='Log Out' />
        <div className='sm:hidden'>
          <Menu className='size-6 cursor-pointer' onClick={toggleMobileMenu} aria-label='Menu' />
        </div>
      </div>

     
      {isMobileMenuOpen && (
        <div className='w-full sm:hidden mt-4 z-50 bg-black border rounded border-gray-800'>
          <Link to='/' className='block hover:underline p-2' onClick={toggleMobileMenu}>
            Movies
          </Link>
          <Link to='/' className='block hover:underline p-2' onClick={toggleMobileMenu}>
            TV Shows
          </Link>
          <Link to='/history' className='block hover:underline p-2' onClick={toggleMobileMenu}>
            Search History
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
