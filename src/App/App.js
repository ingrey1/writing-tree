import { useState } from "react";
import { Grid } from "semantic-ui-react";
import "./App.css";
import OverviewContainer from "../ContentSections/SiteCode/StartHere/Overview/OverviewContainer";
import HomeContainer from "../ContentSections/Home/HomeContainer";
import IntroSupplementalContainer from "../ContentSections/Home/Intro/SupplementalContent/IntroSupplementalContainer";
import MethodologySupplementalContainer from "../ContentSections/Home/Methodology/SupplementalContent/MethodologySupplementalContainer";
import NavigationSupplementalContainer from "../ContentSections/Home/Navigation/SupplementalContent/NavigationSupplementalContainer";
import ContactSupplementalContainer from "../ContentSections/Home/Contact/SupplementalContent/ContactSupplementalContainer";
import MainMenuColumn from "../layout/MainMenuColumn";
import ActionsColumn from "../layout/ActionsColumn";
import MobileMainMenu from "../Menus/MobileMainMenu/MobileMainMenu";
import ToggleSupplementalContentAction from "../Actions/ToggleSupplementalContentAction";
import { calculateMainContentHeight } from "../utils/components";
import {
  isLargeScreen,
  fullHorizontalSize,
  contentColumnSize,
} from "../common/constants";

const MainComponent = (mainContent, props) => {
  const { name } = mainContent;
  switch (name) {
    case "Overview":
      return <OverviewContainer mainContent={mainContent} {...props} />;
    case "Home":
      return <HomeContainer mainContent={mainContent} {...props} />;
    default:
      return <HomeContainer mainContent={mainContent} {...props} />;
  }
};

const SupplementalComponent = (supplementalContent, props) => {
  const {
    name,
    supplementalContentSection: { name: section },
  } = supplementalContent;

  switch (name) {
    case "Home":
      switch (section) {
        case "Introduction":
          return (
            <IntroSupplementalContainer
              supplementalContent={supplementalContent}
              {...props}
            />
          );
        case "Methodology":
          return (
            <MethodologySupplementalContainer
              supplementalContent={supplementalContent}
              {...props}
            />
          );
        case "Navigation":
          return (
            <NavigationSupplementalContainer
              supplementalContent={supplementalContent}
              {...props}
            />
          );
        case "Contact":
          return (
            <ContactSupplementalContainer
              supplementalContent={supplementalContent}
              {...props}
            />
          );
        default:
          return (
            <IntroSupplementalContainer
              supplementalContent={supplementalContent}
              {...props}
            />
          );
      }

    case "Overview":
      return (
        <HomeContainer supplementalContent={supplementalContent} {...props} />
      );
    default:
      return (
        <HomeContainer SupplementalContent={supplementalContent} {...props} />
      );
  }
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
                  ? "5vh"
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
          {supplementalContent.show &&
            SupplementalComponent(supplementalContent, {
              setSupplementalContent,
              mainContent,
              setMainContent,
            })}
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
