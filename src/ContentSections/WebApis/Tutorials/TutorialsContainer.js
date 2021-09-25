import { Grid } from "semantic-ui-react";
import TutorialsMenu from "./TutorialsMenu/TutorialsMenu";
import TutorialsContentRow from "./TutorialsContentRow";

export default function TutorialsContainer({
  supplementalContent,
  setSupplementalContent,
  mainContent,
  setMainContent,
}) {
  
  return (
    <Grid.Row>
      <TutorialsMenu
        mainContent={mainContent}
        setMainContent={setMainContent}
        setSupplementalContent={setSupplementalContent}
        supplementalContent={supplementalContent}
      />
      <TutorialsContentRow
        mainContent={mainContent}
        setMainContent={setMainContent}
        supplementalContent={supplementalContent}
        setSupplementalContent={setSupplementalContent}
      />
    </Grid.Row>
  );
}
