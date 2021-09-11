import { Grid } from "semantic-ui-react";
import ResourcesMenu from "./ResourcesMenu";
import ResourcesContentRow from "./ResourcesContentRow";

export default function ResourcesContainer({
  supplementalContent,
  setSupplementalContent,
  mainContent,
  setMainContent,
}) {
  return (
    <Grid.Row>
      <ResourcesMenu
        mainContent={mainContent}
        setMainContent={setMainContent}
        setSupplementalContent={setSupplementalContent}
        supplementalContent={supplementalContent}
      />
      <ResourcesContentRow
        mainContent={mainContent}
        setMainContent={setMainContent}
        supplementalContent={supplementalContent}
        setSupplementalContent={setSupplementalContent}
      />
    </Grid.Row>
  );
}
