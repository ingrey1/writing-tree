import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import { paragraphs } from "./text";
import { Container } from "semantic-ui-react";
import document  from "../BookHeroApiDocument";

export default function Visualization({
  supplementalContent,
  setSupplementalContent,
  mainContent,
  setMainContent,
}) {
  return (
    <Container text style={{ textSize: "1.2em" }}>
      <SwaggerUI spec={document} />
    </Container>
  );
}
