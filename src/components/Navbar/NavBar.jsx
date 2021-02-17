import React, { useState } from 'react';
import Link from 'next/link';
import Dropdown from './Dropdown';
import Logo from '../UI/Logo';


const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  return (
    <header className='Header'>
      <div className='Toolbar'>
        <div className='Logo_container'>
          <Logo />
        </div>
        <div className='Toolbar_2'>
          <div className='searchBox'></div>
          <div className='contactInfo'>
            <p>Call Us Today!</p>
            <a href='tel:+18009598527'> 1.800.959.8527</a> |
            <a href='mailto:info@covercoinc.com'>info@covercoinc.com</a>
          </div>
        </div>
      </div>
      <nav className='navbar'>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link href='/'>
              <a className='nav-links' onClick={closeMobileMenu}>
                Home
              </a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/about'>
              <a className='nav-links' onClick={closeMobileMenu}>
                About
              </a>
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link href='/catalog'>
              <a className='nav-links' onClick={closeMobileMenu}>
                Catalog <i className='fas fa-caret-down'/>
              </a>
            </Link>
            {dropdown && <Dropdown/>}
          </li>
          <li className='nav-item'>
            <Link href='/customize'>
              <a className='nav-links' onClick={closeMobileMenu}>
                Customize
              </a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/industries'>
              <a className='nav-links' onClick={closeMobileMenu}>
                Industries
              </a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/contact'>
              <a className='nav-links' onClick={closeMobileMenu}>
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
