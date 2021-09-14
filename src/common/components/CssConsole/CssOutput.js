import { Grid, Header } from "semantic-ui-react";
import { CodeBlock } from "@atlaskit/code";

const htmlBlocks = {
  1: `<div className="?">
         <p>
           <i>text</i> 
         </p>
    </>`,
};

const setCustomClassAndText = (className, text, html) => {
  const customClass = html.replace("?", className);
  return customClass.replace("text", text);
};

export default function CssOutput({
  html,
  defaultHtmlOutput,
  text,
  className,
}) {
  let formattedHtml;
  if (html) {
    formattedHtml = setCustomClassAndText(className, text, htmlBlocks[1]);
  }
  return (
    <Grid.Row>
      <Header as="h4">Rendered HTML Element With Your Css Class Applied</Header>
      {formattedHtml || defaultHtmlOutput}
    </Grid.Row>
  );
}
