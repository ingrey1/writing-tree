import { CodeBlock } from "@atlaskit/code";
import { Grid, Header, Segment } from "semantic-ui-react";
import IntroFolderTree from "./IntroFolderTree";
import IntroComponentTree from "./IntroComponentTree";
import IconButtonLink from "../../../../../common/components/IconButtonLink";
import { githubHomeIntroUrl } from "../../../../../common/constants";

const introCode = `import { Container, Header } from "semantic-ui-react";
import Paragraph from "../../../common/components/Paragraph/Paragraph";
import { paragraphs } from "./text";
function Intro() {
  return (
    <Container className="introduction-container" text>
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
`;
const introCodeCode = `export default function IntroCode() {
  return (
    <Segment style={{ overflow: "auto", maxHeight: "60vh" }}>
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
        <Header as="h3">IntroFolderTreeCode.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={introFolderTreeCode}
        />
        <Header as="h3">IntroComponentTreeCode.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={introComponentTreeCode}
        />
      </Grid.Row>
    </Segment>
  );
}
`;

const introMenuCode = `import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class IntroMenu extends Component {
  render() {
    const activeItem = this.props.introMenuSelection;

    return (
      <Menu fluid tabular widths={2}>
        <Menu.Item
          name="Code"
          active={activeItem === "Code"}
          onClick={(e, state) => {
            this.props.setSupplementalContent({
              ...this.props.supplementalContent,
              show: true,
              name: "Intro.Code",
              supplementalContentSection: {
                name: "Intro.Code",
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
const introComponentTreeCode = `import FolderTree from "react-folder-tree";
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
                { name: "IntroMenu", children: [{name: "IntroCode"}] },
                { name: "IntorSupplementalContentRow" },
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
`;
const introFolderTreeCode = `import FolderTree from "react-folder-tree";
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
`;
const introSupplementalContainerCode = `import { Grid } from "semantic-ui-react";
import IntroMenu from "./IntroMenu";
import IntroSupplementalContentRow from "./IntroSupplementalContentRow";

export default function IntroSupplementalContainer({
  supplementalContent,
  setSupplementalContent,
}) {
  const { subsection: componentKey } =
    supplementalContent.supplementalContentSection;
  return (
    <Grid.Row>
      <Grid.Row>
        <IntroMenu
          methodologyMenuSelection={componentKey}
          setSupplementalContent={setSupplementalContent}
          supplementalContent={supplementalContent}
        />
      </Grid.Row>
      <IntroSupplementalContentRow componentKey={componentKey} />
    </Grid.Row>
  );
}
`;

export default function IntroCode() {
  return (
    <Segment style={{ overflow: "auto", maxHeight: "60vh" }}>
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
