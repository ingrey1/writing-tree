import { Container, Grid, Header } from "semantic-ui-react";
import Paragraph from "../../../common/components/Paragraph/Paragraph";
import { paragraphs } from "./text";
function Intro() {
  return (
    <Container className="introduction-container" text>
      <Header as="h3" textAlign="center">
        The Parable of the Forgotten API Documentation
      </Header>
      {Object.keys(paragraphs).map((paragraphKey, index) => (
        <Paragraph key={index} content={paragraphs[paragraphKey]} />
      ))}
    </Container>
  );
}

export default Intro;
