import { paragraphs } from "./text";
import { Container } from "semantic-ui-react";


export default function Document({
  supplementalContent,
  setSupplementalContent,
  mainContent,
  setMainContent,
}) {
  return (
    <Container text style={{ textSize: "1.2em" }}>
      <p>Document</p>
    </Container>
  );
}
