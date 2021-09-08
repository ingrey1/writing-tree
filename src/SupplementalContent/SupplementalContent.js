import { Grid } from "semantic-ui-react";
import IconButtonExpand from "../common/components/IconButtonExpand";
function SupplementalContent({
  SupplementalContentComponent,
  supplementalContent,
  setSupplementalContent,
}) {
  return (
    <Grid.Row>
      <IconButtonExpand
        iconName="expand"
        inverted
        setSupplementalContent={setSupplementalContent}
        supplementalContent={supplementalContent}
      />
      <SupplementalContentComponent
        setSupplementalContent={setSupplementalContent}
        supplementalContent={supplementalContent}
      />
    </Grid.Row>
  );
}

export default SupplementalContent;
