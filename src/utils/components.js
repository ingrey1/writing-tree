import Introduction from "../ContentSections/Home/Introduction/Introduction";
import ContactMe from "../ContentSections/Home/ContactMe/ContactMe";
import Methodology from "../ContentSections/Home/Methodology/Methodology";
import UsingThisSite from "../ContentSections/Home/UsingThisSite/UsingThisSite";
import HomeTopMenu from "../Menus/HomeTopMenu/HomeTopMenu";

const getSectionContent = (mainContentName, mainContentSection) => {
  if (!mainContentName || !mainContentSection) return null;

  switch (mainContentName) {
    case "Home":
      switch (mainContentSection.name) {
        case "Introd":
          return Introduction;
        case "Methodology":
          return Methodology;
        case "Navigation":
          return UsingThisSite;
        case "Contact":
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

const calculateMainContentHeight = (showSupplementalContent) => {
  if (window.screen.width <= 650 && showSupplementalContent) return "50vh";
  else if (showSupplementalContent) return "60vh";
  else if (window.screen.width <= 650) return "90vh";
  else return "100vh";
};

export { getSectionContent, getTopMenu, calculateMainContentHeight };
