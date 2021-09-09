import { Grid } from "semantic-ui-react";
import ReactPrimer from "./ReactPrimer/ReactPrimer";
import Resources from "./Resources/Resources";
import Intro from "./Intro/Intro";
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
    if (name === "ReactPrimer") {
      return (
        <ReactPrimer
          mainContent={mainContent}
          setMainContent={setMainContent}
        />
      );
    } else if (name === "Introduction") {
      return (
        <Intro mainContent={mainContent} setMainContent={setMainContent} />
      );
    } else {
      return (
        <Resources mainContent={mainContent} setMainContent={setMainContent} />
      );
    }
  };

  return <Grid.Row>{component(mainContent)}</Grid.Row>;
}
