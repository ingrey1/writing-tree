import { Container, Header } from "semantic-ui-react";
import { content } from "./text";
import Paragraph from "../../../../common/components/Paragraph/Paragraph";

export default function VisualizationTool() {
  return (
    <Container text style={{ fontSize: "1.2em" }}>
      <Header as="h2" textAlign="center">
        Introduction
      </Header>
      <Paragraph content={content.introduction[1]} />
      <Paragraph content={content.introduction[2]} />
      <Paragraph content={content.introduction[3]} />
      <Paragraph content={content.introduction[4]} />
    </Container>
  );
}
