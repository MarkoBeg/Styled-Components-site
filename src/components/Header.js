import { ThemeProvider } from "styled-components";
import React from "react";
import {
  Container,
  Nav,
  Button,
  Logo,
  Flex,
  Image,
  Paragraph,
  Title,
} from "./styles/Header";
import logo from "./images/logo.svg";
import illustration from "./images/illustration-mockups.svg";

const theme = {
  colors: {
    header: "ebfbfff",
  },
  desktop: "992px",
  mobile: "375px",
};

export default function Header() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container>
          <Nav>
            <Logo src={logo} alt=""></Logo>
            <Button size="15px" width="200px">
              Try it
            </Button>
          </Nav>
          <Flex>
            <div>
              <Title> Build The Community Your Fans Will Love</Title>
              <Paragraph>
                Huddle re-imagines the way we build communities. You have a
                voice, but so does your audience. Create connections with your
                users as you engage in genuine discussion.
              </Paragraph>
              <Button bg="#ff0099" color="#fff" width="250px">
                Get Started For Free
              </Button>
            </div>
            <Image src={illustration} alt=""></Image>
          </Flex>
        </Container>
      </ThemeProvider>
    </div>
  );
}
