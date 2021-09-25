import { Container, Header, Divider, List } from "semantic-ui-react";
import { content } from "./text";
import { CodeBlock } from "@atlaskit/code";
import Paragraph from "../../../../common/components/Paragraph/Paragraph";
import IconButtonLink from "../../../../common/components/IconButtonLink";
import { visualCodeStudioUrl, nodeUrl } from "../../../../common/constants";

export default function VisualizationTool() {
  return (
    <Container text style={{ fontSize: "1.2em" }}>
      <Header as="h2" textAlign="center">
        Introduction
      </Header>
      <Paragraph content={content.introduction[1]} />
      <Paragraph content={content.introduction[2]} />
      <Paragraph content={content.introduction[3]} />
      <Paragraph content={content.introduction[4]} />
      <Divider />
      <Header as="h2" textAlign="center">
        Requirements
      </Header>
      <Paragraph content={content.requirements[1]} />
      <List bulleted>
        <List.Item>
          A Text Editor or IDE{" "}
          <IconButtonLink
            url={visualCodeStudioUrl}
            iconName="cut"
            inverted
            buttonColor="white"
            iconColor="teal"
          />
        </List.Item>
        <List.Item>
          The latest version of Node{" "}
          <IconButtonLink
            url={nodeUrl}
            iconName="cut"
            inverted
            buttonColor="white"
            iconColor="teal"
          />
        </List.Item>
      </List>
      <Divider />
      <Header as="h2" textAlign="center">
        Project Setup
      </Header>
      <Paragraph content={content.projectSetup[1]} />
      <Paragraph content={content.projectSetup[2]} />
      <CodeBlock
        language="powershell"
        showLineNumbers={false}
        text={content.projectSetup[3]}
      />
      <Paragraph content={content.projectSetup[4]} />
      <CodeBlock
        language="powershell"
        showLineNumbers={false}
        text={content.projectSetup[5]}
      />
      <Divider />
      <Header as="h2" textAlign="center">
        To Be Continued...
      </Header>
      <Divider />
    </Container>
  );
}
