import { CodeBlock } from "@atlaskit/code";
import { Grid, Header, Container } from "semantic-ui-react";
import NavigationFolderTree from "./NavigationFolderTree";
import NavigationComponentTree from "./NavigationComponentTree";
import IconButtonLink from "../../../../common/components/IconButtonLink";
import { githubHomeNavigationUrl } from "../../../../common/constants";
import { code } from "./navigationCodeText";

export default function NavigationCode() {
  return (
    <Container text>
      <Grid.Row>
        <Header as="h2">
          File Structure{" "}
          <IconButtonLink
            size="large"
            iconName="github"
            url={githubHomeNavigationUrl}
          />
        </Header>
        <NavigationFolderTree />
        <Header as="h2">Simplified Component Hierarchy</Header>
        <NavigationComponentTree />
        <Header as="h2">Main Content Code</Header>

        <Header as="h3">Navigation.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={code.navigation}
        />
      </Grid.Row>
      <Grid.Row>
        <Header as="h2">Supplemental Content Code</Header>
        <Header as="h3">NavigationSupplementalContentRow.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={code.navigationSupplementalContentRow}
        />
        <Header as="h3">NavigationSupplementalContainer.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={code.navigationSupplementalContainer}
        />
        <Header as="h3">NavigationMenu.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={code.navigationMenu}
        />
        <Header as="h3">NavigationCode.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={code.navigationCode}
        />
        <Header as="h3">NavigationFolderTree.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={code.navigationFolderTree}
        />
        <Header as="h3">NavigationComponentTree.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={code.navigationComponentTree}
        />
      </Grid.Row>
    </Container>
  );
}
