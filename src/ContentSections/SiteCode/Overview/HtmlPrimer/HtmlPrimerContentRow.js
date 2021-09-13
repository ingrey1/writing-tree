import { Grid } from "semantic-ui-react";
import Html from "./Html/Html";
import Css from "./Css/Css";
import Javascript from "./Javascript/Javascript";

const mappings = {
  Html: Html,
  Css: Css,
  Javascript: Javascript,
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
  console.info("Comp");
  return (
    <Comp
      mainContent={mainContent}
      setMainContent={setMainContent}
      supplementalContent={supplementalContent}
      setSupplementalContent={setSupplementalContent}
    />
  );
};

export default function HtmlPrimerContentRow({
  mainContent,
  setMainContent,
  supplementalContent,
  setSupplementalContent,
}) {
  return (
    <Grid.Row
      style={{ overflowY: "auto", overflowX: "hidden", height: "85vh" }}
    >
      {Component({
        mainContent,
        setMainContent,
        supplementalContent,
        setSupplementalContent,
      })}
    </Grid.Row>
  );
}
