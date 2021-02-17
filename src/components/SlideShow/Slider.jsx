import React, { Component } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import Image from 'next/image';

class SlideShow extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      speed: 500,
      autoplaySpeed: 4000,
      cssEase: 'linear',
      pauseOnHover: true,
      arrows: false,
    };
    return (
      <>
        <Slider {...settings}>
          <div className='slideshow_container'>
            <Image
            className='slideshow_image'
              src='/images/slideshow1.jpg'
              alt='slideshow image'
             height={350}
             width={900}
            />
            <div className='slideshow_text'>
              <h1>Test text 1</h1>
              <Link href='#'>
                <a>Order Today</a>
              </Link>
            </div>
          </div>
          <div className='slideshow_container'>
            <Image
            className='slideshow_image'
              src='/images/slideshow2.jpg'
              alt='slideshow image'
              height={350}
             width={900}
            />
            {/* <div className='slideshow_text'>
              <h1>Test text 2</h1>
              <Link href='#'>
                <a>Order Today</a>
              </Link>
            </div> */}
          </div>
          <div className='slideshow_container'>
            <Image
            className='slideshow_image'
              src='/images/slideshow1.jpg'
              alt='slideshow image'
              height={350}
             width={900}
            />
            {/* <div className='slideshow_text'>
              <h1>Test text 3</h1>
              <Link href='#'>
                <a>Order Today</a>
              </Link>
            </div> */}
          </div>
        </Slider>
      </>
    );
  }
}

export default SlideShow;
