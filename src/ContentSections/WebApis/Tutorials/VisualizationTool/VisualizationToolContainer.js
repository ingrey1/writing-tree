import { Grid } from "semantic-ui-react";
import VisualizationToolContentRow from "./VisualizationToolContentRow";


export default function VisualizationToolContainer({
  supplementalContent,
  setSupplementalContent,
  mainContent,
  setMainContent,
}) {
  return (
    <Grid.Row>
      <VisualizationToolContentRow
        mainContent={mainContent}
        setMainContent={setMainContent}
        supplementalContent={supplementalContent}
        setSupplementalContent={setSupplementalContent}
      />
    </Grid.Row>
  );
}
