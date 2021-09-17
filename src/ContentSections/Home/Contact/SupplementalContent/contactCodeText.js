const code = {
  contact: `import "./Contact.css";
  import { Header, Container, Grid, Message } from "semantic-ui-react";
  import IconButtonLink from "../../../common/components/IconButtonLink";
  import { linkedinUrl } from "../../../common/constants";
  import CopyTextToClipboard from "../../../common/components/CopyTextToClipboard/CopyTextToClipboard";
  
  export default function Contact() {
    return (
      <Container text textAlign="center">
        <Header as="h3">Contact</Header>
        <Grid.Row className="email-row">
          <Header as="h4" name="email">
            Email
          </Header>
          <Message compact style={{ marginBottom: "10px" }}>
            ingrey1@gmail.com{" "}
            <CopyTextToClipboard
              inverted
              buttonSize="small"
              text="ingrey1@gmail.com"
            />
          </Message>
        </Grid.Row>
        <Grid.Row>
          <Header as="h3">Social Links</Header>
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
  
  `,
  contactComponentTree: `import FolderTree from "react-folder-tree";
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
    `,
  contactFolderTree: `import FolderTree from "react-folder-tree";
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
    `,
  contactMenu: `import { Menu } from "semantic-ui-react";

    export default function ContactMenu({
      supplementalContent,
      setSupplementalContent,
    }) {
      const activeItem = "Code";
    
      return (
        <Menu fluid tabular widths={2}>
          <Menu.Item
            name="Code"
            active={activeItem === "Code"}
            onClick={() => {
              setSupplementalContent({
                supplementalContent,
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
    `,
  contactSupplementalContainer: `import { Grid } from "semantic-ui-react";
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
          <ContactSupplementalContentRow
            supplementalContent={supplementalContent}
          />
        </Grid.Row>
      );
    }
    `,
  contactSupplementalContentRow: `import { Grid } from "semantic-ui-react";
    import ContactCode from "./ContactCode";
    
    export default function ContactSupplementalContentRow({
      supplementalContent: { expand },
    }) {
      return (
        <Grid.Row style={{ overflow: "auto", maxHeight: expand ? "80vh" : "40vh" }}>
          <ContactCode />
        </Grid.Row>
      );
    }
    `,
  contactCode: `import { CodeBlock } from "@atlaskit/code";
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
  `,
};

export { code };
