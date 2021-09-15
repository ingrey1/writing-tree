import { Container, Header, Segment } from "semantic-ui-react";
import IconButtonLink from "../../../../common/components/IconButtonLink";

export default function Credits() {
  return (
    <Container text>
      <Header as="h2" style={{ color: "teal", marginTop: "20px" }}>
        Story Art
      </Header>
      <Segment>
        <Header as="h3" style={{ color: "teal", marginTop: "20px" }}>
          Studio Abiboge
        </Header>
        <p style={{ fontSize: "1.2em" }}>
          If you'd like to commission some artwork from them, feel free to click
          here:
          <IconButtonLink
            url="https://www.fiverr.com/studioabiboge"
            iconName="heart"
            inverted
            buttonColor="white"
          />
        </p>
      </Segment>
    </Container>
  );
}
