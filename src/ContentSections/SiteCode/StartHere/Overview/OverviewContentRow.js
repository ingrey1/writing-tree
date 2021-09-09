import { Grid } from "semantic-ui-react";
import ReactPrimer from "./ReactPrimer/ReactPrimer";
import Resources from "./Resources/Resources";
import Overview from "./Overview";
export default function OverviewContentRow({ mainContent, setMainContent }) {
  const component = (mainContent) => {
    const {
      mainContentSection: { name },
    } = mainContent;
    if (name === "Overview.ReactPrimer") {
      return (
        <ReactPrimer
          mainContent={mainContent}
          setMainContent={setMainContent}
        />
      );
    } else if (name === "Overview.Introduction") {
      return (
        <Overview mainContent={mainContent} setMainContent={setMainContent} />
      );
    } else {
      return (
        <Resources mainContent={mainContent} setMainContent={setMainContent} />
      );
    }
  };

  return <Grid.Row>{component(mainContent)}</Grid.Row>;
}
