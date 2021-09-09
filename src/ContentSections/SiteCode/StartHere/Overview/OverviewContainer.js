import { Grid } from "semantic-ui-react";
import OverviewMenu from "./OverviewMenu";
import OverviewContentRow from "./OverviewContentRow";

export default function OverviewContainer({
  supplementalContent,
  setSupplementalContent,
  mainContent,
  setMainContent,
}) {
  return (
    <Grid.Row>
      <OverviewMenu
        mainContent={mainContent}
        setMainContent={setMainContent}
        setSupplementalContent={setSupplementalContent}
        supplementalContent={supplementalContent}
      />
      <OverviewContentRow
        mainContent={mainContent}
        setMainContent={setMainContent}
        supplementalContent={supplementalContent}
        setSupplementalContent={setSupplementalContent}
      />
    </Grid.Row>
  );
}
