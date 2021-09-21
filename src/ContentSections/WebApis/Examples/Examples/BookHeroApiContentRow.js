import { Grid } from "semantic-ui-react";
import Visualization from "./Visualization/Visualization";
import Document from "./Document/Document";

const mappings = {
  Visualization: Visualization,
  Document: Document,
};

const Component = ({
  mainContent,
  setMainContent,
  supplementalContent,
  setSupplementalContent,
}) => {
  const {
    mainContentSection: { subsection },
  } = mainContent;
  const Comp = mappings[subsection];
  console.info("Comp", Comp);
  return (
    <Comp
      mainContent={mainContent}
      setMainContent={setMainContent}
      supplementalContent={supplementalContent}
      setSupplementalContent={setSupplementalContent}
    />
  );
};

export default function BookHeroApiContentRow({
  mainContent,
  setMainContent,
  supplementalContent,
  setSupplementalContent,
}) {
  return (
    <Grid.Row>
      {Component({
        mainContent,
        setMainContent,
        supplementalContent,
        setSupplementalContent,
      })}
    </Grid.Row>
  );
}
