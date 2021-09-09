import Intro from "../ContentSections/Home/Intro/Intro";
import Contact from "../ContentSections/Home/Contact/Contact";
import Methodology from "../ContentSections/Home/Methodology/Methodology";
import Navigation from "../ContentSections/Home/Navigation/Navigation";
import HomeTopMenu from "../Menus/HomeTopMenu/HomeTopMenu";
import References from "../References/References";
import MethodologySupplementalContainer from "../ContentSections/Home/Methodology/SupplementalContent/MethodologySupplementalContainer";
import IntroSupplementalContainer from "../ContentSections/Home/Intro/SupplementalContent/IntroSupplementalContainer";
import ContactSupplementalContainer from "../ContentSections/Home/Contact/SupplementalContent/ContactSupplementalContainer";
import NavigationSupplementalContainer from "../ContentSections/Home/Navigation/SupplementalContent/NavigationSupplementalContainer";
import OverviewContainer from "../ContentSections/SiteCode/StartHere/Overview/OverviewContainer";
import NoSupplementalContent from "../common/components/NoSupplementalContent/NoSupplementalContent";

const getSectionContent = (mainContentName, mainContentSection) => {
  if (!mainContentName || !mainContentSection) return null;

  switch (mainContentName) {
    case "Home":
      switch (mainContentSection.name) {
        case "Home.Introduction":
          return Intro;
        case "Home.Methodology":
          return Methodology;
        case "Home.Navigation":
          return Navigation;
        case "Home.Contact":
          return Contact;
        default:
          return Intro;
      }
    case "Resources":
      switch (mainContentSection.name) {
        case "Resources.References":
          return References;
        default:
          return References;
      }
    case "Overview":
      return OverviewContainer;
    default:
      return Intro;
  }
};

const getSupplementalSectionContent = (
  supplementalContentName,
  supplementalContentSection
) => {
  if (!supplementalContentName || !supplementalContentSection) return null;

  switch (supplementalContentName) {
    case "Home.Introduction":
      return IntroSupplementalContainer;
    case "Home.Methodology":
      return MethodologySupplementalContainer;
    case "Home.Navigation":
      return NavigationSupplementalContainer;
    case "Home.Contact":
      return ContactSupplementalContainer;
    case "Resources.References":
      return NoSupplementalContent;
    case "Overview.Introduction":
      return Intro;
    default:
      return Intro;
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

export {
  getSectionContent,
  getTopMenu,
  getSupplementalSectionContent,
  calculateMainContentHeight,
};
