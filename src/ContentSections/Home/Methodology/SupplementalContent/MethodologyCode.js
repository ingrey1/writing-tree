import { CodeBlock } from "@atlaskit/code";
import { Grid, Header, Container } from "semantic-ui-react";
import MethodologyFolderTree from "./MethodologyFolderTree";
import MethodologyComponentTree from "./MethodologyComponentTree";
import IconButtonLink from "../../../../common/components/IconButtonLink";
import { githubHomeMethodologyUrl } from "../../../../common/constants";
import { code } from "./methodologyCodeText";

export default function MethodologyCode() {
  return (
    <Container text>
      <Grid.Row>
        <Header as="h2">
          File Structure{" "}
          <IconButtonLink
            size="large"
            iconName="github"
            url={githubHomeMethodologyUrl}
          />
        </Header>
        <MethodologyFolderTree />
        <Header as="h2">Simplified Component Hierarchy</Header>
        <MethodologyComponentTree />
        <Header as="h2">Main Content Code</Header>

        <Header as="h3">Methodology.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={code.methodology}
        />
      </Grid.Row>
      <Grid.Row>
        <Header as="h2">Supplemental Content Code</Header>
        <Header as="h3">MethodologySupplementalContentRow.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={code.methodologySupplementalContentRow}
        />
        <Header as="h3">MethodologySupplementalContainer.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={code.methodologySupplementalContainer}
        />
        <Header as="h3">MethodologyMenu.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={code.methodologyMenu}
        />
        <Header as="h3">MethodologyFunFacts.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={code.methodologyFunFacts}
        />
        <Header as="h3">MethodologyCode.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={code.methodologyCode}
        />
        <Header as="h3">MethodologyFolderTree.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={code.methodologyFolderTree}
        />
        <Header as="h3">MethodologyComponentTree.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={code.methodologyComponentTree}
        />
      </Grid.Row>
    </Container>
  );
}
