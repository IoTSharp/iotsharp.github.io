import {Head, Html, Main, NextScript} from 'next/document';
import Script from 'next/script';
import React from 'react';

export default function Document() {
  return (
    <Html lang="zh-CN">
      <Head/>
      <body>
      <Main/>
      <NextScript/>
      <Script id="theme-script" strategy="beforeInteractive">
        {`const item = localStorage.getItem('theme') || 'light';
            localStorage.setItem('theme', item);
            document.getElementsByTagName('html')[0].dataset.theme = item;`}
      </Script>
      </body>
    </Html>
  );
}
