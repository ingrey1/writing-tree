import { useState } from "react";
import { Grid } from "semantic-ui-react";
import CssConsole from "./CssConsole";
import CssOutput from "./CssOutput";

const transformTextToStyle = (cssText) => {};

export default function CssContainer() {
  const [state, setState] = useState({ className: "blue", text: "cat" });

  return (
    <Grid.Row>
      <Grid.Row>
        <CssConsole />
      </Grid.Row>
      <Grid.Row>
        <CssOutput defaultHtmlOutput="Simba" text={state.text} className={state.className} />
      </Grid.Row>
    </Grid.Row>
  );
}
