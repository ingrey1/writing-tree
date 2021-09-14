import { Grid, Header } from "semantic-ui-react";

const setCustomClassAndText = (className, html) => {
  let customClassHtml = html.replace("?", className);

  //const result = customClassHtml.replace("`", "");
  console.info("html String", customClassHtml);
  return customClassHtml;
};

export default function CssOutput({
  html,
  defaultHtmlOutput,
  className,
  styleObject,
}) {
  let formattedHtml;
  if (html) {
    formattedHtml = setCustomClassAndText(className, html);
  }
  return (
    <Grid.Row>
      <Header as="h4">Rendered HTML Element With Your Css Class Applied</Header>
      <div style={styleObject}>{formattedHtml || defaultHtmlOutput}</div>
    </Grid.Row>
  );
}
