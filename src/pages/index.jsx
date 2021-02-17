import Head from 'next/head';
import Layout from '../components/Layout.jsx';
import SlideShow from '../components/SlideShow/Slider';
import Testimonials from '../components/Testimonials';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://use.fontawesome.com/releases/v5.8.1/css/all.css'
          integrity='sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf'
          crossOrigin='anonymous'
        />
      </Head>

      <Layout>
        {/* <SlideShow/> */}
        <div className='hero'>
          <Image
            src='/images/slideshow1.jpg'
            alt='hero image'
            layout='fill'
            // objectFit="contain"
            // objectPosition="center"
          />
          <div className='hero_container'>
            <div className='hero_text'>
              <p>
                CoverCoInc where you can find all your sports covering needs
              </p>
            </div>
            <div className='hero_button'>
              <Link href='#'>
                <a>Order Today</a>
              </Link>
            </div>
          </div>
        </div>
        <div className='home_sections'>
          <div className='row'>
            <div className='col-1-of-3 home_box'>
              <Link href='/about'>
                <a>About</a>
              </Link>
            </div>
            <div className='col-1-of-3 home_box'>
              <Link href='/customize'>
                <a>Customize</a>
              </Link>
            </div>
            <div className='col-1-of-3 home_box'>
              <Link href='/industries'>
                <a>Industries</a>
              </Link>
            </div>
          </div>
        </div>
        <Testimonials/>
      </Layout>
    </>
  );
}
