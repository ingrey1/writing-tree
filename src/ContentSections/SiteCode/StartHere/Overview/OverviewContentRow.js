import { Grid } from "semantic-ui-react";
import ReactPrimer from "./ReactPrimer/ReactPrimer";
import HtmlPrimer from "./HtmlPrimer/HtmlPrimer";
import Resources from "./Resources/Resources";
import Intro from "./Intro/Intro";

const mappings = {
  Introduction: Intro,
  ReactPrimer: ReactPrimer,
  HtmlPrimer: HtmlPrimer,
  Resources: Resources,
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
