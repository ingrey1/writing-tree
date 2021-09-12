import { Grid } from "semantic-ui-react";
import ReactPrimer from "./ReactPrimer/ReactPrimer";
import HtmlPrimerContainer from "./HtmlPrimer/HtmlPrimerContainer";
import Intro from "./Intro/Intro";

const mappings = {
  Introduction: Intro,
  ReactPrimer: ReactPrimer,
  HtmlPrimer: HtmlPrimerContainer,
};

const Component = (mainContent, setMainContent) => {
  const {
    mainContentSection: { name },
  } = mainContent;
  const Comp = mappings[name];
  return <Comp mainContent={mainContent} setMainContent={setMainContent} />;
};

export default function OverviewContentRow({ mainContent, setMainContent }) {
  return <Grid.Row>{Component(mainContent, setMainContent)}</Grid.Row>;
}
