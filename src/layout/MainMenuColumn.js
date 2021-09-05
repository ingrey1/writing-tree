import { Grid } from "semantic-ui-react";
import MainMenu from "../Menus/MainMenu/MainMenu";
import WritingTreeHeader from "../common/components/WritingTreeHeader/WritingTreeHeader";

export default function MainMenuColumn({ setMainContent }) {
  return (
    <Grid.Column width={3} style={{ overflow: "auto", height: "100%" }}>
      <Grid.Row style={{ height: "20%" }}>
        <WritingTreeHeader />
      </Grid.Row>
      <Grid.Row style={{ height: "80%" }}>
        <MainMenu setMainContent={setMainContent} />
      </Grid.Row>
    </Grid.Column>
  );
}
