import { useState } from "react";
import { Grid } from "semantic-ui-react";
import TopMenu from "../TopMenu/TopMenu";
import "./App.css";
import WritingTreeHeader from "../components/WritingTreeHeader/WritingTreeHeader";
import MainMenu from "../MainMenu/MainMenu";
import MainContent from "../MainContent/MainContent";
import { getMainContentComponent, getMainContentProps } from "../utils";

function App() {
  const [mainContent, setMainContent] = useState({
    mainContent: "Home",
    mainContentSection: { name: "Introduction" },
  });

  console.info("mainContent", mainContent);

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
          <Grid.Row style={{ height: "10%" }}>
            <TopMenu />
          </Grid.Row>
          <Grid.Row style={{ height: "70%" }}>
            <MainContent
              MainContentComponent={getMainContentComponent(
                mainContent.mainContent
              )}
              contentProps={getMainContentProps(mainContent.mainContentSection)}
            />
          </Grid.Row>
          <Grid.Row style={{ height: "20%" }}>
            <h2>Supplemental Content</h2>
          </Grid.Row>
        </Grid.Column>
        <Grid.Column width={3}>
          <h2>Updates</h2>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default App;
