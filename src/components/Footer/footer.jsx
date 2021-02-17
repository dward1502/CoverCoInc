import React from 'react';
import Logo from '../UI/Logo';
import Link from 'next/link';

const footer = () => {
  return (
    <footer className='footer'>
      {/* <div className='footer_logo'>
        <Logo />
      </div> */}
      <div className='footer_container'>
      <div className='footer_logo'>
        <Logo />
      </div>
        {/* <div className='businessInfo'>
          <p>404 Sorrento Valley Blvd # A</p>
          <p className='businessInfo_2ndp'>San Diego, CA 92121</p>
          <div className='info_text'>
            <i className='fas fa-phone' /> <p>1.800.959.8527</p>
          </div>
          <div className='info_text'>
            <i className='fas fa-envelope' /> <p>info@covercoinc.com</p>
          </div>
        </div> */}
        <div className='nav_1'>
          <Link href='/'>
            <a>Home</a>
          </Link>
          <Link href='/about'>
            <a>About</a>
          </Link>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </div>
        <div className='nav_2'>
          <Link href='/catalog'>
            <a>Catalog</a>
          </Link>
          <Link href='/industries'>
            <a>Industries</a>
          </Link>
          <Link href='/customize'>
            <a>Customize</a>
          </Link>
        </div>
        <div className='newsletterSignup_container'>
          <p>Sign up for newsletter Today!</p>
          <form id='newsletter' className="signup_form">
            <input id='email' type="email" placeholder='Your e-mail'/>
            <button form='newsletter' type='submit' className="signup_button">Sign Up</button>
          </form>
        </div>
        <div className='socialIcons_container'>
          <Link href='#'>
            <a>
              <i className='fab fa-instagram' />
            </a>
          </Link>
          <Link href='#'>
            <a>
              <i className='fab fa-twitter' />
            </a>
          </Link>
          <Link href='#'>
            <a>
              <i className='fab fa-facebook' />
            </a>
          </Link>
          <Link href='#'>
            <a>
              <i className='fab fa-linkedin-in' />
            </a>
          </Link>
        </div>
      </div>
      <div className='copyright'>
        <p>&copy; 2020 ColorCoInc All Rights Reserved</p>
        <Link href='/privacy_policy'>
          <a>Privacy Policy</a>
        </Link>
        <Link href='/terms_of_use'>
          <a>Terms of Use</a>
        </Link>
      </div>
    </footer>
  );
};

export default footer;
