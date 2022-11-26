import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <Base>{children}</Base>
  )
}

const Base = styled.div``;
