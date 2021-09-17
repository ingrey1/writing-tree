import { Container, Header } from "semantic-ui-react";
import Paragraph from "../../../common/components/Paragraph/Paragraph";
import "./Intro.css";
import { paragraphs } from "./text";
function Intro() {
  return (
    <Container
      className="introduction-container"
      text
      style={{ textSize: "1.2em" }}
    >
      <Header as="h3" textAlign="center">
        The Parable of the Forgotten Documentation
      </Header>
      {Object.keys(paragraphs).map((paragraphKey, index) => (
        <Paragraph key={index} content={paragraphs[paragraphKey]} />
      ))}
    </Container>
  );
}

export default Intro;
