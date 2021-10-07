import styled from "styled-components";
export { Card, Title, Text, Div, Image, Container };

const Card = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => reverse};
  justify-content: space-evenly;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;
const Div = styled.div``;
const Container = styled.div``;

const Title = styled.h2`
  font-weight: 700;
  color: #000;
  letter-spacing: 1.2;
  line-height: 1.1;
  font-size: 32px;
  @media (max-width: 992px) {
    padding: 25px 0;
    text-align: center;
  }
`;
const Text = styled.p`
  font-size: 24px;
  color: #000;
  font-weight: 400;
  letter-spacing: 1.2;
  line-height: 1.4;

  @media (max-width: 992px) {
    text-align: center;
    font-size: 20px;
  }
  @media (max-width: 540px) {
    font-size: 16px;
  }
  @media (max-width: 375px) {
    font-size: 14px;
  } ;
`;

const Image = styled.img`
  max-width: 650px;

  @media (max-width: 540px) {
    width: 450px;
  }
  @media (max-width: 375px) {
    width: 355px;
  } ;
`;
