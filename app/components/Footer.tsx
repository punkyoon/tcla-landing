import styled from '@emotion/styled';

export default function Footer() {
  return (
    <Base>
      <Title>(주)티씨엘에이{'\n'}Tightly Coupled Loosely Aligned</Title>
      <Address>서울시 강남구 테헤란로 98길 8  | 대표이사 : 최재영  |  개인정보책임자 : 박형기 | 사업자번호 : 100-18-01818 | 통신판매업신고 : 제2018-서울강남-1818</Address>
      <CustomerServiceLink href='https://open.kakao.com/o/saXuxoQe' target='_blank' rel='noopener noreferrer'>고객센터</CustomerServiceLink>
      <Copyright>Copyright © TCLA, Inc. All Rights Reserved.</Copyright>
    </Base>
  );
}

const Base = styled.div`
  background-color: #222222;
  padding: 4rem 3rem;
`;
const Title = styled.h2`
  color: #DADADA;
  font-style: normal;
  font-weight: 700;
  font-size: 2.5rem;
  letter-spacing: -0.01em;
  white-space: break-spaces;
`;
const Address = styled.p`
  color: #A1A1A1;
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  letter-spacing: -0.01em;
`;
const CustomerServiceLink = styled.a`
  align-items: center;
  border: 1px solid #DADADA;
  border-radius: 8px;
  color: #A1A1A1;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2.2rem 2.4rem;
  font-style: normal;
  font-weight: 400;
  font-size: 2.1rem;
  text-align: center;
  letter-spacing: -0.01em;
  width: 100%;
`;
const Copyright = styled.p`
  color: #696969;
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  letter-spacing: -0.01em;
`;