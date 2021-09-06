import { Header, Container } from "semantic-ui-react";
import IconButtonLink from "../../../common/components/IconButtonLink";
import { linkedinUrl } from "../../../common/constants";
import CopyTextToClipboard from "../../../common/components/CopyTextToClipboard/CopyTextToClipboard";

function Contact() {
  return (
    <Container text textAlign="center">
      <Header as="h3">Contact</Header>
      Email: <CopyTextToClipboard text="ingrey1@gmail.com" />
      <div>
        <IconButtonLink iconName="linkedin in" url={linkedinUrl} size="huge" />
      </div>
    </Container>
  );
}

export default Contact;
