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
import CopyTextToClipboard from "../../../../common/components/CopyTextToClipboard/CopyTextToClipboard";
import { visualCodeStudioUrl, nodeUrl } from "../../../../common/constants";
import document from "../../Examples/Examples/BookHeroApiDocument";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import visualizationTool1 from "./images/visualization-tool1.png";
import visualizationTool2 from "./images/visualization-tool2.png";
import visualizationTool3 from "./images/visualization-tool3.png";
import visualizationTool4 from "./images/visualization-tool4.png";
import visualizationTool5 from "./images/visualization-tool5.png";
import visualizationTool6 from "./images/visualization-tool6.png";
import visualizationTool7 from "./images/visualization-tool7.png";
import visualizationTool8 from "./images/visualization-tool8.png";
import visualizationTool9 from "./images/visualization-tool9.png";
import visualizationTool10 from "./images/visualization-tool10.png";
import visualizationTool11 from "./images/visualization-tool11.png";
import visualizationTool12 from "./images/visualization-tool12.png";

export default function VisualizationTool() {
  return (
    <Container text style={{ fontSize: "1.2em" }}>
      <Header as="h2" textAlign="center">
        1. Introduction
      </Header>
      <Paragraph content={content.introduction[1]} />
      <Paragraph content={content.introduction[2]} />
      <Paragraph content={content.introduction[3]} />
      <Paragraph content={content.introduction[4]} />
      <Divider />
      <Header as="h2" textAlign="center">
        2. Requirements
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
        3. Project Setup
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
        4. Component Features
      </Header>
      <Paragraph content={content.componentFeatures[1]} />
      <SwaggerUI spec={document} />
      <Paragraph content={content.componentFeatures[2]} />
      <Header as="h4" textAlign="center">
        4.1. The API Base URL
      </Header>
      <Image src={visualizationTool6} />
      <Paragraph content={content.componentFeatures[3]} />
      <Header as="h4" textAlign="center">
        4.2. The Complete URL And HTTP Action For An API Route
      </Header>
      <Image src={visualizationTool7} />
      <Paragraph content={content.componentFeatures[4]} />
      <Message>
        <p>{content.componentFeatures[5]}</p>
      </Message>
      <Paragraph content={content.componentFeatures[6]} />
      <Header as="h4" textAlign="center">
        4.3. The GET "/book" Route Information
      </Header>
      <Paragraph content={content.componentFeatures[7]} />
      <Header as="h5" textAlign="center">
        4.3.1. Information Characterizing The Request
      </Header>
      <Image src={visualizationTool8} />
      <Paragraph content={content.componentFeatures[8]} />
      <Paragraph content={content.componentFeatures[9]} />
      <Paragraph content={content.componentFeatures[10]} />
      <Message>
        <p>{content.componentFeatures[11]}</p>
      </Message>
      <Paragraph content={content.componentFeatures[12]} />
      <Paragraph content={content.componentFeatures[13]} />
      <Message style={{ backgroundColor: "black", color: "white" }}>
        <p>{content.componentFeatures[14]}</p>
      </Message>
      <CopyTextToClipboard text={content.componentFeatures[14]} />
      <Header as="h5" textAlign="center">
        4.3.2. Information Characterizing The Response
      </Header>
      <Paragraph content={content.componentFeatures[15]} />
      <Image src={visualizationTool9} />
      <Paragraph content={content.componentFeatures[16]} />
      <Image src={visualizationTool10} />
      <Paragraph content={content.componentFeatures[17]} />
      <Header as="h5" textAlign="center">
        4.4. Schemas
      </Header>
      <Paragraph content={content.componentFeatures[18]} />
      <Image src={visualizationTool11} />
      <Paragraph content={content.componentFeatures[19]} />
      <Header as="h4" textAlign="center">
        4.5. Requirements
      </Header>
      <Paragraph content={content.componentFeatures[20]} />
      <List bulleted>
        <List.Item>Base URL</List.Item>
        <List.Item>
          Information For Each Route:
          <List bulleted>
            <List.Item>The Full Route URL</List.Item>
            <List.Item>The HTTP Verb/Action</List.Item>
            <List.Item>Route Parameters (if any)</List.Item>
            <List.Item>Request Body (if any)</List.Item>
            <List.Item>One Complete Request Example</List.Item>
            <List.Item>One Complete Response Example</List.Item>
          </List>
        </List.Item>
        <List.Item>
          A 'Try It Out' button for the 'GET' routes that make a GET request and
          display the response
        </List.Item>
      </List>
      <Paragraph content={content.componentFeatures[21]} />
      <Divider />
      <Header as="h2" textAlign="center">
        5. Passing The Open API Doc To the VisualizationTool Component As Input
      </Header>
      <Paragraph content={content.componentCode[1]} />
      <Image src={visualizationTool12} />
      <Paragraph content={content.componentCode[2]} />
      <CodeBlock
        language="jsx"
        theme={monokai}
        text={content.componentCode[3]}
      />
      <CopyTextToClipboard text={content.componentCode[3]} />
      <Paragraph content={content.componentCode[4]} />
      <CodeBlock
        language="jsx"
        highlight="3"
        theme={monokai}
        text={content.componentCode[5]}
      />
      <Paragraph content={content.componentCode[6]} />
      <CodeBlock
        language="jsx"
        highlight="3,9"
        theme={monokai}
        text={content.componentCode[7]}
      />
      <Divider />
      <Header as="h2" textAlign="center">
        To Be Continued...
      </Header>
      <Divider />
    </Container>
  );
}
