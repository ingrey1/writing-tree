import { Grid, Header } from "semantic-ui-react";
import ToggleSupplementalContentAction from "../Actions/ToggleSupplementalContentAction";
export default function ActionsColumn({
  supplementalContent,
  setSupplementalContent,
}) {
  return (
    <Grid.Column width={3}>
      <Header as="h2" textAlign="center">
        Actions
      </Header>
      <Grid.Row centered>
        <ToggleSupplementalContentAction
          supplementalContent={supplementalContent}
          setSupplementalContent={setSupplementalContent}
        />
      </Grid.Row>
    </Grid.Column>
  );
}
