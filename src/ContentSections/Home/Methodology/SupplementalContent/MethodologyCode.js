import { CodeBlock } from "@atlaskit/code";
import { Grid, Header, Segment } from "semantic-ui-react";
import MethodologyFolderTree from "./MethodologyFolderTree";
import MethodologyComponentTree from "./MethodologyComponentTree";
import IconButtonLink from "../../../../common/components/IconButtonLink";
import { githubHomeMethodologyUrl } from "../../../../common/constants";

const methodologyCode = `import { Header, Container } from "semantic-ui-react";
import "./Methodology.css";
import { paragraphs } from "./text";
import Paragraph from "../../../common/components/Paragraph/Paragraph";
import IconButtonContentLink from "../../../common/components/IconButtonContentLink";

function Methodology({ supplementalContent, setSupplementalContent }) {
  return (
    <Container text>
      <Header as="h3" textAlign="center">
        Methodology
      </Header>
      <Header as="h2" textAlign="center">
        The Purpose of This Site
      </Header>
      <Paragraph content={paragraphs[1]} />
      <Header as="h2" textAlign="center">
        The Code
      </Header>
      <Paragraph content={paragraphs[2]} />
      <Paragraph content={paragraphs[3]} />
      <Header as="h2" textAlign="center">
        Documentation Transparency
      </Header>
      <Paragraph content={paragraphs[4]} />
      <Header as="h2" textAlign="center">
        References
      </Header>
      <Paragraph content={paragraphs[5]} />
      <Paragraph content={paragraphs[6]} />
      <IconButtonContentLink
        inverted
        className="center"
        iconName="book"
        buttonColor="white"
        state={supplementalContent}
        setState={setSupplementalContent}
        newStateContent={{
          show: true,
          expand: true,
          supplementalContentSection: {
            ...supplementalContent.supplementalContentSection,
            subsection: "FunFacts",
          },
        }}
      />
      <Paragraph content={paragraphs[7]} />
    </Container>
  );
}

export default Methodology;
`;

const methodologySupplementalContainerCode = `import { Grid } from "semantic-ui-react";
import MethodologyMenu from "./MethodologyMenu";
import MethodologyCode from "./MethodologyCode";
import MethodologyFunFacts from "./MethodologyFunFacts";

export default function MethodologySupplementalContainer({
  supplementalContent,
  setSupplementalContent,
}) {
  const { subsection: componentKey } =
    supplementalContent.supplementalContentSection;
  return (
    <Grid.Row>
      <Grid.Row>
        <MethodologyMenu
          methodologyMenuSelection={componentKey}
          setSupplementalContent={setSupplementalContent}
        />
      </Grid.Row>
      <Grid.Row>
        {componentKey === "Code" ? (
          <MethodologyCode />
        ) : (
          <MethodologyFunFacts />
        )}
      </Grid.Row>
    </Grid.Row>
  );
}
`;

