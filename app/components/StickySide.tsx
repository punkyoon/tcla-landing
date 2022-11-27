import styled from '@emotion/styled';
import sitePrefix from '~/sitePrefix';

export default function StickySide() {
  return (
    <Base>
      <CatImage src={`${sitePrefix}/images/cat.png`} />
    </Base>
  );
}

const Base = styled.div`
  position: absolute;
  left: 0;
  top: 50rem;
`;
const CatImage = styled.img`
  position: fixed;
`;
