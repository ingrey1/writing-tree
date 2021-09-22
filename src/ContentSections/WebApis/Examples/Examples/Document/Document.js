import { paragraphs } from "./text";
import { Container } from "semantic-ui-react";
import { CodeBlock } from "@atlaskit/code";
import raw from "raw.macro";

const document = raw("../BookHeroApiDocument");

export default function Document({
  supplementalContent,
  setSupplementalContent,
  mainContent,
  setMainContent,
}) {
  return (
    <Container text style={{ textSize: "1.2em" }}>
      <CodeBlock language="json" text={document} />
    </Container>
  );
}
