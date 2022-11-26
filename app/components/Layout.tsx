import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';
import Footer from './Footer';

import Header from './Header';

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <Base>
      <Header />
      {children}
      <Footer />
    </Base>
  )
}

const Base = styled.div`
  margin: 0 auto;
  max-width: 70rem;
  width: 100%;
`;
