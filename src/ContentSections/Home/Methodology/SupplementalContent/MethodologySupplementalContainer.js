import { Grid } from "semantic-ui-react";
import MethodologyMenu from "./MethodologyMenu";
import MethodologySupplementalContentRow from "./MethodologySupplementalContentRow";

export default function MethodologySupplementalContainer({
  supplementalContent,
  setSupplementalContent,
}) {
  const { subsection: componentKey } =
    supplementalContent.supplementalContentSection;
  return (
    <Grid.Row>
      <Grid.Row>
        <MethodologyMenu
          methodologyMenuSelection={componentKey}
          setSupplementalContent={setSupplementalContent}
        />
      </Grid.Row>
      <MethodologySupplementalContentRow componentKey={componentKey} />
    </Grid.Row>
  );
}
