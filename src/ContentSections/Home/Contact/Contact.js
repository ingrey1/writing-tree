import "./Contact.css";
import { Header, Container, Grid, Message } from "semantic-ui-react";
import IconButtonLink from "../../../common/components/IconButtonLink";
import { linkedinUrl } from "../../../common/constants";
import CopyTextToClipboard from "../../../common/components/CopyTextToClipboard/CopyTextToClipboard";

function Contact() {
  return (
    <Container text textAlign="center">
      <Header as="h3">Contact</Header>
      <Grid.Row className="email-row">
        <Header as="h4" name="email">
          Email
        </Header>
        <Message compact style={{ marginBottom: "10px" }}>
          ingrey1@gmail.com{" "}
          <CopyTextToClipboard
            inverted
            buttonColor="white"
            buttonSize="small"
            iconSize=""
            text="ingrey1@gmail.com"
          />
        </Message>
      </Grid.Row>
      <Grid.Row>
        <Header as="h3">Social Links</Header>
        <IconButtonLink
          inverted
          iconName="linkedin in"
          url={linkedinUrl}
          buttonColor="white"
          buttonSize="large"
          iconSize="large"
        />
      </Grid.Row>
    </Container>
  );
}

export default Contact;
