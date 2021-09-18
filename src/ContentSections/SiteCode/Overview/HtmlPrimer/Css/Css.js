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
import animalKingdom1 from "./images/animal-kingdom-html1.png";

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
      <Message compact style={{ backgroundColor: "teal" }}>
        <AnimalKingdomTree />
      </Message>
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
      <CodeBlock
        language="css"
        text={paragraphs[13]}
        highlight={codeBlock1LinesToHighlight}
      />
      <Paragraph content={paragraphs[14]} />
      <List bulleted style={{ fontSize: "1.3em" }}>
        <List.Item>Makes the code messy and hard to read</List.Item>
        <List.Item>
          Introduces opportunity for more error as you have to add the style
          properties, and not just an identifier
        </List.Item>
        <List.Item>Changing the styles can take a lot more time</List.Item>
      </List>
      <Divider />
      <Header as="h2" textAlign="center">
        Different Ways To Style An HTML Element
      </Header>
      <Header as="h3" textAlign="center">
        Styling An Element By Id
      </Header>
      <Paragraph content={paragraphs[16]} />
      <CodeBlock language="html" text={paragraphs[17]} />
      <Paragraph content={paragraphs[18]} />
      <CodeBlock language="css" text={paragraphs[19]} />
      <List bulleted style={{ fontSize: "1.3em" }}>
        <List.Item>
          The "#" means that the identifier that follows is an 'id' attribute
        </List.Item>
        <List.Item>
          The curly braces "&#123;&#125;" contain the CSS properties you want to
          apply. You should have at least one CSS property inside these braces.
        </List.Item>
        <List.Item>
          "color" is the name of the CSS property, its value is "teal"
        </List.Item>
        <List.Item>
          Always add a semicolon ";" after specifying the property and its value
        </List.Item>
      </List>
      <Header as="h3" textAlign="center">
        Styling An Element By Type
      </Header>
      <Paragraph content={paragraphs[20]} />
      <CodeBlock language="html" text={paragraphs[21]} />
      <Paragraph content={paragraphs[22]} />
      <CodeBlock language="css" text={paragraphs[23]} />
      <Paragraph content={paragraphs[28]} />
      <Header as="h3" textAlign="center">
        Styling An Element By Class
      </Header>
      <Paragraph content={paragraphs[24]} />
      <CodeBlock language="html" text={paragraphs[25]} />
      <Paragraph content={paragraphs[26]} />
      <CodeBlock language="css" text={paragraphs[27]} />
      <Paragraph content={paragraphs[29]} />
      <Paragraph content={paragraphs[30]} />
      <CodeBlock language="css" text={paragraphs[31]} />
      <CopyTextToClipboard
        inverted
        text={paragraphs[31]}
        iconSize="small"
        buttonSize="small"
      />
      <Paragraph content={paragraphs[32]} />
      <Paragraph content={paragraphs[33]} />
      <Image src={animalKingdom1} />

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
