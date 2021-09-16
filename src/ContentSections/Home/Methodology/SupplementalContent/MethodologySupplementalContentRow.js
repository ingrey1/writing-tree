import { Grid } from "semantic-ui-react";
import MethodologyCode from "./MethodologyCode";
import MethodologyFunFacts from "./MethodologyFunFacts";
export default function MethodologyContentRow({
  componentKey,
  supplementalContent: { expand },
}) {
  return (
    <Grid.Row style={{ overflow: "auto", maxHeight: expand ? "80vh" : "40vh" }}>
      {componentKey === "Code" ? <MethodologyCode /> : <MethodologyFunFacts />}
    </Grid.Row>
  );
}
