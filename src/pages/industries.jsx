import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Image from 'next/image';

const industries = () => {
  return (
    <div>
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
        <div className='hero_banner'>
          <Image
            src='/images/titleIndustries.jpg'
            alt='Industries hero banner'
            layout='fill'
          />
        </div>
        <div className='background_box'>
          <div className='industries_text'>
            <p>
              With over 800 manufactured items, Cover Co Inc. offers the widest
              variety of cover products in the industry encompassing almost any
              hospitality item that you want to become an appealing marketing
              accessory instead of an eyesore.
            </p>
            <p>
              All Cover Co Inc. covers are manufactured using Fairbanks Super
              Fabric, a cutting edge, high performance fabric that was created
              for hospital emergency rooms and is impervious to stains, water
              and bacteria. By using this state-of-the-art fabric, all Cover Co
              Inc. covers require little to no laundering while maintaining its
              crisp clean looks year after year.
            </p>
            <p>
              Cover Co Inc. creates custom patterns available in a wide array of
              vibrant colors to match any color scheme or logo for your company
              or organization. Cover Co Inc. covers provide a superior fit to
              most hospitality pieces for any company around the globe. Cover Co
              Inc. coverings slip on and off easily for fast setup and removal
              saving our clients time &amp; money, while providing a branding
              opportunity second to none!
            </p>
            <p>
              We can create any size and/or shape covering for any item your
              company or organization utilizes in your business events and
              activities. Cover Co Inc.’s main objective is to help make our
              clients look their best when dealing with their clientele.
            </p>
          </div>
          <div className='industries_images'>
            <Image
              src='/images/sectIndustries-1.jpg'
              alt='Industries section'
              layout='fill'
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default industries;
