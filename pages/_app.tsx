import type {AppContext, AppProps} from 'next/app';
import App from 'next/app';
import React from 'react';
import type {ILayoutProps} from '@/components/layout';
import Layout from '@/components/layout';
import Head from 'next/head';
import {getIsMobile, getIsSupportWebp} from '@/utils';
import {ThemeContextProvider} from '@/stores/theme';
import {UserAgentProvider} from '@/stores/userAgent';
import {LanguageContextProvider} from '@/stores/language';
import './global.scss';

export interface IComponentProps {
  isMobile?: boolean;
  isSupportWebp?: boolean;
}

const MyApp = (data: AppProps & ILayoutProps & IComponentProps): JSX.Element => {
  const {Component, pageProps, navbarData, footerData, isMobile, isSupportWebp} = data;
  return (
    <div>
      <Head>
        <title>IoTSharp 开源产品矩阵</title>
        <meta name="description" content="IoTSharp 开源产品门面，介绍 IoTSharp、IoTCoWork、IoTEdge、IoTEmbedded、协议 SDK 和开发者工具。"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <LanguageContextProvider>
        <ThemeContextProvider>
          <UserAgentProvider>
            <Layout navbarData={navbarData} footerData={footerData}>
              <Component {...pageProps} isMobile={isMobile} isSupportWebp={isSupportWebp}/>
            </Layout>
          </UserAgentProvider>
        </ThemeContextProvider>
      </LanguageContextProvider>
    </div>
  );
};

MyApp.getInitialProps = async (context: AppContext) => {
  const pageProps = await App.getInitialProps(context);

  return {
    ...pageProps,
    isMobile: getIsMobile(context),
    isSupportWebp: getIsSupportWebp(context),
  };
};

export default MyApp;
