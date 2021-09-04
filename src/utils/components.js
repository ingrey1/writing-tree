import Introduction from "../Introduction/Introduction";
import ContactMe from "../ContactMe/ContactMe";
import Methodology from "../Methodology/Methodology";
import UsingThisSite from "../UsingThisSite/UsingThisSite";
import HomeTopMenu from "../HomeTopMenu/HomeTopMenu";

const getSectionContent = (mainContentName, mainContentSection) => {
  if (!mainContentName || !mainContentSection) return null;

  switch (mainContentName) {
    case "Home":
      switch (mainContentSection.name) {
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
    default:
      return "Home";
  }
};

const getTopMenu = (contentName) => {
  switch (contentName) {
    case "Home":
      return HomeTopMenu;
    default:
      return HomeTopMenu;
  }
};

export { getSectionContent, getTopMenu };
