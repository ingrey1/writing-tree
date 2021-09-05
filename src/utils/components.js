import Intro from "../ContentSections/Home/Intro/Intro";
import Contact from "../ContentSections/Home/Contact/Contact";
import Methodology from "../ContentSections/Home/Methodology/Methodology";
import Navigation from "../ContentSections/Home/Navigation/Navigation";
import HomeTopMenu from "../Menus/HomeTopMenu/HomeTopMenu";

const getSectionContent = (mainContentName, mainContentSection) => {
  if (!mainContentName || !mainContentSection) return null;

  switch (mainContentName) {
    case "Home":
      switch (mainContentSection.name) {
        case "Intro":
          return Intro;
        case "Methodology":
          return Methodology;
        case "Navigation":
          return Navigation;
        case "Contact":
          return Contact;
        default:
          return Intro;
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
