import { Grid } from "semantic-ui-react";
import MethodologyCode from "./MethodologyCode";
import MethodologyFunFacts from "./MethodologyFunFacts";
export default function MethodologyContentRow({
  supplementalContent: {
    expand,
    supplementalContentSection: { subsection },
  },
}) {
  return (
    <Grid.Row style={{ overflow: "auto", maxHeight: expand ? "80vh" : "40vh" }}>
      {subsection === "Code" ? <MethodologyCode /> : <MethodologyFunFacts />}
    </Grid.Row>
  );
}
