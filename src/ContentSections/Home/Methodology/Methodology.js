import { Header, Container } from "semantic-ui-react";
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
