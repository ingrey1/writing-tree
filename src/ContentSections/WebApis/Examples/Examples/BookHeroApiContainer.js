import { Grid } from "semantic-ui-react";
import BookHeroApiContentRow from "./BookHeroApiContentRow";
import BookHeroApiMenu from "./BookHeroApiMenu";

export default function BookHeroApiContainer({
  supplementalContent,
  setSupplementalContent,
  mainContent,
  setMainContent,
}) {
  return (
    <Grid.Row>
      <BookHeroApiMenu
        mainContent={mainContent}
        setMainContent={setMainContent}
        setSupplementalContent={setSupplementalContent}
        supplementalContent={supplementalContent}
      />
      <BookHeroApiContentRow
        mainContent={mainContent}
        setMainContent={setMainContent}
        supplementalContent={supplementalContent}
        setSupplementalContent={setSupplementalContent}
      />
    </Grid.Row>
  );
}
