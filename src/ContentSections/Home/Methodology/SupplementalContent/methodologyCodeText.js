const code = {
  methodology: `import { Header, Container } from "semantic-ui-react";
  import "./Methodology.css";
  import { paragraphs } from "./text";
  import Paragraph from "../../../common/components/Paragraph/Paragraph";
  import IconButtonContentLink from "../../../common/components/IconButtonContentLink";
  
  function Methodology({ supplementalContent, setSupplementalContent }) {
    return (
      <Container text style={{ textSize: "1.2em" }}>
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
  `,
  methodologyComponentTree: `import FolderTree from "react-folder-tree";
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
  `,
  methodologyFolderTree: `import FolderTree from "react-folder-tree";
  import "react-folder-tree/dist/style.css";
  
  const relativeFolderStructure = {
    name: "Methodology",
    isOpen: false,
    children: [
      {
        name: "SupplementalContent",
        isOpen: false,
        children: [
          { name: "MethodologyCode.js" },
          { name: "MethodologyFolderTree.js" },
          { name: "MethodologyComponentTree.js" },
          { name: "funFactsText.js" },
          { name: "methdologyCodeText.js"},
          { name: "MethodologyFunFacts.js" },
          { name: "MethodologyMenu.js" },
          { name: "MethodologySupplementalContainer.js" },
        ],
      },
      { name: "Methodology.css" },
      { name: "Methodology.js" },
      { name: "text.js" },
    ],
  };
  
  const MethodologyFolderTree = () => {
    return (
      <FolderTree data={relativeFolderStructure} showCheckbox={false} readOnly />
    );
  };
  
  export default MethodologyFolderTree;
  `,
  methodologyFunFacts: `import { Container, Header, Message } from "semantic-ui-react";
  import IconButtonLink from "../../../../common/components/IconButtonLink";
  import Reference from "../../../../common/components/Reference/Reference";
  import Paragraph from "../../../../common/components/Paragraph/Paragraph";
  import { paragraphs } from "./funFactsText";
  import { home } from "../../../../common/data/references";
  import {
    goodCaloriesBadCaloriesOnAmazon,
    philosophyScientificRepresentation,
  } from "../../../../common/constants";
  
  import { generateArrayFromRange } from "../../../../utils/general";
  
  const {
    methodology: {
      funFacts: { calories, philosophyScience },
    },
  } = home;
  
  const amazonLink = (
    <IconButtonLink
      inverted
      iconName="amazon"
      url={goodCaloriesBadCaloriesOnAmazon}
      buttonColor="white"
      buttonSize="large"
      iconSize="large"
    />
  );
  
  const philosophyLink = (
    <IconButtonLink
      inverted
      iconName="tree"
      url={philosophyScientificRepresentation}
      buttonColor="white"
      buttonSize="large"
      iconSize="large"
    />
  );
  
  const paragraphs2to6 = generateArrayFromRange(2, 6, 1).map((key) => (
    <Paragraph key={key} content={paragraphs[key]} />
  ));
  
  const paragraphs8To13 = generateArrayFromRange(8, 13, 1).map((key) => (
    <Paragraph key={key} content={paragraphs[key]} />
  ));
  
  const paragraphs14To16 = generateArrayFromRange(14, 16, 1).map((key) => (
    <Paragraph key={key} content={paragraphs[key]} />
  ));
  
  const paragraphs18To20 = generateArrayFromRange(18, 20, 1).map((key) => (
    <Paragraph key={key} content={paragraphs[key]} />
  ));
  
  const paragraphs29To31 = generateArrayFromRange(29, 31, 1).map((key) => (
    <Paragraph key={key} content={paragraphs[key]} />
  ));
  
  const paragraphs23To28 = generateArrayFromRange(23, 28, 1).map((key) => (
    <Paragraph key={key} content={paragraphs[key]} />
  ));
  
  export default function FunFacts() {
    return (
      <Container text style={{ textSize: "1.2em" }}>
        <p></p>
        <Header as="h3">Appeal to Scientific Authority: A Cautionary Tale</Header>
        <Paragraph content={paragraphs[1]} />
        <Paragraph
          content={
            <i>
              Good Calories, Bad Calories: Fats, Carbs, and the Controversial
              Science of Diet and Health
            </i>
          }
          endComponent={amazonLink}
        />
        {paragraphs2to6}
        <Paragraph content={paragraphs[7]} endComponent={philosophyLink} />
        {paragraphs8To13}
        <Message>{paragraphs14To16}</Message>
        <Paragraph content={paragraphs[17]} />
        From Chapter 2:
        <Message>{paragraphs18To20}</Message>
        <Paragraph content={paragraphs[21]} />
        <Paragraph content={paragraphs[22]} />
        From chapter 5:
        <Message>{paragraphs23To28}</Message>
        {paragraphs29To31}
        <Header as="h3">References</Header>
        <Reference data={calories}></Reference>
        <p></p>
        <Reference data={philosophyScience}></Reference>
      </Container>
    );
  }
  `,
  methodologyMenu: `import { Menu } from "semantic-ui-react";
  import { generateMenuItems } from "../../../../utils/components";
  
  const itemNames = ["Code", "FunFacts"];
  const newSupplementalInnerContents = itemNames.map((name) => {
    return { name: "Methodology", subsection: name };
  });
  
  export default function MethodologyMenu({
    supplementalContent,
    supplementalContent: {
      supplementalContentSection: { subsection },
    },
    setSupplementalContent,
  }) {
    const activeItem = subsection;
  
    return (
      <Menu fluid tabular widths={2}>
        {generateMenuItems({
          activeItem,
          itemNames,
          supplementalContent,
          setSupplementalContent,
          newSupplementalInnerContents: newSupplementalInnerContents,
          newSupplementalOuterContents: {
            show: true,
            name: "Home",
          },
        })}
      </Menu>
    );
  }
  `,
  methodologySupplementalContainer: `import { Grid } from "semantic-ui-react";
  import MethodologyMenu from "./MethodologyMenu";
  import MethodologySupplementalContentRow from "./MethodologySupplementalContentRow";
  
  export default function MethodologySupplementalContainer({
    supplementalContent,
    setSupplementalContent,
  }) {
    return (
      <Grid.Row>
        <Grid.Row>
          <MethodologyMenu
            setSupplementalContent={setSupplementalContent}
            supplementalContent={supplementalContent}
          />
        </Grid.Row>
        <MethodologySupplementalContentRow
          supplementalContent={supplementalContent}
        />
      </Grid.Row>
    );
  }
  `,
  methodologySupplementalContentRow: `import { Grid } from "semantic-ui-react";
  import MethodologyCode from "./MethodologyCode";
  import MethodologyFunFacts from "./MethodologyFunFacts";
  export default function MethodologyContentRow({
    supplementalContent: {
      expand,
      supplementalContentSection: { subsection },
    },
  }) {
    return (
      <Grid.Row style={{ overflow: "auto", maxHeight: expand ? "80vh" : "40vh" }}>
        {subsection === "Code" ? <MethodologyCode /> : <MethodologyFunFacts />}
      </Grid.Row>
    );
  }
  `,
  methodologyCode: `import { CodeBlock } from "@atlaskit/code";
  import { Grid, Header, Container } from "semantic-ui-react";
  import MethodologyFolderTree from "./MethodologyFolderTree";
  import MethodologyComponentTree from "./MethodologyComponentTree";
  import IconButtonLink from "../../../../common/components/IconButtonLink";
  import { githubHomeMethodologyUrl } from "../../../../common/constants";
  import { code } from "./methodologyCodeText";
  
  export default function MethodologyCode() {
    return (
      <Container text>
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
            text={code.methodology}
          />
        </Grid.Row>
        <Grid.Row>
          <Header as="h2">Supplemental Content Code</Header>
          <Header as="h3">MethodologySupplementalContentRow.js</Header>
          <CodeBlock
            language="jsx"
            showLineNumbers={true}
            text={code.methodologySupplementalContentRow}
          />
          <Header as="h3">MethodologySupplementalContainer.js</Header>
          <CodeBlock
            language="jsx"
            showLineNumbers={true}
            text={code.methodologySupplementalContainer}
          />
          <Header as="h3">MethodologyMenu.js</Header>
          <CodeBlock
            language="jsx"
            showLineNumbers={true}
            text={code.methodologyMenu}
          />
          <Header as="h3">MethodologyFunFacts.js</Header>
          <CodeBlock
            language="jsx"
            showLineNumbers={true}
            text={code.methodologyFunFacts}
          />
          <Header as="h3">MethodologyCode.js</Header>
          <CodeBlock
            language="jsx"
            showLineNumbers={true}
            text={code.methodologyCode}
          />
          <Header as="h3">MethodologyFolderTree.js</Header>
          <CodeBlock
            language="jsx"
            showLineNumbers={true}
            text={code.methodologyFolderTree}
          />
          <Header as="h3">MethodologyComponentTree.js</Header>
          <CodeBlock
            language="jsx"
            showLineNumbers={true}
            text={code.methodologyComponentTree}
          />
        </Grid.Row>
      </Container>
    );
  }
  `,
};

export { code };
