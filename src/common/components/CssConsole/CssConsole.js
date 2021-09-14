import { Grid, Form, TextArea } from "semantic-ui-react";

export default function CssConsole() {
  return (
    <Grid.Row style={{ marginTop: "10px", marginBottom: "10px" }}>
      <Form>
        <TextArea
          placeholder="Define your CSS class here"
          style={{ minHeight: 100 }}
        />
      </Form>
    </Grid.Row>
  );
}
