import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

import Image from 'next/image';

const about = () => {
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
        <div className='hero_banner'>
          <Image
            src='/images/slideshow1.jpg'
            alt='About hero banner'
            layout='fill'
          />
        </div>
        <div className='title'>
          <p>About</p>
        </div>
        <div className='about_quote'>
          <p>
            <i class='fas fa-quote-left mr-10'></i>
            Our continuing mission is to excel and exceed your expectations :
            effortlessly... effectively... affordable!!!
            <i class='fas fa-quote-right ml-10'></i>
          </p>
        </div>
        <div className='about_section'>
          <p>
            In the beginning of time: "If it doesn't look good ...", demanded
            Chef Hans, "wrap it with a linen!!!"
          </p>
          <p>
            Thus, "wrapping with a linen" had been the internation industry
            standard until CoverCoInc's inventor/founder/co-owner Breck Johnson
            and core staff began a twenty-year expedition to resolve that
            specific issue. Along the way, CoverCo Inc. has developed and
            redesigned what is now the <strong>Giorgia Armani</strong> of custom
            covers. Our covers are built to fit specific products with specific
            patterns, instead of using generic sizes, spandex or sloppily draped
            linens.
          </p>
          <p>
            CoverCo Inc's main focus has been to efficiently design, build with
            quality fabrics, and brand primarily with embroidered logos. We have
            sourced the finest fabrics for aesthetic covers for ballrooms, pool
            areas, lobbies, and concession areas, padded fabrics for storage, as
            well as pads for use in fine dining establishments. We even have a
            disposable line!
          </p>
          <div className='usa_logo'>
            <Image
              src='/images/usa_stamp.jpg'
              alt='Made in the USA'
              width={100}
              height={100}
            />
          </div>
        </div>

        <div className='row mt-100'>
          <div className='col-1-of-3 about_missionStatement'>
            <h1>quality</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              eum odit odio ipsum blanditiis molestiae ea explicabo! Voluptate
              suscipit quis sunt illo quo saepe! Earum neque ex eius laudantium
              deleniti!
            </p>
          </div>
          <div className='col-1-of-3 about_missionStatement'>
            <h1>reliability</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              obcaecati beatae voluptatem. Eligendi illum modi laborum itaque
              recusandae ducimus molestias cum laudantium a asperiores fugiat
              at, id fuga, repellendus tempore.
            </p>
          </div>
          <div className='col-1-of-3 about_missionStatement'>
            <h1>innovation</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
              inventore provident quia, consectetur consequatur vitae nemo vero
              ut iure odit neque quod officia accusamus totam error nesciunt
              cupiditate ratione ipsum.
            </p>
          </div>
        </div>
        <div className='about_photos'>
          <div className='about_photos-container'>
            <Image
              src='/images/slideshow2.jpg'
              alt='About image one'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className='about_photos-container'>
            <Image
              src='/images/slideshow1.jpg'
              alt='About image two'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className='about_photos-container'>
            <Image
              src='/images/slideshow2.jpg'
              alt='About image three'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
        <div className='team_container'>
          <h1>Our Team</h1>
          <div className='team_box-container'>
            <div className='team_box'>
              <div className='team_img-container'></div>
              <div className='team_info-container'>
                <p className='team_name'>Daniel Ward</p>
                <p className='team_title'>Web developer</p>
                <div className='social_icons'>
                  <a>
                    <i className='fab fa-twitter' />
                  </a>
                  <a>
                    <i className='fab fa-facebook' />
                  </a>
                  <a>
                    <i className='fab fa-linkedin-in' />
                  </a>
                </div>
                <p className='team_text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  eos sit exercitationem magnam rerum cum, deleniti possimus
                  repellat error aut!
                </p>
                <div className='team_contact-info'>
                  <div className='info_text'>
                    <a href='tel:+18009598527'>
                      <i className='fas fa-phone' />
                      1.800.959.8527
                    </a>
                  </div>
                  <div className='info_text'>
                    <a href='mailto:info@covercoinc.com'>
                      <i className='fas fa-envelope' />
                      info@covercoinc.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='team_box'>
              <div className='team_img-container'></div>
              <div className='team_info-container'>
                <p className='team_name'>Daniel Ward</p>
                <p className='team_title'>Web developer</p>
                <div className='social_icons'>
                  <a>
                    <i className='fab fa-twitter' />
                  </a>
                  <a>
                    <i className='fab fa-facebook' />
                  </a>
                  <a>
                    <i className='fab fa-linkedin-in' />
                  </a>
                </div>
                <p className='team_text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  eos sit exercitationem magnam rerum cum, deleniti possimus
                  repellat error aut!
                </p>
                <div className='team_contact-info'>
                  <div className='info_text'>
                    <a href='tel:+18009598527'>
                      <i className='fas fa-phone' />
                      1.800.959.8527
                    </a>
                  </div>
                  <div className='info_text'>
                    <a href='mailto:info@covercoinc.com'>
                      <i className='fas fa-envelope' />
                      info@covercoinc.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='team_box'>
              <div className='team_img-container'></div>
              <div className='team_info-container'>
                <p className='team_name'>Daniel Ward</p>
                <p className='team_title'>Web developer</p>
                <div className='social_icons'>
                  <a>
                    <i className='fab fa-twitter' />
                  </a>
                  <a>
                    <i className='fab fa-facebook' />
                  </a>
                  <a>
                    <i className='fab fa-linkedin-in' />
                  </a>
                </div>
                <p className='team_text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  eos sit exercitationem magnam rerum cum, deleniti possimus
                  repellat error aut!
                </p>
                <div className='team_contact-info'>
                  <div className='info_text'>
                    <a href='tel:+18009598527'>
                      <i className='fas fa-phone' />
                      1.800.959.8527
                    </a>
                  </div>
                  <div className='info_text'>
                    <a href='mailto:info@covercoinc.com'>
                      <i className='fas fa-envelope' />
                      info@covercoinc.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='team_box'>
              <div className='team_img-container'></div>
              <div className='team_info-container'>
                <p className='team_name'>Daniel Ward</p>
                <p className='team_title'>Web developer</p>
                <div className='social_icons'>
                  <a>
                    <i className='fab fa-twitter' />
                  </a>
                  <a>
                    <i className='fab fa-facebook' />
                  </a>
                  <a>
                    <i className='fab fa-linkedin-in' />
                  </a>
                </div>
                <p className='team_text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  eos sit exercitationem magnam rerum cum, deleniti possimus
                  repellat error aut!
                </p>
                <div className='team_contact-info'>
                  <div className='info_text'>
                    <a href='tel:+18009598527'>
                      <i className='fas fa-phone' />
                      1.800.959.8527
                    </a>
                  </div>
                  <div className='info_text'>
                    <a href='mailto:info@covercoinc.com'>
                      <i className='fas fa-envelope' />
                      info@covercoinc.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default about;
