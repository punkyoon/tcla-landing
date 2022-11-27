import styled from '@emotion/styled';
import { useState } from 'react';
import sitePrefix from '~/sitePrefix';

export default function Contents() {
  const [toggledGmg, setToggledGmg] = useState<boolean>(false);

  return (
    <Base>
      <TclaImage src={`${sitePrefix}/images/tightly_coupled_loosely_aligned.png`} />
      <TclaBearImage src={`${sitePrefix}/images/tcla_bear.png`} />
      <TclaMtmBlueImage src={`${sitePrefix}/images/tcla_mtm_blue.png`} />

      <CoolImage src={`${sitePrefix}/images/cool.png`} />
      <CoolTclaImage src={`${sitePrefix}/images/cool_tcla.png`} />

      <JejuWrapper>
        <JejuPositionWrapper>
          <JejuImage src={`${sitePrefix}/images/jeju.png`} />
          <JejuText>슉 슈슉 시 시발럼아 슈슉 슉 슉시 시벌람아 슉 시발 슈슉 슉 시 시발 슉 럼아 슈슉 시발 럼아 슉 슈슉 슉 슉 시 시발럼 아슉 슈슉 슉 시벌람아 슉슉 슈슉 시 시발럼아 슈슉 슉 슉시 시발럼아 슉 시발 슈슉 슉 시 시발 슉 럼아 슈슉 시발</JejuText>
        </JejuPositionWrapper>
      </JejuWrapper>

      <HoodieLink href='https://forms.gle/YRBcnZJb9JcHZYNz7' target='_blank' rel='noopener noreferrer'>
        <TclaHoodieImage src={`${sitePrefix}/images/tcla_hoodie_black.png`} />
      </HoodieLink>
      <WelcomeImage src={`${sitePrefix}/images/welcome.png`} />

      <Padding />
      
      <MtmLink href='https://docs.google.com/forms/d/e/1FAIpQLSeXu41Frc6yN6FQOgO7kkKs-h7KX_kN_a9QV9m3P8ivE_eJnA/viewform' target='_blank' rel='noopener noreferrer'>
        <TclaMtmBlackImage src={`${sitePrefix}/images/tcla_mtm_black.png`} />
      </MtmLink>

      <FestivalLink href='https://docs.google.com/forms/d/e/1FAIpQLSexWaGGA28Adw0I5CIxLsilsgnMmlzfpVA5LmHkIZs-OvuYNQ/viewform' target='_blank' rel='noopener noreferrer'>
        <HmgImage src={`${sitePrefix}/images/hmh.png`} />
      </FestivalLink>

      <GmgButton onClick={() => setToggledGmg(!toggledGmg)}>
        {toggledGmg ? (
          <RealGmgImage src={`${sitePrefix}/images/real_gmg.png`} />
        ) : (
          <GmgImage src={`${sitePrefix}/images/gmg.png`} />
        )}
      </GmgButton>
    </Base>
  );
}

const Base = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: radial-gradient(40% 40% at 50% 50%, #FF00D6 0%, #FFFFFF 100%);
`;
const TclaImage = styled.img`
  padding: 4.2rem 0 3rem 0;
`;
const TclaBearImage = styled.img`
  padding-bottom: 8.2rem;

  animation: rotate_bear 2.6s ease-out infinite;

  @keyframes rotate_bear {
    0% { transform: rotate(40deg); }
    50% { transform: rotate(-40deg); }
    100% { transform: rotate(40deg); }
  }
`;
const TclaMtmBlueImage = styled.img`
  position: absolute;
  right: 2rem;
  top: 11rem;

  animation: rotate_y 2s linear infinite;

  @keyframes rotate_y {
    0% { transform: rotateY(0deg); }
    50% { transform: rotateY(360deg); }
    100% { transform: rotateY(0deg); }
  }
`;
const CoolImage = styled.img`
  position: absolute;
  left: 4rem;
  top: 18rem;
  animation: rotate_image 0.5s linear infinite;
  transform-origin: 50% 50%;

  @keyframes rotate_image {
    100% {
      transform: rotate(-360deg);
    }
  }
`;
const CoolTclaImage = styled.img`
  position: absolute;
  left: 1rem;
  top: 31rem;
`;
const JejuWrapper = styled.div`
  position: absolute;
  top: 46rem;
  left: 0rem;

  animation: rtl_image 1s linear infinite;

  @keyframes rtl_image {
    0% { left: 0rem; top: 46rem; }
    50% { left: 15rem; top: 46rem; }
    100% { left: 0rem; top: 46rem; }
  }
`;
const JejuPositionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const JejuImage = styled.img`
  padding: 0 2rem;
`;
const JejuText = styled.p`
  color: #000000;
  font-style: italic;
  font-weight: 200;
  font-size: 1.5rem;
  max-width: 28rem;

  animation: fade_loop 3s linear infinite;

  @keyframes fade_loop {
    0%   { opacity:1; }
    50%  { opacity:0; }
    100% { opacity:1; }
  }
`;
const Padding = styled.div`
  height: 97rem;
`;
const HoodieLink = styled.a`
  position: absolute;
  right: 7rem;
  top: 44rem;
  border: 0.4rem solid #9cf7ed
`;
const TclaHoodieImage = styled.img``;
const WelcomeImage = styled.img`
  animation: rotate_image 6s linear infinite;
  transform-origin: 50% 50%;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 84rem;

  @keyframes rotate_image {
    100% {
      transform: rotate(360deg);
    }
  }
`;
const MtmLink = styled.a`
  position: absolute;
  left: 7rem;
  bottom: 48rem;
`;
const TclaMtmBlackImage = styled.img``;
const FestivalLink = styled.a`
  position: absolute;
  left: 0;
  bottom: 44rem;
`;
const HmgImage = styled.img``;
const GmgButton = styled.button`
  position: absolute;
  right: 2rem;
  bottom: 65rem;
  cursor: pointer;

  animation: bounce 3s ease-in infinite;

  @keyframes bounce {
    0%   { bottom: 65rem; }
    50%  { bottom: 40rem; }
    100% { bottom: 65rem; }
  }
`;
const RealGmgImage = styled.img`
  width: 17rem;
  height: 26rem;
  
  animation: height_bounce 3s linear infinite;

  @keyframes height_bounce {
    0%   { height: 26rem; }
    50%  { height: 10rem; }
    100% { height: 26rem; }
  }
`;
const GmgImage = styled.img`
  width: 17rem;
  height: 6rem;
`;