const methodologyMenuCode = `import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class MethodologyMenu extends Component {
  render() {
    const activeItem = this.props.methodologyMenuSelection;

    return (
      <Menu fluid tabular widths={2}>
        <Menu.Item
          name="FunFacts"
          active={activeItem === "FunFacts"}
          onClick={(e, state) => {
            this.props.setSupplementalContent({
              show: true,
              name: "Home.Methodology",
              supplementalContentSection: {
                name: "Home.Methodology",
                subsection: "FunFacts",
              },
            });
          }}
        />
        <Menu.Item
          name="Code"
          active={activeItem === "Code"}
          onClick={(e, state) => {
            this.props.setSupplementalContent({
              show: true,
              name: "Home.Methodology",
              supplementalContentSection: {
                name: "Home.Methodology",
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

const methodologyFunFactsCode = `export default function FunFacts() {
  return (
    <div>
      <h1>Fun Facts</h1>
    </div>
  );
}
`;

const methodologyCodeCode = `export default function MethodologyCode() {
  return (
    <Segment style={{ overflow: "auto", maxHeight: 200 }}>
      <Grid.Row>
        <Header as="h2">
          File Structure{" "}
          <IconButtonLink
            size="large"
            iconName="github"
            url={githubHomeMethodologyUrl}
          />
        </Header>
        <MethodologyFolderTree />
        <Header as="h2">Simplified Component Hierarchy</Header>
        <MethodologyComponentTree />
        <Header as="h2">Main Content Code</Header>

        <Header as="h3">Methodology.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={methodologyCode}
        />
      </Grid.Row>
      <Grid.Row>
        <Header as="h2">Supplemental Content Code</Header>
        <Header as="h3">MethodologySupplementalContainer.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={methodologySupplementalContainerCode}
        />
        <Header as="h3">MethodologyMenu.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={methodologyMenuCode}
        />
        <Header as="h3">MethodologyFunFacts.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={methodologyFunFactsCode}
        />
        <Header as="h3">MethodologyCode.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={methodologyCodeCode}
        />
        <Header as="h3">MethodologyFolderTreeCode.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={methodologyFolderTreeCode}
        />
        <Header as="h3">MethodologyComponentTreeCode.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={methodologyComponentTreeCode}
        />
      </Grid.Row>
    </Segment>
  );
}
`;

const methodologyFolderTreeCode = `export default function MethodologyCode() {
  return (
    <Segment style={{ overflow: "auto", maxHeight: 200 }}>
      <Grid.Row>
        <Header as="h2">
          File Structure{" "}
          <IconButtonLink
            size="large"
            iconName="github"
            url={githubHomeMethodologyUrl}
          />
        </Header>
        <MethodologyFolderTree />
        <Header as="h2">Simplified Component Hierarchy</Header>
        <MethodologyComponentTree />
        <Header as="h2">Main Content Code</Header>

        <Header as="h3">Methodology.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={methodologyCode}
        />
      </Grid.Row>
      <Grid.Row>
        <Header as="h2">Supplemental Content Code</Header>
        <Header as="h3">MethodologySupplementalContainer.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={methodologySupplementalContainerCode}
        />
        <Header as="h3">MethodologyMenu.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={methodologyMenuCode}
        />
        <Header as="h3">MethodologyFunFacts.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={methodologyFunFactsCode}
        />
        <Header as="h3">MethodologyCode.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={methodologyCodeCode}
        />
        <Header as="h3">MethodologyFolderTreeCode.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={methodologyFolderTreeCode}
        />
        <Header as="h3">MethodologyComponentTreeCode.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={methodologyComponentTreeCode}
        />
      </Grid.Row>
    </Segment>
  );
}


const MethodologyFolderTree = () => {
  return (
    <FolderTree data={relativeFolderStructure} showCheckbox={false} readOnly />
  );
};

export default MethodologyFolderTree;
`;

const methodologyComponentTreeCode = `import FolderTree from "react-folder-tree";
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
              name: "MethodologySupplementalContainer",
              children: [
                { name: "MethodologyMenu" },
                { name: "MethodologySupplementalContentRow" },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const MethodologyComponentTree = () => {
  return (
    <FolderTree
      data={componentStructure}
      iconComponents={{ FileIcon, FolderIcon }}
      showCheckbox={false}
      readOnly
    />
  );
};

export default MethodologyComponentTree;
`;

export default function MethodologyCode() {
  return (
    <Segment style={{ overflow: "auto", maxHeight: "60vh" }}>
      <Grid.Row>
        <Header as="h2">
          File Structure{" "}
          <IconButtonLink
            size="large"
            iconName="github"
            url={githubHomeMethodologyUrl}
          />
        </Header>
        <MethodologyFolderTree />
        <Header as="h2">Simplified Component Hierarchy</Header>
        <MethodologyComponentTree />
        <Header as="h2">Main Content Code</Header>

        <Header as="h3">Methodology.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={methodologyCode}
        />
      </Grid.Row>
      <Grid.Row>
        <Header as="h2">Supplemental Content Code</Header>
        <Header as="h3">MethodologySupplementalContainer.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={methodologySupplementalContainerCode}
        />
        <Header as="h3">MethodologyMenu.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={methodologyMenuCode}
        />
        <Header as="h3">MethodologyFunFacts.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={methodologyFunFactsCode}
        />
        <Header as="h3">MethodologyCode.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={methodologyCodeCode}
        />
        <Header as="h3">MethodologyFolderTreeCode.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={methodologyFolderTreeCode}
        />
        <Header as="h3">MethodologyComponentTreeCode.js</Header>
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={methodologyComponentTreeCode}
        />
      </Grid.Row>
    </Segment>
  );
}
