import { Grid } from "semantic-ui-react";
import References from "./References/References";

const Component = (mainContent, setMainContent) => {
  const {
    mainContentSection: { name },
  } = mainContent;
  if (name === "References") {
    return (
      <References mainContent={mainContent} setMainContent={setMainContent} />
    );
  }
};

export default function ResourcesContentRow({ mainContent, setMainContent }) {
  return (
    <Grid.Row
      style={{ overflowY: "auto", overflowX: "hidden", height: "85vh" }}
    >
      {Component(mainContent, setMainContent)}
    </Grid.Row>
  );
}
