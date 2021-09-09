import { Grid } from "semantic-ui-react";
import Introduction from "./Intro/Introduction";
import Navigation from "./Navigation/Navigation";
import Contact from "./Contact/Contact";
import Methodology from "./Methodology/Methodology";

export default function OverviewContentRow({
  mainContent,
  setMainContent,
  supplementalContent,
  setSupplementalContent,
}) {
  const component = (mainContent) => {
    const {
      mainContentSection: { name },
    } = mainContent;
    if (name === "Introduction") {
      return (
        <Introduction
          mainContent={mainContent}
          setMainContent={setMainContent}
        />
      );
    } else if (name === "Navigation") {
      return (
        <Navigation mainContent={mainContent} setMainContent={setMainContent} />
      );
    } else if (name === "Methodology") {
      return (
        <Methodology
          mainContent={mainContent}
          setMainContent={setMainContent}
          supplementalContent={supplementalContent}
          setSupplementalContent={setSupplementalContent}
        />
      );
    } else {
      return (
        <Contact mainContent={mainContent} setMainContent={setMainContent} />
      );
    }
  };

  return <Grid.Row>{component(mainContent)}</Grid.Row>;
}
