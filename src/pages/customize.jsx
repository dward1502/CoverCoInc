import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
const customize = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous"/> 
      </Head>
      <Layout>
        <h1>customize</h1>
      </Layout>
    </div>
  );
};

export default customize;
