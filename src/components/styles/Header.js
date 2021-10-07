import styled from "styled-components";

export { Container, Nav, Logo, Button, Flex, Image, Paragraph, Title };

const Container = styled.div`
  background-color: ${({ theme: { colors } }) => colors.header};
  padding: 40px 0;
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: ${({ theme: { mobile } }) => mobile}) {
    flex-direction: column;
    margin-top: 55px;
  }
`;
const Logo = styled.img``;

const Button = styled.div`
  border-radius: 50px;
  border: none !important;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  padding: ${({ size }) => size || "15px 60px"};
  background-color: ${({ bg }) => bg || "fff"};
  color: ${({ color }) => color || "#333"};
  width: ${(props) => props.width};

  &:hover {
    opacity: 0.9;
    transform: scale(0.9);
  }

  @media (max-width: ${({ theme: { mobile } }) => mobile}) {
    flex-direction: column;
    text-align: center;
    font-size: 14px;
    margin-top: 15px;
  }
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.desktop}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 0;
    margin: 0 auto;
  }
`;

const Image = styled.img`
  max-width: 650px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  @media (max-width: 992px) {
    width: 650px;
  }
  @media (max-width: 540px) {
    width: 450px;
  }
  @media (max-width: 375px) {
    width: 370px;
  }
`;

const Paragraph = styled.p`
  font-weight: 400;
  color: #000;
  font-size: 18px;
  padding: 10px 0;
  @media (max-width: 992px) {
    text-align: center;
    margin: 0 auto;
    font-size: 20px;
  }
`;

const Title = styled.h1`
  color: #000;
  font-weight: 700;

  @media (max-width: 992px) {
    text-align: center;
    margin: 0 auto;
    font-size: 32px;
  }
`;
