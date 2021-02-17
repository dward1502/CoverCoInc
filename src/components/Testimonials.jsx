import React from 'react';
import Testimonial from '../data/testimonial';

import Image from 'next/image';

const Testimonials = () => {
  return (
    <>
      <div className='row'>
        <div className='col-1-of-2 testimonial_box'>
          <div className='image_container'>
            <Image
              src={Testimonial[0].img}
              alt={Testimonial[0].index}
              layout='fill'
            />
          </div>
          <div className='testimonial_text'>
            <p>{Testimonial[0].testimonial}</p>
          </div>
          <div className='testimonial_author'>
            <p>- {Testimonial[0].author}</p>
          </div>
        </div>
        <div className='col-1-of-2 testimonial_box'>
          <div className='image_container'>
            <Image
              src={Testimonial[1].img}
              alt={Testimonial[1].index}
              layout='fill'
            />
          </div>
          <div className='testimonial_text'>
            <p>{Testimonial[1].testimonial}</p>
          </div>
          <div className='testimonial_author'>
            <p>-  {Testimonial[1].author}</p>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-1-of-2 testimonial_box'>
          <div className='image_container'>
            <Image
              src={Testimonial[2].img}
              alt={Testimonial[2].index}
              layout='fill'
            />
          </div>
          <div className='testimonial_text'>
            <p>{Testimonial[2].testimonial}</p>
          </div>
          <div className='testimonial_author'>
            <p>- {Testimonial[2].author}</p>
          </div>
        </div>
        <div className='col-1-of-2 testimonial_box'>
          <div className='image_container'>
            <Image
              src={Testimonial[3].img}
              alt={Testimonial[3].index}
              layout='fill'
            />
          </div>
          <div className='testimonial_text'>
            <p>{Testimonial[3].testimonial}</p>
          </div>
          <div className='testimonial_author'>
            <p>-  {Testimonial[3].author}</p>
          </div>
        </div>
      </div>
      <div className='row mb-120'>
        <div className='col-1-of-2 testimonial_box'>
          <div className='image_container'>
            <Image
              src={Testimonial[4].img}
              alt={Testimonial[4].index}
              layout='fill'
            />
          </div>
          <div className='testimonial_text'>
            <p>{Testimonial[4].testimonial}</p>
          </div>
          <div className='testimonial_author'>
            <p>- {Testimonial[4].author}</p>
          </div>
        </div>
        <div className='col-1-of-2 testimonial_box'>
          <div className='image_container'>
            <Image
              src={Testimonial[5].img}
              alt={Testimonial[5].index}
              layout='fill'
            />
          </div>
          <div className='testimonial_text'>
            <p>{Testimonial[5].testimonial}</p>
          </div>
          <div className='testimonial_author'>
            <p>-  {Testimonial[5].author}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
