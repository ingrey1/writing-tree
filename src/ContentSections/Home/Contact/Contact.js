import "./Contact.css";
import { Header, Container, Grid } from "semantic-ui-react";
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
        <div className="copy-email-container">
          <CopyTextToClipboard text="ingrey1@gmail.com" />
        </div>
      </Grid.Row>
      <Grid.Row>
        <Header as="h4">Social Links</Header>
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
