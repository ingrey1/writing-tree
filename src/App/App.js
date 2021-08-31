import { Grid, Image } from "semantic-ui-react";
import { TopMenu } from "../TopMenu/TopMenu";
import "./App.css";
import WritingTreeHeader from "../components/WritingTreeHeader/WritingTreeHeader";

function App() {
  return (
    <div className="App">
      <Grid celled="internally">
        <Grid.Row>
          <Grid.Column width={3}>
            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </Grid.Column>
          <Grid.Column width={10}>
            <Grid.Row>
              <TopMenu />
            </Grid.Row>
            <Grid.Row>
              <WritingTreeHeader />
            </Grid.Row>
            <Grid.Row>
              <h2>Content</h2>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={3}>
            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={3}>
            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </Grid.Column>
          <Grid.Column width={10}>
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
          </Grid.Column>
          <Grid.Column width={3}>
            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
