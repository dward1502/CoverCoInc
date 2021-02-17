import React, {useState} from 'react';


import Link from 'next/link';
import Logo from '../UI/Logo';

const Header = (props) => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

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
      <nav className='Navbar'>
        <ul className='NavigationItems'>
          <li className='NavigationItem'>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li className='NavigationItem'>
            <Link href='/'>
              <a>About</a>
            </Link>
          </li>
          <li className='NavigationItem'>
            <Link href='/'>
              <a>Catalog</a>
            </Link>
          </li>
          <li className='NavigationItem'>
            <Link href='/'>
              <a>Customize</a>
            </Link>
          </li>
          <li className='NavigationItem'>
            <Link href='/'>
              <a>Industries</a>
            </Link>
          </li>
          <li className='NavigationItem'>
            <Link href='/'>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
        
      </nav>
    </header>
  );
};

export default Header;
