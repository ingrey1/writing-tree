import { Grid, Header, ListHeader, ListItem, List } from "semantic-ui-react";
import ReactHtmlParser from "react-html-parser";

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
      <div style={styleObject}>
        {ReactHtmlParser(formattedHtml) || defaultHtmlOutput}
      </div>
      <List bulleted>
        <ListHeader as="h5">Classes Currently Applied</ListHeader>
        <ListItem>{className}</ListItem>
      </List>
    </Grid.Row>
  );
}
