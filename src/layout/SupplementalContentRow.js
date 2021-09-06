import { Grid } from "semantic-ui-react";
import SupplementalContent from "../SupplementalContent/SupplementalContent";
import { getSupplementalSectionContent } from "../utils";
export default function supplementalContentRow({
  supplementalContent,
  setSupplementalContent,
}) {
  console.info("here", supplementalContent);
  return (
    <Grid.Row
      style={{
        height: "40%",
        "border-top": "2px solid #000000",
        "border-radius": "5px",
      }}
    >
      <SupplementalContent
        setSupplementalContent={setSupplementalContent}
        SupplementalContentComponent={getSupplementalSectionContent(
          supplementalContent.name,
          supplementalContent.supplementalContentSection.name
        )}
      />
    </Grid.Row>
  );
}
