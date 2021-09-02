import Introduction from "../Introduction/Introduction";
import ContactMe from "../ContactMe/ContactMe";
import Methodology from "../Methodology/Methodology";
import UsingThisSite from "../UsingThisSite/UsingThisSite";

const getMainContentProps = (mainContentSection) => {
  if (!mainContentSection) return null;

  const { name } = mainContentSection;

  switch (name) {
    case "Introduction":
      return {};
    default:
      return {};
  }
};

const getMainContentComponent = (mainContentComponentName) => {
  if (!mainContentComponentName) return null;

  switch (mainContentComponentName) {
    case "Introduction":
      return Introduction;
    case "Methodology":
      return Methodology;
    case "UsingThisSite":
      return UsingThisSite;
    case "ContactMe":
      return ContactMe;
    default:
      return Introduction;
  }
};

export { getMainContentComponent, getMainContentProps };
