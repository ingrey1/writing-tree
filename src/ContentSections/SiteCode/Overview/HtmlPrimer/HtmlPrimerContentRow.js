import { Grid } from "semantic-ui-react";
import Html from "./Html/Html";
import Css from "./Css/Css";
import Javascript from "./Javascript/Javascript";

const mappings = {
  Html: Html,
  Css: Css,
  Javascript: Javascript,
};

const Component = (mainContent, setMainContent) => {
  const {
    mainContentSection: { subsection },
  } = mainContent;
  const Comp = mappings[subsection];
  console.info("Comp")
  return <Comp mainContent={mainContent} setMainContent={setMainContent} />;
};

export default function OverviewContentRow({ mainContent, setMainContent }) {
  return <Grid.Row>{Component(mainContent, setMainContent)}</Grid.Row>;
}
