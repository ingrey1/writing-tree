import { CodeBlock } from "@atlaskit/code";
import { Grid, Header, Segment } from "semantic-ui-react";
import ContactFolderTree from "./ContactFolderTree";
import ContactComponentTree from "./ContactComponentTree";
import IconButtonLink from "../../../../common/components/IconButtonLink";
import { githubHomeContactUrl } from "../../../../common/constants";

const contactCode = `import "./Contact.css";
import { Header, Container, Grid } from "semantic-ui-react";
import IconButtonLink from "../../../common/components/IconButtonLink";
import { linkedinUrl } from "../../../common/constants";
import CopyTextToClipboard from "../../../common/components/CopyTextToClipboard/CopyTextToClipboard";

function Contact() {
  return (
    <Container text textAlign="center">
      <Header as="h3">Contact</Header>
      <Grid.Row className="email-row">
        <Header as="h4" name="email">
          Email
        </Header>
        <div className="copy-email-container">
          <CopyTextToClipboard text="ingrey1@gmail.com" />
        </div>
      </Grid.Row>
      <Grid.Row>
        <Header as="h4">Social Links</Header>
        <IconButtonLink
          inverted
          iconName="linkedin in"
          url={linkedinUrl}
          buttonColor="white"
          buttonSize="large"
          iconSize="large"
        />
      </Grid.Row>
    </Container>
  );
}

export default Contact;
`;

const contactMenuCode = `import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class ContactMenu extends Component {
  render() {
    const activeItem = "Code";

    return (
      <Menu fluid tabular widths={2}>
        <Menu.Item
          name="Code"
          active={activeItem === "Code"}
          onClick={(e, state) => {
            this.props.setSupplementalContent({
              ...this.props.supplementalContent,
              show: true,
              name: "Home",
              supplementalContentSection: {
                name: "Contact",
                subsection: "Code",
              },
            });
          }}
        />
      </Menu>
    );
  }
}
`;

const contactComponentTreeCode = `import FolderTree from "react-folder-tree";
import "react-folder-tree/dist/style.css";

const FileIcon = (...args) => null;
const FolderIcon = (...args) => null;

const componentStructure = {
  name: "SupplementalContentRow",
  isOpen: false,
  children: [
    {
      name: "GridRow",
      isOpen: false,
      children: [
        {
          name: "SupplementalContent",
          children: [
            {
              name: "ContactSupplementalContainer",
              children: [
                { name: "ContactMenu" },
                { name: "ContactSupplementalContentRow" },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const ContactComponentTree = () => {
  return (
    <FolderTree
      data={componentStructure}
      iconComponents={{ FileIcon, FolderIcon }}
      showCheckbox={false}
      readOnly
    />
  );
};

export default ContactComponentTree;
`;

const contactFolderTreeCode = `import FolderTree from "react-folder-tree";
import "react-folder-tree/dist/style.css";

const relativeFolderStructure = {
  name: "Contact",
  isOpen: false,
  children: [
    {
      name: "SupplementalContent",
      isOpen: false,
      children: [
        { name: "ContactCode.js" },
        { name: "ContactFolderTree.js" },
        { name: "ContactComponentTree.js" },
        { name: "ContactMenu.js" },
        { name: "ContactSupplementalContainer.js" },
      ],
    },
    { name: "Contact.css" },
    { name: "Contact.js" },
  ],
};

const ContactFolderTree = () => {
  return (
    <FolderTree data={relativeFolderStructure} showCheckbox={false} readOnly />
  );
};

export default ContactFolderTree;
`;

const contactSupplementalContainerCode = `import { Grid } from "semantic-ui-react";
import ContactMenu from "./ContactMenu";
import ContactSupplementalContentRow from "./ContactSupplementalContentRow";

export default function ContactSupplementalContainer({
  supplementalContent,
  setSupplementalContent,
}) {
  return (
    <Grid.Row>
      <Grid.Row>
        <ContactMenu
          setSupplementalContent={setSupplementalContent}
          supplementalContent={supplementalContent}
        />
      </Grid.Row>
      <ContactSupplementalContentRow />
    </Grid.Row>
  );
}
`;

const contactSupplementalContentRowCode = `import { Grid } from "semantic-ui-react";
import ContactCode from "./ContactCode";

export default function ContactSupplementalContentRow() {
  return (
    <Grid.Row>
      <ContactCode />
    </Grid.Row>
  );
}
`;

const contactCodeCode = `export default function ContactCode() {
  return (
    <Segment style={{ overflow: "auto", maxHeight: "100vh" }}>
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
        <CodeBlock language="jsx" showLineNumbers={true} text={contactCode} />
      </Grid.Row>
      <Grid.Row>
        <Header as="h2">Supplemental Content Code</Header>
        <Header as="h3">ContactSupplementalContainer.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={contactSupplementalContainerCode}
        />
        <Header as="h3">ContactSupplementalContentRow.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={contactSupplementalContentRowCode}
        />
        <Header as="h3">ContactMenu.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={contactMenuCode}
        />
        <Header as="h3">ContactCode.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={contactCodeCode}
        />
        <Header as="h3">ContactFolderTreeCode.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={contactFolderTreeCode}
        />
        <Header as="h3">ContactComponentTree.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={contactComponentTreeCode}
        />
      </Grid.Row>
    </Segment>
  );
}
`
export default function ContactCode() {
  return (
    <Segment style={{ overflow: "auto", maxHeight: "100vh" }}>
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
        <CodeBlock language="jsx" showLineNumbers={true} text={contactCode} />
      </Grid.Row>
      <Grid.Row>
        <Header as="h2">Supplemental Content Code</Header>
        <Header as="h3">ContactSupplementalContainer.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={contactSupplementalContainerCode}
        />
        <Header as="h3">ContactSupplementalContentRow.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={contactSupplementalContentRowCode}
        />
        <Header as="h3">ContactMenu.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={contactMenuCode}
        />
        <Header as="h3">ContactCode.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={contactCodeCode}
        />
        <Header as="h3">ContactFolderTreeCode.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={contactFolderTreeCode}
        />
        <Header as="h3">ContactComponentTree.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={contactComponentTreeCode}
        />
      </Grid.Row>
    </Segment>
  );
}
