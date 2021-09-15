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

const codeBlock1LinesToHighlight = "4";

export default function Css() {
  return (
    <Container text style={{ textSize: "1.2em" }}>
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
        Adding The CSS File
      </Header>
      <Paragraph content={paragraphs[11]} />
      <Grid
        textAlign="center"
        style={{ marginTop: "10px", marginBottom: "10px" }}
      >
        <Grid.Column>
          <Message floating compact>
            <p>
              cat-kingdom.css{"   "}
              <CopyTextToClipboard
                inverted
                text="cat-kingdom.css"
                iconSize="small"
                buttonSize="small"
              />
            </p>
          </Message>
        </Grid.Column>
      </Grid>
      <Paragraph content={paragraphs[12]} />
      <Segment>
        <CodeBlock
          language="css"
          text={paragraphs[13]}
          highlight={codeBlock1LinesToHighlight}
        />
      </Segment>
      <Divider />
      <Header as="h2" textAlign="center">
        Try Out Some Interactive Styling
      </Header>
      <Paragraph content={paragraphs[7]} />
      <CodeBlock language="html" text={paragraphs[8]} />
      <Paragraph content={paragraphs[9]} />
      <Segment>
        <CodeBlock language="css" text={paragraphs[10]} />
        <CopyTextToClipboard
          inverted
          text={paragraphs[10]}
          iconSize="small"
          buttonSize="small"
        />
      </Segment>
      <CssContainer html={paragraphs[8]} />
    </Container>
  );
}
