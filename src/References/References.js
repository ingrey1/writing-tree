import { Container, Header } from "semantic-ui-react";
import Reference from "../common/components/Reference/Reference";
import { home } from "../common/data/references";

export default function References() {
  return (
    <Container text textAlign="center">
      <Header as="h2">References</Header>
      <Header as="h3">Methodology</Header>
      <Header as="h4">Fun Facts</Header>
      <Reference
        data={home.methodology.funFacts.calories}
        showContext
        showBorder
      />
    </Container>
  );
}
