import { Html, Head, Main, NextScript, DocumentInitialProps } from 'next/document';

import sitePrefix from '~/sitePrefix';

export default function TempDocument(_: DocumentInitialProps) {
  return (
    <Html lang='ko'>
      <Head>
        <meta charSet='utf-8' />

        {/* basic description */}
        <meta name='title' content='Tightly Coupled Losely Aligned'/ >
        <meta name='description' content='환영하는! 티시-엘-에이' />

        {/* open graph and facebook description */}
        <meta property='og:type' content='website'/>
        {/* TODO: 도메인 사서 링크 넣어두기 */}
        {/* <meta property='og:url' content='' /> */}
        <meta property='og:title' content='Tightly Coupled Losely Aligned' />
        <meta property='og:description' content='환영하는! 티시-엘-에이' />
        <meta property='og:image' content={`${sitePrefix}/images/og_description.jpg`} />
        
        {/* twitter description */}
        <meta property='twitter:card' content='환영하는! 티시-엘-에이' />
        {/* TODO: 도메인 사서 링크 넣어두기 */}
        {/* <meta property='twitter:url' content='' /> */}
        <meta property='twitter:title' content='Tightly Coupled Losely Aligned' />
        <meta property='twitter:description' content='환영하는! 티시-엘-에이' />
        <meta property='twitter:image' content={`${sitePrefix}/images/og_description.jpg`} />

        {/* favicon */}
        <link rel='manifest' href={`${sitePrefix}/site.webmanifest`} />
        <link rel='icon' type='image/x-icon' href={`${sitePrefix}/favicon.ico`} />
        <link rel='icon' type='image/png' sizes='32x32' href={`${sitePrefix}/favicon-32x32.png`} />
        <link rel='apple-touch-icon' sizes='180x180' href={`${sitePrefix}/apple-touch-icon.png`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
