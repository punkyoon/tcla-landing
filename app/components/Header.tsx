import styled from '@emotion/styled';
import sitePrefix from '~/sitePrefix';

export default function Header() {
  return (
    <Base>
      <HeaderImageWrapper>
        <HeaderImage src={`${sitePrefix}/images/tcla_logo.png`} alt='TCLA logo' />
      </HeaderImageWrapper>
    </Base>
  );
}

const Base = styled.div`
  align-items: center;
  border-bottom: 1px solid #eeeeee;
  display: flex;
  justify-content: center;
  padding: 1.5rem 0rem;
`;
const HeaderImageWrapper = styled.div`
  height: 3rem;
  width: 5rem;
`;
const HeaderImage = styled.img`
  height: 100%;
  width: 100%;
`;
