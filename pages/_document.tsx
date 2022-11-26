import { Html, Head, Main, NextScript, DocumentInitialProps } from 'next/document';

import sitePrefix from '~/sitePrefix';

export default function TempDocument(_: DocumentInitialProps) {
  return (
    <Html lang='ko'>
      <Head>
      <meta charSet='utf-8' />
        <meta name='description' content='TCLA 랜딩페이지' />

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
