import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Logo from '../components/UI/Logo';
import Image from 'next/image'

const contact = () => {
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
        <div className='contact_container'>
          <div className='contact_box'>
            <h1>Contact Us Today!</h1>
            <form>
              <div className='contact_input'>
                <label for='fName'>First Name</label>
                <input type='text' placeholder='First Name' id='fName' />
                <label for='lName'>Last Name</label>
                <input type='text' placeholder='Last Name' id='lName' />
              </div>
              <div className='contact_input'>
                <label for='email'>Email Address</label>
                <input type='email' placeholder='Email' id='email' />
                <label for='phone'>Phone Number</label>
                <input type='tel' placeholder='Phone Number' id='phone' />
              </div>
              <div className='message_input'>
                <label for='message'>Message</label>
                <input
                  type='message'
                  placeholder='Leave message here ... '
                  id='message'
                />
              </div>
            </form>
          </div>
          <div className='businessInfo_box'>
            <div className='businessInfo_logo'>
              <Logo />
            </div>
            <p className='contact_address'>
              4040 Sorrento Valley Blvd # A, San Diego, CA 92121
            </p>
            <div className='contact_info'>
              <div className='businessInfo'>
                <p className='businessInfo_2ndp'>San Diego, CA 92121</p>
                <div className='info_text'>
                  <i className='fas fa-phone' /> <p>1.800.959.8527</p>
                </div>
                <div className='info_text'>
                  <i className='fas fa-envelope' /> <p>info@covercoinc.com</p>
                </div>
              </div>
              <div className='operation_hrs'>
                  <p>Hours of operation</p>
                  <p>Mon - Fri : 9 AM - 4 PM</p>
                  <p>Saturday &amp; Sunday closed</p>
              </div>
            </div>
          </div>
          {/* <div className='usa_logo'>
            <Image
              src='/images/usa_stamp.jpg'
              alt='Made in the USA'
              width={100}
              height={100}
            />
          </div> */}
        </div>
      </Layout>
    </div>
  );
};

export default contact;
