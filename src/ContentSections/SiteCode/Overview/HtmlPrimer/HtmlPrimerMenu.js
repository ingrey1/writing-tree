import { Menu } from "semantic-ui-react";
import { generateMenuItems } from "../../../../utils/components";

const itemNames = ["Html", "Css", "Javascript"];
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

export default function HtmlPrimerMenu({
  mainContent,
  mainContent: {
    mainContentSection: { subsection },
  },
  setMainContent,
  supplementalContent,
  setSupplementalContent,
}) {
  const activeItem = subsection;

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
