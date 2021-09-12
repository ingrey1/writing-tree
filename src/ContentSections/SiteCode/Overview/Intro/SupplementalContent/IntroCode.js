import { CodeBlock } from "@atlaskit/code";
import { Grid, Header, Segment } from "semantic-ui-react";
import IntroFolderTree from "./IntroFolderTree";
import IntroComponentTree from "./IntroComponentTree";
import IconButtonLink from "../../../../../common/components/IconButtonLink";
import { githubOverviewIntroUrl } from "../../../../../common/constants";

const introCode = `import { Container, Header } from "semantic-ui-react";
import Paragraph from "../../../../common/components/Paragraph/Paragraph";
import { paragraphs } from "./text";

export default function Intro() {
  return (
    <Container text>
      <Header as="h2" textAlign="center">
        Instructions
      </Header>
      <Paragraph content={paragraphs[1]} />
      <Paragraph content={paragraphs[2]} />
    </Container>
  );
}
`;
const introMenuCode = `import { Menu } from "semantic-ui-react";

export default function IntroMenu({
  setSupplementalContent,
  supplementalContent,
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
            name: "Overview",
            supplementalContentSection: {
              name: "Introduction",
              subsection: "Code",
            },
          });
        }}
      />
    </Menu>
  );
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

const introSupplementalContentRowCode = `import { Grid } from "semantic-ui-react";
import IntroCode from "./IntroCode";

export default function IntroSupplementalContentRow() {
  return (
    <Grid.Row>
      <IntroCode />
    </Grid.Row>
  );
}
`;

const introSupplementalContainerCode = `import { Grid } from "semantic-ui-react";
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
        setSupplementalContent={setSupplementalContent}
      />
    </Grid.Row>
  );
}
`;

const introCodeCode = `export default function IntroCode() {
  return (
    <Segment style={{ overflow: "auto", maxHeight: "100vh" }}>
      <Grid.Row>
        <Header as="h2">
          File Structure{" "}
          <IconButtonLink
            size="large"
            iconName="github"
            url={githubOverviewIntroUrl}
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
        <Header as="h3">IntroSupplementalContentRow.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={introSupplementalContentRowCode}
        />
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
`;

export default function IntroCode() {
  return (
    <Segment style={{ overflow: "auto", maxHeight: "100vh" }}>
      <Grid.Row>
        <Header as="h2">
          File Structure{" "}
          <IconButtonLink
            size="large"
            iconName="github"
            url={githubOverviewIntroUrl}
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
        <Header as="h3">IntroSupplementalContentRow.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={introSupplementalContentRowCode}
        />
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
