import { useState } from "react";
import { Grid } from "semantic-ui-react";
import "./App.css";
import OverviewContainer from "../ContentSections/SiteCode/Overview/OverviewContainer";
import HomeContainer from "../ContentSections/Home/HomeContainer";
import ResourcesContainer from "../ContentSections/Resources/ResourcesContainer";
import IntroSupplementalContainer from "../ContentSections/Home/Intro/SupplementalContent/IntroSupplementalContainer";
import MethodologySupplementalContainer from "../ContentSections/Home/Methodology/SupplementalContent/MethodologySupplementalContainer";
import NavigationSupplementalContainer from "../ContentSections/Home/Navigation/SupplementalContent/NavigationSupplementalContainer";
import ContactSupplementalContainer from "../ContentSections/Home/Contact/SupplementalContent/ContactSupplementalContainer";
import NoSupplementalContent from "../common/components/NoSupplementalContent/NoSupplementalContent";
import MainMenuColumn from "../layout/MainMenuColumn";
import ActionsColumn from "../layout/ActionsColumn";
import MobileMainMenu from "../Menus/MobileMainMenu/MobileMainMenu";
import ToggleSupplementalContentAction from "../Actions/ToggleSupplementalContentAction";
import IconButtonExpand from "../common/components/IconButtonExpand";
import OverviewIntroSupplementalCode from "../ContentSections/SiteCode/Overview/Intro/SupplementalContent/IntroSupplementalContainer";
import ExamplesContainer from "../ContentSections/WebApis/Examples/ExamplesContainer";

import {
  isLargeScreen,
  fullHorizontalSize,
  contentColumnSize,
} from "../common/constants";

const mainContentMappings = {
  Overview: OverviewContainer,
  Home: HomeContainer,
  Resources: ResourcesContainer,
  WebApisExamples: ExamplesContainer,
};

const MainComponent = (mainContent, props) => {
  const { name } = mainContent;
  const Component = mainContentMappings[name];
  return <Component mainContent={mainContent} {...props} />;
};

const supplementalContentMappings = {
  "Home.Introduction": IntroSupplementalContainer,
  "Home.Methodology": MethodologySupplementalContainer,
  "Home.Navigation": NavigationSupplementalContainer,
  "Home.Contact": ContactSupplementalContainer,
  "Overview.Introduction": OverviewIntroSupplementalCode,
  "Overview.ReactPrimer": NoSupplementalContent,
  "Overview.HtmlPrimer": NoSupplementalContent,
  "Overview.Resources": NoSupplementalContent,
  "Resources.References": NoSupplementalContent,
  "WebApisExamples.BookHeroApi": NoSupplementalContent,
};

const SupplementalComponent = (supplementalContent, props) => {
  const {
    name,
    supplementalContentSection: { name: supplementalSectionName },
  } = supplementalContent;

  const Component =
    supplementalContentMappings[`${name}.${supplementalSectionName}`];

  return <Component supplementalContent={supplementalContent} {...props} />;
};

function App() {
  const [mainContent, setMainContent] = useState({
    name: "Home",
    mainContentSection: {
      name: "Introduction",
      subsection: "Code",
    },
  });

  const [supplementalContent, setSupplementalContent] = useState({
    show: false,
    expand: false,
    name: "Home",
    supplementalContentSection: {
      name: "Introduction",
      subsection: "Code",
    },
  });

  const mainContentRowStyles = {
    height: supplementalContent.show
      ? supplementalContent.expand
        ? "0vh"
        : "60vh"
      : "100vh",
  };

  const mobileMainMenuStyles = {
    maxHeight:
      supplementalContent.show && supplementalContent.expand ? "0vh" : "10vh",
  };

  const mainContentColStyles = mainContentRowStyles;

  return (
    <Grid celled="internally">
      <Grid.Row className="outer-most-content-row">
        {isLargeScreen && (
          <MainMenuColumn
            className="main-menu-col"
            mainContent={mainContent}
            setMainContent={setMainContent}
            supplementalContent={supplementalContent}
            setSupplementalContent={setSupplementalContent}
          />
        )}
        <Grid.Column
          className="all-content-col"
          width={isLargeScreen ? contentColumnSize : fullHorizontalSize}
        >
          <Grid.Row className="main-content-row" style={mainContentRowStyles}>
            <Grid.Column
              className="main-content-col"
              width={isLargeScreen ? contentColumnSize : fullHorizontalSize}
              style={mainContentColStyles}
            >
              {window.screen.width <= 650 && (
                <Grid.Column
                  className="mobile-main-menu-col"
                  width={3}
                  style={mobileMainMenuStyles}
                >
                  <ToggleSupplementalContentAction
                    supplementalContent={supplementalContent}
                    setSupplementalContent={setSupplementalContent}
                  />
                  <Grid.Row className="mobile-main-menu-col">
                    <MobileMainMenu
                      mainContent={mainContent}
                      setMainContent={setMainContent}
                      supplementalContent={supplementalContent}
                      setSupplementalContent={setSupplementalContent}
                    />
                  </Grid.Row>
                </Grid.Column>
              )}
              {MainComponent(mainContent, {
                setMainContent,
                supplementalContent,
                setSupplementalContent,
              })}
            </Grid.Column>
          </Grid.Row>
          {supplementalContent.show && (
            <Grid.Row className="supplemental-content-row">
              <IconButtonExpand
                inverted
                iconName="expand"
                setSupplementalContent={setSupplementalContent}
                supplementalContent={supplementalContent}
              />
              {SupplementalComponent(supplementalContent, {
                setSupplementalContent,
                mainContent,
                setMainContent,
              })}
            </Grid.Row>
          )}
        </Grid.Column>
        {isLargeScreen && (
          <ActionsColumn
            className="actions-column"
            supplementalContent={supplementalContent}
            setSupplementalContent={setSupplementalContent}
          />
        )}
      </Grid.Row>
    </Grid>
  );
}

export default App;
