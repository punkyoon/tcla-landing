import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../public/styles/global.css';

export default function TempApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, user-scalable=no, initial-scale=1, viewport-fit=cover' />
        <meta name='description' content='환영하는! 티시-엘-에이' />

        <title>Tightly Coupled Losely Aligned</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
