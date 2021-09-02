import { Grid, Image } from "semantic-ui-react";
import TopMenu from "../TopMenu/TopMenu";
import "./App.css";
import WritingTreeHeader from "../components/WritingTreeHeader/WritingTreeHeader";
import MainMenu from "../MainMenu/MainMenu";

function App() {
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
            <h2>Main Content</h2>
          </Grid.Row>
          <Grid.Row style={{ height: "20%" }}>
            <h2>Supplemental Content</h2>
          </Grid.Row>
        </Grid.Column>
        <Grid.Column width={3}>
          <h2>Updates/News</h2>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default App;
