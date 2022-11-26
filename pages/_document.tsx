import { Html, Head, Main, NextScript, DocumentInitialProps } from 'next/document';

import sitePrefix from '~/sitePrefix';

export default function TempDocument(_: DocumentInitialProps) {
  return (
    <Html lang='ko'>
      <Head>
        <meta charSet='utf-8' />

        {/* basic description */}
        <meta name='title' content='Welcome TCLA'/ >
        <meta name='description' content='Welcome ! 환영하는 TCLA !' />

        {/* open graph and facebook description */}
        <meta property='og:type' content='website'/>
        {/* TODO: 도메인 사서 링크 넣어두기 */}
        {/* <meta property='og:url' content='' /> */}
        <meta property='og:title' content='Welcome TCLA' />
        <meta property='og:description' content='Welcome ! 환영하는 TCLA !' />
        <meta property='og:image' content={`${sitePrefix}/images/og_description.png`} />
        
        {/* twitter description */}
        <meta property='twitter:card' content='TCLA 환영하는 welcome' />
        {/* TODO: 도메인 사서 링크 넣어두기 */}
        {/* <meta property='twitter:url' content='' /> */}
        <meta property='twitter:title' content='Welcome TCLA' />
        <meta property='twitter:description' content='Welcome ! 환영하는 TCLA !' />
        <meta property='twitter:image' content={`${sitePrefix}/images/og_description.png`} />

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
