import { useState } from "react";
import { Grid, Button } from "semantic-ui-react";
import CssConsole from "./CssConsole";
import CssOutput from "./CssOutput";
const { cssToCamelizedJson } = require("convert-css");

export default function CssContainer({ html }) {
  const [state, setState] = useState({
    classes: [],
    cssText: "",
    text: "Simba",
    styles: {},
  });

  const applyStyles = (cssClassText) => {
    let transformation;
    try {
      transformation = cssToCamelizedJson(cssClassText);
    } catch (err) {
      return null;
    }

    if (!transformation.length) return null;

    let classNames = [];
    transformation.forEach((classObj) => {
      let className = Object.keys(classObj)[0].replace(".", "");

      classNames.push(className);
    });

    let styles;
    transformation.forEach((classObj) => {
      Object.values(classObj).forEach((stylePropertyGroup) => {
        styles = { ...styles, ...stylePropertyGroup };
      });
    });
    return { styles, classNames };
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
              setState({
                ...state,
                styles: generatedStyles.styles,
                classes: generatedStyles.classNames,
              });
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
          styles={state.styles}
          classes={state.classes}
        />
      </Grid.Row>
    </Grid.Row>
  );
}
