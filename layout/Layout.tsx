import Head from 'next/head';
import React from 'react';
import FooterComponent from '../components/FooterComponent';
import NavigationBar from '../components/NavigationBar';

const Layout = ({ children }: any) => {
  return (
    <div className='flex flex-col'>
      <Head>
        <title>Essay it!</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <NavigationBar />
      <main className='flex flex-1'>{children}</main>
      <FooterComponent />
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default Layout;
