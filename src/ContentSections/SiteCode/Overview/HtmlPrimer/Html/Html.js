import { paragraphs } from "./text";
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
} from "semantic-ui-react";
import { CodeBlock } from "@atlaskit/code";
import {
  visualCodeStudioUrl,
  sublimeTextUrl,
  htmlAccessibilityUrl,
} from "../../../../../common/constants";
import IconButtonLink from "../../../../../common/components/IconButtonLink";
import Paragraph from "../../../../../common/components/Paragraph/Paragraph";
import IconButtonContentLink from "../../../../../common/components/IconButtonContentLink";
import codeblock1Image from "./images/codeblock1.png";
import codeblock2Image from "./images/codeblock2.png";
import codeblock3Image from "./images/codeblock3.png";

const codeBlock1LinesToHighlight = "6,9,12,13";
const codeBlock2LinesToHighlight = "12";
const codeBlock3LinesToHighlight = "2,5, 7-8";

export default function Html({
  supplementalContent,
  setSupplementalContent,
  mainContent,
  setMainContent,
}) {
  return (
    <Container>
      <Header as="h2" textAlign="center">
        Introduction
      </Header>
      <Paragraph content={paragraphs[1]} />
      <Divider />
      <Header as="h2" textAlign="center">
        Requirements
      </Header>
      <Paragraph content={paragraphs[2]} />
      <Grid>
        <Grid.Column textAlign="center">
          <List>
            <List.Item>
              <b>Visual Code Studio</b>
              <IconButtonLink
                url={visualCodeStudioUrl}
                iconName="cut"
                inverted
                buttonColor="white"
                iconColor="teal"
              />
            </List.Item>
            <List.Item>
              <b>Sublime Text</b>
              <IconButtonLink
                url={sublimeTextUrl}
                iconName="cut"
                buttonColor="white"
                inverted
                iconColor="teal"
              />
            </List.Item>
          </List>
        </Grid.Column>
      </Grid>
      <Divider />
      <Header as="h2" textAlign="center">
        Creating The Cat Kingdom
      </Header>
      <p>
        Go ahead and open a new document in your text editor and save it as
        follows.
      </p>

      <Grid textAlign="center">
        <Grid.Column>
          <Message floating compact>
            <p>
              cat-kingdom.html{"   "}
              <Button
                inverted
                onClick={() => {
                  navigator.clipboard.writeText("cat-kingdom.html");
                }}
              >
                <Icon color="teal" name="copy"></Icon>
              </Button>
            </p>
          </Message>
        </Grid.Column>
      </Grid>
      <Header as="h3" textAlign="center">
        The Starter Code
      </Header>
      <p></p>
      <Paragraph content={paragraphs[3]} />
      <Segment>
        <CodeBlock
          language="html"
          text={paragraphs[4]}
          highlight={codeBlock1LinesToHighlight}
        />
        <Button
          inverted
          onClick={() => {
            navigator.clipboard.writeText(paragraphs[4]);
          }}
        >
          <Icon color="teal" name="copy"></Icon>
        </Button>
      </Segment>
      <Paragraph content={paragraphs[5]} />
      <Paragraph content={paragraphs[6]} />
      <Image src={codeblock1Image} width="50%"></Image>
      <Segment>
        <CodeBlock language="html" text={paragraphs[8]} />
      </Segment>
      <Paragraph content={paragraphs[7]} />
      <Paragraph content={paragraphs[9]} />
      <Paragraph content={paragraphs[10]} />
      <Segment>
        <CodeBlock language="html" text={paragraphs[11]} />
      </Segment>
      <Paragraph content={paragraphs[12]} />
      <Segment>
        <CodeBlock language="html" text={paragraphs[13]} />
      </Segment>
      <Paragraph content={paragraphs[14]} />
      <Segment>
        <CodeBlock language="html" text={paragraphs[15]} />
      </Segment>
      <Paragraph content={paragraphs[16]} />
      <Paragraph content={paragraphs[17]} />
      <IconButtonLink
        url={htmlAccessibilityUrl}
        inverted
        buttonColor="white"
        iconName="eye"
        iconColor="teal"
      />
      <Header as="h3" textAlign="center">
        Add An Image
      </Header>
      <Paragraph content={paragraphs[18]} />
      <Segment>
        <CodeBlock
          language="html"
          text={paragraphs[19]}
          highlight={codeBlock2LinesToHighlight}
        />
        <Button
          inverted
          onClick={() => {
            navigator.clipboard.writeText(paragraphs[19]);
          }}
        >
          <Icon color="teal" name="copy"></Icon>
        </Button>
      </Segment>
      <Paragraph content={paragraphs[20]} />
      <Segment>
        <CodeBlock language="html" text={paragraphs[21]} />
      </Segment>
      <Paragraph content={paragraphs[22]} />
      <Image src={codeblock2Image} width="50%"></Image>
      <Paragraph content={paragraphs[23]} />
      <Paragraph content={paragraphs[26]} />
      <Segment>
        <CodeBlock language="html" text={paragraphs[27]} />
      </Segment>
      <Header as="h3" textAlign="center">
        Add Content Section
      </Header>
      <Paragraph content={paragraphs[28]} />
      <Segment>
        <CodeBlock language="html" text={paragraphs[24]} />
      </Segment>
      <Paragraph content={paragraphs[25]} />
      <List bulleted>
        <List.Header as="h4">'id' attribute tips</List.Header>
        <List.Item>The 'id' value should be unique.</List.Item>
        <List.Item>The 'id' value should be lowercase.</List.Item>
        <List.Item>
          When made up of multiple words, the 'id' value should separate the
          words with hyphens.
        </List.Item>
        <List.Item>
          Ideally, the 'id' value should describe, in some minor way, the
          content of the element it refers to.
        </List.Item>
      </List>
      <Paragraph content={paragraphs[29]} />
      <List bulleted>
        <List.Header as="h4">Animal Information</List.Header>
        <List.Item>Name</List.Item>
        <List.Item>Age</List.Item>
        <List.Item>Favorite Foods</List.Item>
        <List.Item>Friends</List.Item>
      </List>
      <Paragraph content={paragraphs[30]} />
      <Segment>
        <CodeBlock language="html" text={paragraphs[31]} />
      </Segment>
      <Header as="h3" textAlign="center">
        Add Table
      </Header>
      <Paragraph content={paragraphs[32]} />
      <Segment>
        <CodeBlock language="html" text={paragraphs[33]} />
      </Segment>
      <Paragraph content={paragraphs[34]} />
      <Segment>
        <CodeBlock language="html" text={paragraphs[35]} />
        <Button
          inverted
          onClick={() => {
            navigator.clipboard.writeText(paragraphs[35]);
          }}
        >
          <Icon color="teal" name="copy"></Icon>
        </Button>
      </Segment>
      <Paragraph content={paragraphs[36]} />
      <Image src={codeblock3Image} width="50%"></Image>
      <Paragraph content={paragraphs[37]} />
      <List bulleted>
        <List.Header as="h4">Table Child Elements</List.Header>
        <List.Item>'tr': a table row</List.Item>
        <List.Item>'th': a table header and column value.</List.Item>
        <List.Item>'td': a column value</List.Item>
      </List>
      <Segment>
        <CodeBlock
          language="html"
          text={paragraphs[38]}
          highlight={codeBlock3LinesToHighlight}
        />
      </Segment>
      <Paragraph content={paragraphs[39]} />
      <Header as="h3" textAlign="center">
        Add List
      </Header>
      <Paragraph content={paragraphs[40]} />
    </Container>
  );
}
