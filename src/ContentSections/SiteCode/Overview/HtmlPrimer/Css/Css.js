import { paragraphs } from "./text";
import Paragraph from "../../../../../common/components/Paragraph/Paragraph";
import {
  Header,
  Container,
  List,
  Grid,
  Message,
  Icon,
  Button,
  Segment,
  Image,
  Divider,
  ListItem,
  ListContent,
} from "semantic-ui-react";
import { CodeBlock } from "@atlaskit/code";
import "./Css.css";

export default function Css() {
  return (
    <Container>
      <Header as="h2" textAlign="center">
        Introduction
      </Header>
      <Paragraph content={paragraphs[1]} />
      <Divider />
      <Header as="h2" textAlign="center">
        The Structure of The Animal Kingdom
      </Header>
      <Paragraph content={paragraphs[2]} />
      <CodeBlock language="html" text={paragraphs[3]} />
      <Divider />
    </Container>
  );
}
