import { Grid } from "semantic-ui-react";
import SupplementalContent from "../SupplementalContent/SupplementalContent";
import { getSupplementalSectionContent } from "../utils/components";
export default function supplementalContentRow({
  supplementalContent,
  setSupplementalContent,
}) {
  return (
    <Grid.Row
      style={{
        borderTop: "2px solid #000000",
        borderRadius: "5px",
      }}
    >
      <SupplementalContent
        supplementalContent={supplementalContent}
        setSupplementalContent={setSupplementalContent}
        SupplementalContentComponent={getSupplementalSectionContent(
          supplementalContent.name,
          supplementalContent.supplementalContentSection
        )}
      />
    </Grid.Row>
  );
}
