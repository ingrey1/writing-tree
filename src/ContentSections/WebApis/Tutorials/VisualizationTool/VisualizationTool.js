import {
  Container,
  Header,
  Divider,
  List,
  Message,
  Image,
} from "semantic-ui-react";
import { content } from "./text";
import { CodeBlock, monokai } from "react-code-blocks";
import Paragraph from "../../../../common/components/Paragraph/Paragraph";
import IconButtonLink from "../../../../common/components/IconButtonLink";
import { visualCodeStudioUrl, nodeUrl } from "../../../../common/constants";
import visualizationTool1 from "./images/visualization-tool1.png";
import visualizationTool2 from "./images/visualization-tool2.png";
import visualizationTool3 from "./images/visualization-tool3.png";
import visualizationTool4 from "./images/visualization-tool4.png";
import visualizationTool5 from "./images/visualization-tool5.png";

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
      <Message style={{ backgroundColor: "black", color: "white" }}>
        <p>{content.projectSetup[3]}</p>
      </Message>
      <Paragraph content={content.projectSetup[4]} />
      <Message style={{ backgroundColor: "black", color: "white" }}>
        <p>{content.projectSetup[5]}</p>
      </Message>
      <Paragraph content={content.projectSetup[6]} />
      <Message style={{ backgroundColor: "black", color: "white" }}>
        <p>{content.projectSetup[7]}</p>
      </Message>
      <Paragraph content={content.projectSetup[8]} />
      <Image src={visualizationTool1} />
      <Paragraph content={content.projectSetup[9]} />
      <Message style={{ backgroundColor: "black", color: "white" }}>
        <p>{content.projectSetup[10]}</p>
      </Message>
      <Paragraph content={content.projectSetup[11]} />
      <Image src={visualizationTool2} />
      <Paragraph content={content.projectSetup[12]} />
      <CodeBlock
        language="jsx"
        highlight="7-9,10-20"
        theme={monokai}
        text={content.projectSetup[13]}
      />
      <Paragraph content={content.projectSetup[14]} />
      <CodeBlock
        language="jsx"
        theme={monokai}
        text={content.projectSetup[15]}
      />
      <Paragraph content={content.projectSetup[16]} />
      <Image src={visualizationTool3} style={{ border: "2px solid teal" }} />
      <Paragraph content={content.projectSetup[17]} />
      <Image src={visualizationTool4} />
      <Paragraph content={content.projectSetup[18]} />
      <CodeBlock
        language="jsx"
        theme={monokai}
        text={content.projectSetup[19]}
      />
      <Paragraph content={content.projectSetup[20]} />
      <CodeBlock
        language="jsx"
        highlight="2,8"
        theme={monokai}
        text={content.projectSetup[21]}
      />
      <Paragraph content={content.projectSetup[22]} />
      <Image src={visualizationTool5} style={{ border: "2px solid teal" }} />
      <Paragraph content={content.projectSetup[23]} />
      <Message style={{ backgroundColor: "black", color: "white" }}>
        <p>{content.projectSetup[24]}</p>
      </Message>
      <Paragraph content={content.projectSetup[25]} />
      <CodeBlock
        language="jsx"
        highlight="4"
        theme={monokai}
        text={content.projectSetup[26]}
      />
      <Paragraph content={content.projectSetup[27]} />
      <Paragraph content={content.projectSetup[28]} />
      <Divider />
      <Header as="h2" textAlign="center">
        Building The Component
      </Header>
      <Header as="h3" textAlign="center">
        Describing The Component's Features
      </Header>

      <Divider />
      <Header as="h2" textAlign="center">
        To Be Continued...
      </Header>
      <Divider />
    </Container>
  );
}
