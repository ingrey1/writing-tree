import { Header, Container } from "semantic-ui-react";
import CopyTextToClipboard from "../../../common/components/CopyTextToClipboard/CopyTextToClipboard";

function Contact() {
  return (
    <Container text textAlign="center">
      <Header as="h3">Contact</Header>
      Email:
      <CopyTextToClipboard text="ingrey1@gmail.com" />
    </Container>
  );
}

export default Contact;
