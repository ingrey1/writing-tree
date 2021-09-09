import { Grid } from "semantic-ui-react";
import IntroCode from "./IntroCode";
import NoSupplementalContent from "../../../../../../common/components/NoSupplementalContent/NoSupplementalContent";

export default function IntroSupplementalContentRow() {
  return (
    <Grid.Row>
      {/* <IntroCode /> */}
      <NoSupplementalContent />
    </Grid.Row>
  );
}
