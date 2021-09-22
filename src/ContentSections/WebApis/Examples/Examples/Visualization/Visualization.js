import { RedocStandalone } from "redoc";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import { paragraphs } from "./text";
import { Header } from "semantic-ui-react";
import document from "../BookHeroApiDocument";

export default function Visualization({
  supplementalContent,
  setSupplementalContent,
  mainContent,
  setMainContent,
}) {
  return (
    <div>
      <Header as="h2">Swagger UI</Header>
      <SwaggerUI spec={document} />
      <div style={{ height: "10vh" }}></div>
      <Header as="h2">Redoc UI</Header>
      <RedocStandalone specUrl={document} />
    </div>
  );
}
