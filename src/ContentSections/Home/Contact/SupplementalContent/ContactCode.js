import { CodeBlock } from "@atlaskit/code";
import { Grid, Header, Container } from "semantic-ui-react";
import ContactFolderTree from "./ContactFolderTree";
import ContactComponentTree from "./ContactComponentTree";
import IconButtonLink from "../../../../common/components/IconButtonLink";
import { githubHomeContactUrl } from "../../../../common/constants";
import { code } from "./contactCodeText"

export default function ContactCode() {
  return (
    <Container text>
      <Grid.Row>
        <Header as="h2">
          File Structure{" "}
          <IconButtonLink
            size="large"
            iconName="github"
            url={githubHomeContactUrl}
          />
        </Header>
        <ContactFolderTree />
        <Header as="h2">Simplified Component Hierarchy</Header>
        <ContactComponentTree />
        <Header as="h2">Main Content Code</Header>

        <Header as="h3">Contact.js</Header>
        <CodeBlock language="jsx" showLineNumbers={true} text={code.contact} />
      </Grid.Row>
      <Grid.Row>
        <Header as="h2">Supplemental Content Code</Header>
        <Header as="h3">ContactSupplementalContainer.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={code.contactSupplementalContainer}
        />
        <Header as="h3">ContactSupplementalContentRow.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={code.contactSupplementalContentRow}
        />
        <Header as="h3">ContactMenu.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={code.contactMenu}
        />
        <Header as="h3">ContactCode.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={code.contactCode}
        />
        <Header as="h3">ContactFolderTree.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={code.contactFolderTree}
        />
        <Header as="h3">ContactComponentTree.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={code.contactComponentTree}
        />
      </Grid.Row>
    </Container>
  );
}
