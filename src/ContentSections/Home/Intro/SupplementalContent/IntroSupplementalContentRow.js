import { Grid } from "semantic-ui-react";
import IntroCode from "./IntroCode";
import Credits from "./Credits";

export default function IntroSupplementalContentRow({
  supplementalContent: {
    expand,
    supplementalContentSection: { subsection },
  },
}) {
  return (
    <Grid.Row style={{ overflow: "auto", maxHeight: expand ? "80vh" : "40vh" }}>
      {subsection === "Code" ? <IntroCode /> : <Credits />}
    </Grid.Row>
  );
}
