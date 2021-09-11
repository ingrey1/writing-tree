import { generateMenuItem } from "../utils/components";

const generateHomeMenuItem = ({
  componentType,
  activeItem,
  setMainContent,
  mainContent,
  supplementalContent,
  setSupplementalContent,
} = {}) => {
  return generateMenuItem({
    componentType,
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
  componentType,
  activeItem,
  setMainContent,
  mainContent,
  supplementalContent,
  setSupplementalContent,
} = {}) => {
  return generateMenuItem({
    activeItem,
    componentType,
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

const generateReferencesMenuItem = ({
  componentType,
  activeItem,
  setMainContent,
  mainContent,
  supplementalContent,
  setSupplementalContent,
} = {}) => {
  return generateMenuItem({
    componentType,
    activeItem,
    itemName: "References",
    newInnerContents: { name: "References" },
    newOuterContents: { name: "Resources" },
    setContent: setMainContent,
    content: mainContent,
    supplementalContent,
    setSupplementalContent,
    newSupplementalInnerContents: {
      name: "References",
      subsection: "NoSupplementalContent",
    },
    newSupplementalOuterContents: { show: false, name: "Resources" },
  });
};

export {
  generateHomeMenuItem,
  generateOverviewMenuItem,
  generateReferencesMenuItem,
};
