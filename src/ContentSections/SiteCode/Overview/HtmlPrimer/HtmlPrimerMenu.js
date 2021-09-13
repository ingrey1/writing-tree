import { Menu } from "semantic-ui-react";
import { generateMenuItems } from "../../../../utils/components";

const itemNames = ["HTML", "CSS", "Javascript"];
const newInnerContents = ["Html", "Css", "Javascript"].map((name) => {
  return { name: "HtmlPrimer", subsection: name };
});

const newOuterContents = { name: "Overview" };

const newSupplementalInnerContents = itemNames.map((name) => {
  return {
    name: "HtmlPrimer",
    show: false,
    expand: false,
    subsection: name,
    subSubsection: "Code",
  };
});

const newSupplementalOuterContents = { show: false, name: "Overview" };

const mapSectionToMenuName = (subsection) => {
  const mappings = {
    Css: "CSS",
    Html: "HTML",
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
