import { Container, Header } from "semantic-ui-react";
import Paragraph from "../../../common/components/Paragraph/Paragraph";
import { paragraphs } from "./text";
function Intro() {
  return (
    <Container className="introduction-container" text>
      <Header as="h3" textAlign="center">
        The Parable of the Forgotten Documentation
      </Header>
      <p>Maybe have some images done by shawnlart</p>
      {Object.keys(paragraphs).map((paragraphKey, index) => (
        <Paragraph key={index} content={paragraphs[paragraphKey]} />
      ))}
      <p>Maybe have some images done by shawnlart</p>
    </Container>
  );
}

export default Intro;
