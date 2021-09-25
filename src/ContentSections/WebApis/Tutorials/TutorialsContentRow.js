import { Grid } from "semantic-ui-react";
import VisualizationToolContainer from "./VisualizationTool/VisualizationToolContainer";

const mappings = {
  VisualizationTool: VisualizationToolContainer,
};

const Component = ({
  mainContent,
  setMainContent,
  supplementalContent,
  setSupplementalContent,
}) => {
  const {
    mainContentSection: { name },
  } = mainContent;
  const Comp = mappings[name];
  return (
    <Comp
      mainContent={mainContent}
      setMainContent={setMainContent}
      supplementalContent={supplementalContent}
      setSupplementalContent={setSupplementalContent}
    />
  );
};

export default function TutorialsContentRow({
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
        setSupplementalContent,
        supplementalContent,
      })}
    </Grid.Row>
  );
}
