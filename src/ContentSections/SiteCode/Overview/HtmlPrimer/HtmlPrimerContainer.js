import { Grid } from "semantic-ui-react";
import HtmlPrimerContentRow from "./HtmlPrimerContentRow";
import HtmlPrimerMenu from "./HtmlPrimerMenu";

export default function HtmlPrimerContainer({
  supplementalContent,
  setSupplementalContent,
  mainContent,
  setMainContent,
}) {
  return (
    <Grid.Row>
      <HtmlPrimerMenu
        mainContent={mainContent}
        setMainContent={setMainContent}
        setSupplementalContent={setSupplementalContent}
        supplementalContent={supplementalContent}
      />
      <HtmlPrimerContentRow
        mainContent={mainContent}
        setMainContent={setMainContent}
        supplementalContent={supplementalContent}
        setSupplementalContent={setSupplementalContent}
      />
    </Grid.Row>
  );
}
