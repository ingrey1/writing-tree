import { CodeBlock } from "@atlaskit/code";
import { Grid, Header, Container } from "semantic-ui-react";
import IntroFolderTree from "./IntroFolderTree";
import IntroComponentTree from "./IntroComponentTree";
import IconButtonLink from "../../../../common/components/IconButtonLink";
import { githubHomeIntroUrl } from "../../../../common/constants";
import { code } from "./introCodeText";

export default function IntroCode() {
  return (
    <Container text>
      <Grid.Row>
        <Header as="h2">
          File Structure{" "}
          <IconButtonLink
            size="large"
            iconName="github"
            url={githubHomeIntroUrl}
          />
        </Header>
        <IntroFolderTree />
        <Header as="h2">Simplified Component Hierarchy</Header>
        <IntroComponentTree />
        <Header as="h2">Main Content Code</Header>

        <Header as="h3">Intro.js</Header>
        <CodeBlock language="jsx" showLineNumbers={true} text={code.intro} />
      </Grid.Row>
      <Grid.Row>
        <Header as="h2">Supplemental Content Code</Header>
        <Header as="h3">IntroSupplementalContentRow.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={code.introSupplementalContentRow}
        />
        <Header as="h3">IntroSupplementalContainer.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={code.introSupplementalContainer}
        />
        <Header as="h3">IntroMenu.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={code.introMenu}
        />
        <Header as="h3">IntroCode.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={code.introCode}
        />
        <Header as="h3">IntroFolderTree.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={code.introFolderTree}
        />
        <Header as="h3">IntroComponentTree.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={code.introComponentTree}
        />
        <Header as="h3">Credits.js</Header>
        <CodeBlock language="jsx" showLineNumbers={true} text={code.credits} />
      </Grid.Row>
    </Container>
  );
}
