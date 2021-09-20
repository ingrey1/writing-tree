import { Grid, Header, ListHeader, ListItem, List } from "semantic-ui-react";
import ReactHtmlParser from "react-html-parser";

const setCustomClassAndText = (classes, html) => {
  let classStr = "";
  classes.forEach((className, index) => {
    if (index !== 0) {
      classStr += `,${className}`;
    } else {
      classStr += className;
    }
  });
  const customClassHtml = html.replace("?", classStr);

  return customClassHtml;
};

export default function CssOutput({
  html,
  defaultHtmlOutput,
  classes,
  styles,
}) {
  let formattedHtml;
  if (html) {
    formattedHtml = setCustomClassAndText(classes, html);
  }
  return (
    <Grid.Row>
      <Header as="h4">
        Rendered HTML Element With CSS Applied
      </Header>
      <div style={styles}>
        {ReactHtmlParser(formattedHtml) || defaultHtmlOutput}
      </div>
      <List bulleted>
        <ListHeader as="h5">Classes Currently Applied</ListHeader>
        {classes.length
          ? classes.map((className) => (
              <ListItem key={Math.random()}>{className}</ListItem>
            ))
          : <ListItem key={Math.random()}>None</ListItem>}
      </List>
    </Grid.Row>
  );
}
