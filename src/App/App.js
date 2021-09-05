import { useState } from "react";
import { Grid } from "semantic-ui-react";
import "./App.css";
import WritingTreeHeader from "../common/WritingTreeHeader/WritingTreeHeader";
import MainMenu from "../Menus/MainMenu/MainMenu";
import MobileMainMenu from "../Menus/MobileMainMenu/MobileMainMenu";
import MainContent from "../MainContent/MainContent";
import ToggleSupplementalContentAction from "../Actions/ToggleSupplementalContentAction";
import {
  getSectionContent,
  getTopMenu,
  calculateMainContentHeight,
} from "../utils";

function App() {
  const [mainContent, setMainContent] = useState({
    name: "Home",
    mainContentSection: { name: "Introduction" },
    showTopMenu: true,
  });

  const [supplementalContent, setSupplementalContent] = useState({
    show: false,
  });

  return (
    <Grid celled="internally" style={{ height: "100vh" }}>
      <Grid.Row>
        {window.screen.width >= 650 && (
          <Grid.Column width={3} style={{ overflow: "auto", height: "100%" }}>
            <Grid.Row style={{ height: "20%" }}>
              <WritingTreeHeader />
            </Grid.Row>
            <Grid.Row style={{ height: "80%" }}>
              <MainMenu setMainContent={setMainContent} />
            </Grid.Row>
          </Grid.Column>
        )}
        <Grid.Column
          width={window.screen.width >= 650 ? 10 : 16}
          style={{ height: "100vh" }}
        >
          <Grid.Row
            style={{ height: supplementalContent.show ? "80vh" : "100vh" }}
          >
            <Grid.Column
              width={window.screen.width >= 650 ? 10 : 16}
              style={{
                overflow: "auto",
                maxHeight: calculateMainContentHeight(supplementalContent.show),
                height: calculateMainContentHeight(supplementalContent.show),
              }}
            >
              {window.screen.width >= 650 && (
                <Grid.Column
                  width={3}
                  style={{ overflow: "auto", height: "10vh" }}
                >
                  <Grid.Row style={{ height: "10vh" }}>
                    <MobileMainMenu
                      setMainContent={setMainContent}
                      supplementalContent={supplementalContent}
                      setSupplementalContent={setSupplementalContent}
                    />
                  </Grid.Row>
                </Grid.Column>
              )}
              <MainContent
                supplementalContent={supplementalContent}
                setSupplementalContent={setSupplementalContent}
                TopMenu={getTopMenu(mainContent.name)}
                topMenuSection={mainContent.mainContentSection.name}
                showTopMenu={mainContent.showTopMenu}
                setMainContent={setMainContent}
                ContentSection={getSectionContent(
                  mainContent.name,
                  mainContent.mainContentSection
                )}
              />
            </Grid.Column>
          </Grid.Row>

          {supplementalContent.show && (
            <Grid.Row style={{ height: "40%" }}>
              <h2>Supplemental Content</h2>
            </Grid.Row>
          )}
        </Grid.Column>
        {window.screen.width >= 650 && (
          <Grid.Column width={3}>
            <h2>Actions</h2>
            <Grid.Row>
              <ToggleSupplementalContentAction
                supplementalContent={supplementalContent}
                setSupplementalContent={setSupplementalContent}
              />
            </Grid.Row>
          </Grid.Column>
        )}
      </Grid.Row>
    </Grid>
  );
}

export default App;
