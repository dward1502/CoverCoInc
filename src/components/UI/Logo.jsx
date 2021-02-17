import React from 'react';
import Image from 'next/image'

// import CoverCoLogo from '../../assets/images/covercoinclogo.png'

const Logo = () => {
  return (
    <div className='Logo'>
      <Image
      src='/images/covercoinclogo.png'
      alt="CoverCo Inc logo"
      width={250}
      height={50}
      />
    </div>
  );
};

export default Logo;