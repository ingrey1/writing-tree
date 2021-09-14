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
import CssContainer from "../../../../../common/components/CssConsole/CssContainer";
import CopyTextToClipboard from "../../../../../common/components/CopyTextToClipboard/CopyTextToClipboard";
import { CodeBlock } from "@atlaskit/code";
import AnimalKingdomTree from "./AnimalKingdomTree";
import "./Css.css";
import domExample from "./images/chrome-dom-example.png";

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
      <CopyTextToClipboard
        inverted
        text={paragraphs[3]}
        iconSize="small"
        buttonSize="small"
      />
      <Paragraph content={paragraphs[4]} />
      <AnimalKingdomTree />
      <Paragraph content={paragraphs[5]} />
      <Image src={domExample} />
      <Divider />
      <Paragraph content={paragraphs[6]} />
      <Divider />
      <Header as="h2" textAlign="center">
        Multiple Ways to Style Elements
      </Header>
      <Paragraph content={paragraphs[7]} />
      <CodeBlock language="html" text={paragraphs[8]} />
      <CssContainer />
    </Container>
  );
}
