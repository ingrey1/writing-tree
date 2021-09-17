import { Grid } from "semantic-ui-react";
import ContactCode from "./ContactCode";

export default function ContactSupplementalContentRow({
  supplementalContent: { expand },
}) {
  return (
    <Grid.Row style={{ overflow: "auto", maxHeight: expand ? "80vh" : "40vh" }}>
      <ContactCode />
    </Grid.Row>
  );
}
