import React from "react";
import { ThemeProvider } from "styled-components";
import { Div, Container, List, Ul, Text } from "./styles/Footer";

const theme = {
  color: {
    footer: "#003333",
  },
  desktop: "992px",
  tablet: "768px",
  mobile: "375px",
};

export default function Footer() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container>
          <Div width="250px">
            <Ul>
              <List>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </Text>
              </List>
              <List>
                <Text>+1-543-123-4567</Text>
              </List>
              <List>
                <Text href="mailTo:fake@gmail.com">example@huddle.com</Text>
              </List>
            </Ul>
          </Div>
          <Div>
            <Ul>
              <List>
                <Text>About Us</Text>
              </List>
              <List>
                <Text>What We Do</Text>
              </List>
              <List>
                <Text>FAQ</Text>
              </List>
            </Ul>
          </Div>
          <Div>
            <Ul>
              <List>
                <Text>Career</Text>
              </List>
              <List>
                <Text>Blog</Text>
              </List>
              <List>
                <Text> Contact Us</Text>
              </List>
            </Ul>
          </Div>
        </Container>
      </ThemeProvider>
    </div>
  );
}
