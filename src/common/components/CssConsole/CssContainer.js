import { useState } from "react";
import { Grid, Button } from "semantic-ui-react";
import CssConsole from "./CssConsole";
import CssOutput from "./CssOutput";
const { cssToCamelizedJson } = require("convert-css");

export default function CssContainer({ html }) {
  const [state, setState] = useState({
    className: "blue",
    cssText: "",
    text: "Simba",
    styleObject: {},
  });

  const applyStyles = (cssClassText) => {
    console.info("cssClassText", cssClassText);
    let transformation;
    try {
      transformation = cssToCamelizedJson(cssClassText);
    } catch (err) {
      return null;
    }

    if (!transformation.length) return null;

    const cssObject = Object.values(transformation[0]);
    let result = {};
    cssObject.forEach((style) => {
      result = { ...result, ...style };
    });
    console.info("cssObject", result);
    return result;
  };

  return (
    <Grid.Row>
      <Grid.Row>
        <CssConsole
          state={state}
          setState={setState}
          userText={state.cssText}
        />
        <Button
          basic
          color="teal"
          onClick={() => {
            const generatedStyles = applyStyles(state.cssText);
            if (generatedStyles) {
              setState({ ...state, styleObject: generatedStyles });
            }
          }}
        >
          Apply CSS Class
        </Button>
      </Grid.Row>
      <Grid.Row>
        <CssOutput
          html={html}
          defaultHtmlOutput="Simba"
          styleObject={state.styleObject}
          className={state.className}
        />
      </Grid.Row>
    </Grid.Row>
  );
}
