import { CodeBlock } from "@atlaskit/code";
import { Grid, Header, Segment } from "semantic-ui-react";
import NavigationFolderTree from "./NavigationFolderTree";
import NavigationComponentTree from "./NavigationComponentTree";
import IconButtonLink from "../../../../common/components/IconButtonLink";
import { githubHomeNavigationUrl } from "../../../../common/constants";

const navigationCode = `import { Header, Container, Icon, Button } from "semantic-ui-react";
import Paragraph from "../../../common/components/Paragraph/Paragraph";
import { paragraphs } from "./text";

function Navigation() {
  return (
    <Container text textAlign="center">
      <Header as="h3">Navigation</Header>
      <Header as="h4">Icons</Header>
      <Icon name="book" color="teal" size="large" />
      <Paragraph content={paragraphs[1]} />
      <Icon name="expand" color="teal" size="large" />
      <Paragraph content={paragraphs[2]} />
      <Icon name="copy" color="teal" size="large" />
      <Paragraph content={paragraphs[3]} />
      <Icon name="bars" color="teal" size="large" />
      <Paragraph content={paragraphs[4]} />
      <Icon name="amazon" color="teal" size="large" />
      <Paragraph content={paragraphs[5]} />
      <Icon name="tree" color="teal" size="large" />
      <Paragraph content={paragraphs[6]} />
      <Header as="h4">Actions</Header>
      <Button basic color="teal">
        Show Extra Content
      </Button>
      <Paragraph content={paragraphs[7]} />
    </Container>
  );
}

export default Navigation;
`;

const navigationCodeCode = `export default function NavigationCode() {
  return (
    <Segment style={{ overflow: "auto", maxHeight: "60vh" }}>
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
        <CodeBlock language="jsx" showLineNumbers={true} text={navigationCode} />
      </Grid.Row>
      <Grid.Row>
        <Header as="h2">Supplemental Content Code</Header>
        <Header as="h3">navigationSupplementalContainer.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={navigationSupplementalContainerCode}
        />
        <Header as="h3">NavigationMenu.js</Header>
        <CodeBlock language="jsx" showLineNumbers={true} text={navigationMenuCode} />
        <Header as="h3">NavigationCode.js</Header>
        <CodeBlock language="jsx" showLineNumbers={true} text={navigationCodeCode} />
        <Header as="h3">NavigationFolderTreeCode.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={navigationFolderTreeCode}
        />
        <Header as="h3">NavigationComponentTree.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={navigationComponentTreeCode}
        />
      </Grid.Row>
    </Segment>
  );
}`;

const navigationMenuCode = `import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class NavigationMenu extends Component {
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
              name: "Home.Navigation",
              supplementalContentSection: {
                name: "Home.Navigation",
                subsection: "Navigation",
              },
            });
          }}
        />
      </Menu>
    );
  }
}
`;

const navigationComponentTreeCode = `import FolderTree from "react-folder-tree";
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
              name: "NavigationSupplementalContainer",
              children: [
                { name: "NavigationMenu" },
                { name: "NavigationSupplementalContentRow" },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const NavigationComponentTree = () => {
  return (
    <FolderTree
      data={componentStructure}
      iconComponents={{ FileIcon, FolderIcon }}
      showCheckbox={false}
      readOnly
    />
  );
};

export default NavigationComponentTree;
`;

const navigationFolderTreeCode = `import FolderTree from "react-folder-tree";
import "react-folder-tree/dist/style.css";

const relativeFolderStructure = {
  name: "Navigation",
  isOpen: false,
  children: [
    {
      name: "SupplementalContent",
      isOpen: false,
      children: [
        { name: "NavigationCode.js" },
        { name: "NavigationFolderTree.js" },
        { name: "NavigationComponentTree.js" },
        { name: "NavigationMenu.js" },
        { name: "NavigationSupplementalContainer.js" },
      ],
    },
    { name: "Navigation.css" },
    { name: "Navigation.js" },
  ],
};

const NavigationFolderTree = () => {
  return (
    <FolderTree data={relativeFolderStructure} showCheckbox={false} readOnly />
  );
};

export default NavigationFolderTree;
`;

const navigationSupplementalContainerCode = `import { Grid } from "semantic-ui-react";
import NavigationMenu from "./NavigationMenu";
import NavigationSupplementalContentRow from "./NavigationSupplementalContentRow";

export default function NavigationSupplementalContainer({
  supplementalContent,
  setSupplementalContent,
}) {
  const { subsection: componentKey } =
    supplementalContent.supplementalContentSection;
  return (
    <Grid.Row>
      <Grid.Row>
        <NavigationMenu
          navigationMenuSelection={componentKey}
          setSupplementalContent={setSupplementalContent}
          supplementalContent={supplementalContent}
        />
      </Grid.Row>
      <NavigationSupplementalContentRow componentKey={componentKey} />
    </Grid.Row>
  );
}
`;

export default function NavigationCode() {
  return (
    <Segment style={{ overflow: "auto", maxHeight: "60vh" }}>
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
          text={navigationCode}
        />
      </Grid.Row>
      <Grid.Row>
        <Header as="h2">Supplemental Content Code</Header>
        <Header as="h3">NavigationSupplementalContainer.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={navigationSupplementalContainerCode}
        />
        <Header as="h3">NavigationMenu.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={navigationMenuCode}
        />
        <Header as="h3">NavigationCode.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={navigationCodeCode}
        />
        <Header as="h3">NavigationFolderTree.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={navigationFolderTreeCode}
        />
        <Header as="h3">NavigationComponentTree.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={navigationComponentTreeCode}
        />
      </Grid.Row>
    </Segment>
  );
}
