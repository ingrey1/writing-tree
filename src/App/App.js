import { useState } from "react";
import { Grid } from "semantic-ui-react";
import "./App.css";
import OverviewContainer from "../ContentSections/SiteCode/StartHere/Overview/OverviewContainer";
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

import { calculateMainContentHeight } from "../utils/components";
import {
  isLargeScreen,
  fullHorizontalSize,
  contentColumnSize,
} from "../common/constants";

const mainContentMappings = {
  Overview: OverviewContainer,
  Home: HomeContainer,
  Resources: ResourcesContainer,
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
  "Overview.Introduction": NoSupplementalContent,
  "Overview.ReactPrimer": NoSupplementalContent,
  "Overview.HtmlPrimer": NoSupplementalContent,
  "Overview.Resources": NoSupplementalContent,
  "Resources.References": NoSupplementalContent,
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
    mainContentSection: { name: "Introduction" },
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

  return (
    <Grid celled="internally">
      <Grid.Row>
        {isLargeScreen && (
          <MainMenuColumn
            mainContent={mainContent}
            setMainContent={setMainContent}
            supplementalContent={supplementalContent}
            setSupplementalContent={setSupplementalContent}
          />
        )}
        <Grid.Column
          width={isLargeScreen ? contentColumnSize : fullHorizontalSize}
          style={{ height: "100vh" }}
        >
          <Grid.Row
            style={{
              height: supplementalContent.show
                ? supplementalContent.expand
                  ? "0vh"
                  : "60vh"
                : "100vh",
              overflowX: "hidden",
            }}
          >
            <Grid.Column
              width={isLargeScreen ? contentColumnSize : fullHorizontalSize}
              style={{
                overflow: "auto",
                overflowX: "hidden",
                maxHeight: calculateMainContentHeight(supplementalContent.show),
                height: calculateMainContentHeight(supplementalContent.show),
              }}
            >
              {window.screen.width <= 650 && (
                <Grid.Column
                  width={3}
                  style={{ overflow: "auto", height: "10vh" }}
                >
                  <ToggleSupplementalContentAction
                    supplementalContent={supplementalContent}
                    setSupplementalContent={setSupplementalContent}
                  />
                  <Grid.Row style={{ height: "10vh" }}>
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
            <div>
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
            </div>
          )}
        </Grid.Column>
        {isLargeScreen && (
          <ActionsColumn
            supplementalContent={supplementalContent}
            setSupplementalContent={setSupplementalContent}
          />
        )}
      </Grid.Row>
    </Grid>
  );
}

export default App;
