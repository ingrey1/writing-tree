import { Grid } from "semantic-ui-react";
import VisualizationTool from "./VisualizationTool";

const mappings = {
  VisualizationTool: VisualizationTool
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
 
  return (
    <Comp
      mainContent={mainContent}
      setMainContent={setMainContent}
      supplementalContent={supplementalContent}
      setSupplementalContent={setSupplementalContent}
    />
  );
};

export default function VisualizationToolContentRow({
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
