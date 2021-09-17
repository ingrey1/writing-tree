import { Grid } from "semantic-ui-react";
import NavigationMenu from "./NavigationMenu";
import NavigationSupplementalContentRow from "./NavigationSupplementalContentRow";

export default function NavigationSupplementalContainer({
  supplementalContent,
  setSupplementalContent,
}) {
  return (
    <Grid.Row>
      <Grid.Row>
        <NavigationMenu
          setSupplementalContent={setSupplementalContent}
          supplementalContent={supplementalContent}
        />
      </Grid.Row>
      <NavigationSupplementalContentRow
        supplementalContent={supplementalContent}
      />
    </Grid.Row>
  );
}
