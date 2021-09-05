import { Grid } from "semantic-ui-react";
import ToggleSupplementalContentAction from "../Actions/ToggleSupplementalContentAction";
export default function ActionsColumn({
  supplementalContent,
  setSupplementalContent,
}) {
  return (
    <Grid.Column width={3}>
      <h2>Actions</h2>
      <Grid.Row>
        <ToggleSupplementalContentAction
          supplementalContent={supplementalContent}
          setSupplementalContent={setSupplementalContent}
        />
      </Grid.Row>
    </Grid.Column>
  );
}
