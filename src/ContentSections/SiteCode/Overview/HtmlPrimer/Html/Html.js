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

      <Segment style={{ width: "50%", marginLeft: "20%" }}>
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
      <p>
        The HTML code above consists of opening and closing tags, with some tags
        living inside of other tags. For example, the 'section' tag lives in the
        'body' tag. So, we say that the 'body' is the parent of 'section', and
        'section' is the child of 'body'. Pay attention to the 'body' and
        'header' tags. We'll discuss their meaning after we view the rendered
        document.
      </p>
      <p>
        Go ahead and open the 'cat-kingdom.html' file in your favorite browser.
        It should look something like this.
      </p>
      <Image src={codeblock1Image} width="50%"></Image>
    </Container>
  );
}
