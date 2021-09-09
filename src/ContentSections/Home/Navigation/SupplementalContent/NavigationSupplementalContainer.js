import { Grid } from "semantic-ui-react";
import NavigationMenu from "./NavigationMenu";
import NavigationSupplementalContentRow from "./NavigationSupplementalContentRow";

export default function NavigationSupplementalContainer({
  supplementalContent,
  setSupplementalContent,
}) {
  const { subsection: componentKey } =
    supplementalContent.supplementalContentSection;
  return (
    <Grid.Row>
      <Grid.Row>
        <NavigationMenu
          contactMenuSelection={componentKey}
          setSupplementalContent={setSupplementalContent}
          supplementalContent={supplementalContent}
        />
      </Grid.Row>
      <NavigationSupplementalContentRow componentKey={componentKey} />
    </Grid.Row>
  );
}
