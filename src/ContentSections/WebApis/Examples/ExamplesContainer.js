import { Grid } from "semantic-ui-react";
import ExamplesMenu from "./ExamplesMenu/ExamplesMenu";
import ExamplesContentRow from "./ExamplesContentRow";

export default function ExamplesContainer({
  supplementalContent,
  setSupplementalContent,
  mainContent,
  setMainContent,
}) {
  
  return (
    <Grid.Row>
      <ExamplesMenu
        mainContent={mainContent}
        setMainContent={setMainContent}
        setSupplementalContent={setSupplementalContent}
        supplementalContent={supplementalContent}
      />
      <ExamplesContentRow
        mainContent={mainContent}
        setMainContent={setMainContent}
        supplementalContent={supplementalContent}
        setSupplementalContent={setSupplementalContent}
      />
    </Grid.Row>
  );
}
