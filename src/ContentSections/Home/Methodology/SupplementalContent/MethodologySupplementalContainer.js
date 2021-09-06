import { Grid } from "semantic-ui-react";
import MethodologyMenu from "./MethodologyMenu";
import MethodologyCode from "./MethodologyCode";
import MethodologyFunFacts from "./MethodologyFunFacts";

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
      <Grid.Row>
        {componentKey === "Code" ? (
          <MethodologyCode />
        ) : (
          <MethodologyFunFacts />
        )}
      </Grid.Row>
    </Grid.Row>
  );
}
