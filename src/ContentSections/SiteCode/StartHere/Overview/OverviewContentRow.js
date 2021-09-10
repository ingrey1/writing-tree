import { Grid } from "semantic-ui-react";
import ReactPrimer from "./ReactPrimer/ReactPrimer";
import HtmlPrimer from "./HtmlPrimer/HtmlPrimer";
import Resources from "./Resources/Resources";
import Intro from "./Intro/Intro";

const Component = (mainContent, setMainContent) => {
  const {
    mainContentSection: { name },
  } = mainContent;
  if (name === "Introduction") {
    return <Intro mainContent={mainContent} setMainContent={setMainContent} />;
  } else if (name === "ReactPrimer") {
    return (
      <ReactPrimer mainContent={mainContent} setMainContent={setMainContent} />
    );
  } else if (name === "Resources") {
    return (
      <Resources mainContent={mainContent} setMainContent={setMainContent} />
    );
  } else {
    return (
      <HtmlPrimer mainContent={mainContent} setMainContent={setMainContent} />
    );
  }
};

export default function OverviewContentRow({ mainContent, setMainContent }) {
  return <Grid.Row>{Component(mainContent, setMainContent)}</Grid.Row>;
}
