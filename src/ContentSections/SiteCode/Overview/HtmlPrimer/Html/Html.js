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

const codeBlock1LinesToHighlight = "6,9,12,13";

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
    </Container>
  );
}
