import { Container, Header } from "semantic-ui-react";
import Paragraph from "../../../common/components/Paragraph/Paragraph";
import { paragraphs } from "./text";
function Intro() {
  return (
    <Container className="introduction-container" text>
      <Header as="h3">The Parable of the Forgotten API Documentation</Header>
      <i>--insert aliens invading image--</i>
      <Paragraph content={paragraphs[1]} />
      <i>--Reptile hunkered over feeding vat image--</i>
      <Paragraph content={paragraphs[2]} />
      <i>--mega organization, led by council image--</i>
      <Paragraph content={paragraphs[3]} />
      <i>--gozilla gravity fluctuator weapon image--</i>
      <b>To be continued…</b>
    </Container>
  );
}

export default Intro;
