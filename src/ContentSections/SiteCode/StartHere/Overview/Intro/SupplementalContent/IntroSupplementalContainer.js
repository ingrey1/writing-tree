import { Grid } from "semantic-ui-react";
import IntroMenu from "./IntroMenu";
import IntroSupplementalContentRow from "./IntroSupplementalContentRow";

export default function IntroSupplementalContainer({
  supplementalContent,
  setSupplementalContent,
}) {
  return (
    <Grid.Row>
      <Grid.Row>
        <IntroMenu
          setSupplementalContent={setSupplementalContent}
          supplementalContent={supplementalContent}
        />
      </Grid.Row>
      <IntroSupplementalContentRow
        supplementalContent={supplementalContent}
        setSupplementalContent={setSupplementalContent}
      />
    </Grid.Row>
  );
}
