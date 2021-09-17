import { Grid } from "semantic-ui-react";
import NavigationCode from "./NavigationCode";

export default function NavigationSupplementalContentRow({
  supplementalContent: { expand },
}) {
  return (
    <Grid.Row style={{ overflow: "auto", maxHeight: expand ? "80vh" : "40vh" }}>
      <NavigationCode />
    </Grid.Row>
  );
}
