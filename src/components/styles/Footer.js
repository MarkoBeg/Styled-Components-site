import styled from "styled-components";
export { Div, Container, Ul, List, Text };

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme: { color } }) => color.footer};
  justify-content: space-around;

  @media (max-width: ${({ theme: { desktop } }) => desktop}) {
    flex-direction: column;
    text-align: center;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ width }) => width};
`;

const Ul = styled.ul``;

const List = styled.li`
  display: block;
  padding: 8px 0;
`;

const Text = styled.a`
  font-size: 16px;
  color: #fff;
  text-decoration: none;
  letter-spacing: 1px;
  font-weight: 400;
  cursor: pointer;
  @media (max-width: ${({ theme: { mobile } }) => mobile}) {
    flex-direction: column;
    text-align: center;
    font-size: 14px;
  }
`;
