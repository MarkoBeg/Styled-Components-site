import React from "react";
import { Card, Title, Text, Div, Image, Container } from "./styles/Body";
import image1 from "./images/illustration-grow-together.svg";
import image2 from "./images/illustration-flowing-conversation.svg";
import image3 from "./images/illustration-your-users.svg";

export default function Body() {
  const media = {
    desktop: "992px",
    tablet: "768px",
    mobile: "375px",
  };
  return (
    <Container>
      <Card media={media}>
        <Div>
          <Title>Grow Together</Title>
          <Text>
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.
          </Text>
        </Div>
        <Image src={image1}></Image>
      </Card>
      <Card reverse="row-reverse">
        <Div>
          <Title> Flowing Conversations</Title>
          <Text>
            You wouldn't paginate a conversation in real life, so why do it
            online? Our threads have just-in-time loading for a more natural
            flow.
          </Text>
        </Div>
        <Image src={image2}></Image>
      </Card>
      <Card>
        <Div>
          <Title>Your Users</Title>
          <Text>
            It takes no time at all to integrate Huddle with your app's
            authentication solution. This means, once signed in to your app,
            your users can start chatting immediately.
          </Text>
        </Div>
        <Image src={image3}></Image>
      </Card>
    </Container>
  );
}
