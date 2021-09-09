import { Container, Header } from "semantic-ui-react";
import Paragraph from "../../../../../common/components/Paragraph/Paragraph";
import { paragraphs } from "./text";

export default function Intro() {
  return (
    <Container text>
      <Header as="h2" textAlign="center">
        Instructions
      </Header>
      <p>
        The content you're viewing now on this site was built with React, a
        powerful and popular frontend Javascript framework. In the "React
        Primer" tab, I will go over some concepts and code that will be crucial
        to understanding the implementation details found in the "Frontend"
        content section.
      </p>
      <p>
        Before tackling the "React Primer" tab, please make sure you have a
        basic understanding of HTML, CSS, and Javascript. If you're not ready
        yet, check out the "Resources" tab for some resources to help you
        prepare.
      </p>
    </Container>
  );
}
