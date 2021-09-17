const code = {
  navigation: `import { Header, Container, Icon, Button } from "semantic-ui-react";
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
        <Icon name="cut" color="teal" size="large" />
        <Paragraph content={paragraphs[9]} />
        <Icon name="eye" color="teal" size="large" />
        <Paragraph content={paragraphs[10]} />
        <Header as="h4">Actions</Header>
        <Button basic color="teal">
          Show Extra Content
        </Button>
        <Paragraph content={paragraphs[7]} />
        <Button color="violet">
          <Icon color="teal" name="github"></Icon>
        </Button>
        <Paragraph content={paragraphs[8]} />
      </Container>
    );
  }
  
  export default Navigation;
  `,
  navigationComponentTree: `import FolderTree from "react-folder-tree";
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
  
  export default function NavigationComponentTree() {
    return (
      <FolderTree
        data={componentStructure}
        iconComponents={{ FileIcon, FolderIcon }}
        showCheckbox={false}
        readOnly
      />
    );
  };
  
  `,
  navigationFolderTree: `import FolderTree from "react-folder-tree";
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
          { name: "navigationCodeText.js"},
          { name: "NavigationSupplementalContainer.js" },
        ],
      },
      { name: "Navigation.css" },
      { name: "Navigation.js" },
      { name: "text.js" },
    ],
  };
  
  const NavigationFolderTree = () => {
    return (
      <FolderTree data={relativeFolderStructure} showCheckbox={false} readOnly />
    );
  };
  
  export default NavigationFolderTree;
  `,
  navigationMenu: `import { Menu } from "semantic-ui-react";

  export default function NavigationMenu({
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
              ...supplementalContent,
              show: true,
              name: "Home",
              supplementalContentSection: {
                name: "Navigation",
                subsection: "Code",
              },
            });
          }}
        />
      </Menu>
    );
  }
  `,
  navigationSupplementalContainer: `import { Grid } from "semantic-ui-react";
  import NavigationMenu from "./NavigationMenu";
  import NavigationSupplementalContentRow from "./NavigationSupplementalContentRow";
  
  export default function NavigationSupplementalContainer({
    supplementalContent,
    setSupplementalContent,
  }) {
    return (
      <Grid.Row>
        <Grid.Row>
          <NavigationMenu
            setSupplementalContent={setSupplementalContent}
            supplementalContent={supplementalContent}
          />
        </Grid.Row>
        <NavigationSupplementalContentRow
          supplementalContent={supplementalContent}
        />
      </Grid.Row>
    );
  }
  `,
  navigationSupplementalContentRow: `import { Grid } from "semantic-ui-react";
  import NavigationCode from "./NavigationCode";
  
  export default function NavigationSupplementalContentRow({
    supplementalContent: { expand },
  }) {
    return (
      <Grid.Row style={{ overflow: "auto", maxHeight: expand ? "80vh" : "40vh" }}>
        <NavigationCode />
      </Grid.Row>
    );
  }
  `,
  navigationCode: `import { CodeBlock } from "@atlaskit/code";
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
  `,
};

export { code };
