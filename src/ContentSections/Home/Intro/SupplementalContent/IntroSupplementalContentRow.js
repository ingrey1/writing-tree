import { Grid } from "semantic-ui-react";
import IntroCode from "./IntroCode";
import Credits from "./Credits";

export default function IntroSupplementalContentRow({
  supplementalContent: {
    supplementalContentSection: { subsection },
  },
}) {
  return (
    <Grid.Row>{subsection === "Code" ? <IntroCode /> : <Credits />}</Grid.Row>
  );
}
