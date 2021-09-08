import { Grid } from "semantic-ui-react";
import MethodologyCode from "./MethodologyCode";
import MethodologyFunFacts from "./MethodologyFunFacts";
export default function MethodologyContentRow({ componentKey }) {
  return (
    <Grid.Row>
      {componentKey === "Code" ? <MethodologyCode /> : <MethodologyFunFacts />}
    </Grid.Row>
  );
}
