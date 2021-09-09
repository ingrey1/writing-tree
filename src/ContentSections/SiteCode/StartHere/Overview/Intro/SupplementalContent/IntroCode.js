import { CodeBlock } from "@atlaskit/code";
import { Grid, Header, Segment } from "semantic-ui-react";
import IntroFolderTree from "./IntroFolderTree";
import IntroComponentTree from "./IntroComponentTree";
import IconButtonLink from "../../../../../../common/components/IconButtonLink";
import { githubOverviewIntroUrl } from "../../../../../../common/constants";

const introCode = ``;
const introMenuCode = ``;
const introCodeCode = ``;
const introComponentTreeCode = ``;
const introFolderTreeCode = ``;
const introSupplementalContainerCode = ``;

export default function IntroCode() {
  return (
    <Segment style={{ overflow: "auto", maxHeight: "60vh" }}>
      <Grid.Row>
        <Header as="h2">
          File Structure{" "}
          <IconButtonLink
            size="large"
            iconName="github"
            url={githubOverviewIntroUrl}
          />
        </Header>
        <IntroFolderTree />
        <Header as="h2">Simplified Component Hierarchy</Header>
        <IntroComponentTree />
        <Header as="h2">Main Content Code</Header>

        <Header as="h3">Intro.js</Header>
        <CodeBlock language="jsx" showLineNumbers={true} text={introCode} />
      </Grid.Row>
      <Grid.Row>
        <Header as="h2">Supplemental Content Code</Header>
        <Header as="h3">IntroSupplementalContainer.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={introSupplementalContainerCode}
        />
        <Header as="h3">IntroMenu.js</Header>
        <CodeBlock language="jsx" showLineNumbers={true} text={introMenuCode} />
        <Header as="h3">IntroCode.js</Header>
        <CodeBlock language="jsx" showLineNumbers={true} text={introCodeCode} />
        <Header as="h3">IntroFolderTree.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={introFolderTreeCode}
        />
        <Header as="h3">IntroComponentTree.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={introComponentTreeCode}
        />
      </Grid.Row>
    </Segment>
  );
}
