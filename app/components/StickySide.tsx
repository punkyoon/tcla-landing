import styled from '@emotion/styled';
import sitePrefix from '~/sitePrefix';

export default function StickySide() {
  const onClickCatButton = () => {
    const catAudio = new Audio(`${sitePrefix}/audio/mew.mp3`);
    catAudio.play();
  };

  return (
    <Base>
      <CatButton onClick={onClickCatButton}>
        <CatImage src={`${sitePrefix}/images/cat.png`} />
      </CatButton>
    </Base>
  );
}

const Base = styled.div`
  position: absolute;
  left: 0;
  top: 50rem;
`;
const CatButton = styled.button`
  cursor: pointer;
  position: fixed;
`;
const CatImage = styled.img``;
