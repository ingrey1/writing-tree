import { generateMenuItem } from "../utils/components";

const generateHomeMenuItem = ({
  activeItem,
  setMainContent,
  mainContent,
  supplementalContent,
  setSupplementalContent,
} = {}) => {
  return generateMenuItem({
    componentType: "Dropdown",
    activeItem,
    itemName: "Home",
    newInnerContents: { name: "Introduction" },
    newOuterContents: { name: "Home" },
    setContent: setMainContent,
    content: mainContent,
    supplementalContent,
    setSupplementalContent,
    newSupplementalInnerContents: {
      name: "Introduction",
      subsection: "Code",
    },
    newSupplementalOuterContents: { show: false, name: "Home" },
  });
};

const generateOverviewMenuItem = ({
  activeItem,
  setMainContent,
  mainContent,
  supplementalContent,
  setSupplementalContent,
} = {}) => {
  return generateMenuItem({
    activeItem,
    itemName: "Overview",
    newInnerContents: { name: "Introduction" },
    newOuterContents: { name: "Overview" },
    setContent: setMainContent,
    content: mainContent,
    supplementalContent,
    setSupplementalContent,
    newSupplementalInnerContents: {
      name: "Introduction",
      subsection: "Code",
    },
    newSupplementalOuterContents: { show: false, name: "Overview" },
  });
};

export { generateHomeMenuItem, generateOverviewMenuItem };
