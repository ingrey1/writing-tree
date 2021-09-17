const code = {
  intro: `import { Container, Header } from "semantic-ui-react";
  import Paragraph from "../../../common/components/Paragraph/Paragraph";
  import "./Intro.css";
  import { paragraphs } from "./text";
  function Intro() {
    return (
      <Container
        className="introduction-container"
        text
        style={{ textSize: "1.2em" }}
      >
        <Header as="h3" textAlign="center">
          The Parable of the Forgotten Documentation
        </Header>
        {Object.keys(paragraphs).map((paragraphKey, index) => (
          <Paragraph key={index} content={paragraphs[paragraphKey]} />
        ))}
      </Container>
    );
  }
  
  export default Intro;
  `,
  credits: `import { Container, Header, Segment } from "semantic-ui-react";
  import IconButtonLink from "../../../../common/components/IconButtonLink";
  
  export default function Credits() {
    return (
      <Container text>
        <Header as="h2" style={{ color: "teal", marginTop: "20px" }}>
          Story Art
        </Header>
        <Segment>
          <Header as="h3" style={{ color: "teal", marginTop: "20px" }}>
            Studio Abiboge
          </Header>
          <p style={{ fontSize: "1.2em" }}>
            If you'd like to commission some artwork from them, feel free to click
            here:
            <IconButtonLink
              url="https://www.fiverr.com/studioabiboge"
              iconName="heart"
              inverted
              buttonColor="white"
            />
          </p>
        </Segment>
      </Container>
    );
  }
  `,
  introComponentTree: `import FolderTree from "react-folder-tree";
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
                name: "IntroSupplementalContainer",
                children: [
                  { name: "IntroMenu" },
                  { name: "IntroSupplementalContentRow" },
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  
  const IntroComponentTree = () => {
    return (
      <FolderTree
        data={componentStructure}
        iconComponents={{ FileIcon, FolderIcon }}
        showCheckbox={false}
        readOnly
      />
    );
  };
  
  export default IntroComponentTree;
  `,
  introFolderTree: `import FolderTree from "react-folder-tree";
  import "react-folder-tree/dist/style.css";
  
  const relativeFolderStructure = {
    name: "Intro",
    isOpen: false,
    children: [
      {
        name: "SupplementalContent",
        isOpen: false,
        children: [
          { name: "IntroCode.js" },
          { name: "IntroFolderTree.js" },
          { name: "IntroComponentTree.js" },
          { name: "IntroMenu.js" },
          { name: "IntroSupplementalContainer.js" },
        ],
      },
      { name: "Intro.css" },
      { name: "Intro.js" },
      { name: "text.js" },
    ],
  };
  
  const IntroFolderTree = () => {
    return (
      <FolderTree data={relativeFolderStructure} showCheckbox={false} readOnly />
    );
  };
  
  export default IntroFolderTree;
  `,
  introMenu: `import { Menu } from "semantic-ui-react";

  export default function IntroMenu({
    supplementalContent,
    supplementalContent: {
      supplementalContentSection: { subsection },
    },
    setSupplementalContent,
  }) {
    const activeItem = subsection;
  
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
                name: "Introduction",
                subsection: "Code",
              },
            });
          }}
        />
        <Menu.Item
          name="Credits"
          active={activeItem === "Credits"}
          onClick={() => {
            setSupplementalContent({
              ...supplementalContent,
              show: true,
              name: "Home",
              supplementalContentSection: {
                name: "Introduction",
                subsection: "Credits",
              },
            });
          }}
        />
      </Menu>
    );
  }
  `,
  introSupplementalContainer: `import { Grid } from "semantic-ui-react";
  import IntroMenu from "./IntroMenu";
  import IntroSupplementalContentRow from "./IntroSupplementalContentRow";
  
  export default function IntroSupplementalContainer({
    supplementalContent,
    setSupplementalContent,
  }) {
    return (
      <Grid.Row>
        <Grid.Row>
          <IntroMenu
            setSupplementalContent={setSupplementalContent}
            supplementalContent={supplementalContent}
          />
        </Grid.Row>
        <IntroSupplementalContentRow
          supplementalContent={supplementalContent}
        />
      </Grid.Row>
    );
  }
  `,
  introSupplementalContentRow: `import { Grid } from "semantic-ui-react";
  import IntroCode from "./IntroCode";
  import Credits from "./Credits";
  
  export default function IntroSupplementalContentRow({
    supplementalContent: {
      expand,
      supplementalContentSection: { subsection },
    },
  }) {
    return (
      <Grid.Row style={{ overflow: "auto", maxHeight: expand ? "80vh" : "40vh" }}>
        {subsection === "Code" ? <IntroCode /> : <Credits />}
      </Grid.Row>
    );
  }
  `,
  introCode: `import { CodeBlock } from "@atlaskit/code";
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
  `,
};

export { code };
