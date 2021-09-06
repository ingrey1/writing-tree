import { Header, Container, Icon, Button } from "semantic-ui-react";
import CopyTextToClipboard from "../../../common/components/CopyTextToClipboard/CopyTextToClipboard";

function Contact() {
  return (
    <Container text textAlign="center">
      <Header as="h3">Contact</Header>
      Email: <CopyTextToClipboard text="ingrey1@gmail.com" />
      <div>
        <Button
          style={{ marginTop: "10px" }}
          as="a"
          target="_blank"
          href="https://www.linkedin.com/in/ingrey1/"
          color="teal"
        >
          <Icon name="linkedin in" size="huge"></Icon>
        </Button>
      </div>
    </Container>
  );
}

export default Contact;
