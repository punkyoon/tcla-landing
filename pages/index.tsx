import styled from '@emotion/styled';
import Image from 'next/image';
import sitePrefix from '~/sitePrefix';

export default function IndexPage() {
  return (
    <Base>
      <h1>안녕하세요</h1>
      <Image src={`${sitePrefix}/images/cool.png`} alt='멋잇다' width='120' height='50' />
    </Base>
  );
}

const Base = styled.div``;
