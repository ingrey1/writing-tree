import { paragraphs } from "./text";
import {
  Header,
  Container,
  List,
  Grid,
  Message,
  Icon,
  Button,
} from "semantic-ui-react";
import { CodeBlock } from "@atlaskit/code";
import {
  visualCodeStudioUrl,
  sublimeTextUrl,
} from "../../../../../common/constants";
import IconButtonLink from "../../../../../common/components/IconButtonLink";
import Paragraph from "../../../../../common/components/Paragraph/Paragraph";

export default function Html() {
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
              animals.html{"   "}
              <Button
                inverted
                onClick={() => {
                  navigator.clipboard.writeText("animals.html");
                }}
              >
                <Icon color="teal" name="copy"></Icon>
              </Button>
            </p>
          </Message>
        </Grid.Column>
      </Grid>
    </Container>
  );
}
