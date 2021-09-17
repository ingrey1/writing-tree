import { Grid } from "semantic-ui-react";
import MainMenu from "../Menus/MainMenu/MainMenu";
import WritingTreeHeader from "../common/components/WritingTreeHeader/WritingTreeHeader";

export default function MainMenuColumn({
  mainContent,
  supplementalContent,
  setMainContent,
  setSupplementalContent,
  className
}) {
  return (
    <Grid.Column className={className} width={3}>
      <Grid.Row style={{ height: "20%" }}>
        <WritingTreeHeader />
      </Grid.Row>
      <Grid.Row style={{ height: "80%" }}>
        <MainMenu
          mainContent={mainContent}
          supplementalContent={supplementalContent}
          setMainContent={setMainContent}
          setSupplementalContent={setSupplementalContent}
        />
      </Grid.Row>
    </Grid.Column>
  );
}
