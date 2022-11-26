import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../public/styles/global.css';

export default function TempApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, user-scalable=no, initial-scale=1, viewport-fit=cover' />
        <meta name='description' content='TCLA 랜딩페이지' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
