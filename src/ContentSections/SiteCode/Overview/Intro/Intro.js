import { Container, Header } from "semantic-ui-react";
import Paragraph from "../../../../common/components/Paragraph/Paragraph";
import { paragraphs } from "./text";

export default function Intro() {
  return (
    <Container text>
      <Header as="h2" textAlign="center">
        Instructions
      </Header>
      <Paragraph content={paragraphs[1]} />
      <Paragraph content={paragraphs[2]} />
    </Container>
  );
}
