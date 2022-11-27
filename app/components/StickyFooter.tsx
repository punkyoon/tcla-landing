import styled from '@emotion/styled';
import sitePrefix from '~/sitePrefix';

export default function StickyFooter() {
  return (
    <Base>
      <ImageWrapper>
        <UhImage src={`${sitePrefix}/images/uh.png`} />
        <ChiledImage src={`${sitePrefix}/images/child.png`} />
      </ImageWrapper>
    </Base>
  );
}

const Base = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  right: 0;
`;
const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const UhImage = styled.img``;
const ChiledImage = styled.img``;
