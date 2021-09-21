import { Menu } from "semantic-ui-react";
import { generateMenuItems } from "../../../../utils/components";

const itemNames = ["Visualization", "Document"];
const newInnerContents = ["Visualization", "Document"].map((name) => {
  return { name: "BookHeroApi", subsection: name };
});

const newOuterContents = { name: "WebApisExamples" };

const newSupplementalInnerContents = itemNames.map((name) => {
  return {
    name: "BookHeroApi",
    show: false,
    expand: false,
    subsection: name,
    subSubsection: "Code",
  };
});

const newSupplementalOuterContents = { show: false, name: "WebApisExamples" };

const mapSectionToMenuName = (subsection) => {
  const mappings = {
    Visualization: "Visualization",
    Document: "Document",
  };

  return mappings[subsection] || subsection;
};

export default function HtmlPrimerMenu({
  mainContent,
  mainContent: {
    mainContentSection: { subsection },
  },
  setMainContent,
  supplementalContent,
  setSupplementalContent,
}) {
  const activeItem = mapSectionToMenuName(subsection);

  return (
    <Menu fluid widths={3}>
      {generateMenuItems({
        activeItem,
        itemNames,
        newInnerContents,
        newOuterContents,
        mainContent,
        setMainContent,
        supplementalContent,
        setSupplementalContent,
        newSupplementalInnerContents,
        newSupplementalOuterContents,
      })}
    </Menu>
  );
}
