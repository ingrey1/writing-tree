import { Grid } from "semantic-ui-react";
import MethodologyMenu from "./MethodologyMenu";
import MethodologySupplementalContentRow from "./MethodologySupplementalContentRow";

export default function MethodologySupplementalContainer({
  supplementalContent,
  setSupplementalContent,
}) {
  return (
    <Grid.Row>
      <Grid.Row>
        <MethodologyMenu
          setSupplementalContent={setSupplementalContent}
          supplementalContent={supplementalContent}
        />
      </Grid.Row>
      <MethodologySupplementalContentRow
        supplementalContent={supplementalContent}
      />
    </Grid.Row>
  );
}
