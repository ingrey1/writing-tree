import { useState } from "react";
import { Grid } from "semantic-ui-react";
import "./App.css";
import WritingTreeHeader from "../components/WritingTreeHeader/WritingTreeHeader";
import MainMenu from "../MainMenu/MainMenu";
import MainContent from "../MainContent/MainContent";
import { getSectionContent, getTopMenu } from "../utils";

function App() {
  const [mainContent, setMainContent] = useState({
    name: "Home",
    mainContentSection: { name: "Introduction" },
    showTopMenu: true,
  });

  const [supplementalContent, setSupplementalContent] = useState({
    show: true,
  });

  return (
    <Grid celled="internally" style={{ height: "100vh" }}>
      <Grid.Row>
        <Grid.Column width={3} style={{ overflow: "auto", height: "100%" }}>
          <Grid.Row style={{ height: "20%" }}>
            <WritingTreeHeader />
          </Grid.Row>
          <Grid.Row style={{ height: "80%" }}>
            <MainMenu />
          </Grid.Row>
        </Grid.Column>
        <Grid.Column width={10}>
          <Grid.Row
            style={{ height: supplementalContent.show ? "80%" : "100%" }}
          >
            <MainContent
              TopMenu={getTopMenu(mainContent.name)}
              showTopMenu={mainContent.showTopMenu}
              setMainContent={setMainContent}
              ContentSection={getSectionContent(
                mainContent.name,
                mainContent.mainContentSection
              )}
            />
          </Grid.Row>
          {supplementalContent.show && (
            <Grid.Row style={{ height: "20%" }}>
              <h2>Supplemental Content</h2>
            </Grid.Row>
          )}
        </Grid.Column>
        <Grid.Column width={3}>
          <h2>Updates</h2>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default App;
