import { Grid, Form, TextArea } from "semantic-ui-react";

export default function CssConsole({ userText, state, setState }) {
  return (
    <Grid.Row style={{ marginTop: "10px", marginBottom: "10px" }}>
      <Form>
        <TextArea
          placeholder="Define your CSS class here"
          style={{ minHeight: 100 }}
          value={userText}
          onChange={(event) => setState({ ...state, cssText: event.target.value })}
        />
      </Form>
    </Grid.Row>
  );
}
