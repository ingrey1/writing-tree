import { Grid } from "semantic-ui-react";
export default function supplementalContentRow() {
  return (
    <Grid.Row
      style={{
         height: "40%",
        "border-top": "2px solid #000000",
        "border-radius": "5px",
      }}
    >
      <h2>Supplemental Content</h2>
    </Grid.Row>
  );
}
