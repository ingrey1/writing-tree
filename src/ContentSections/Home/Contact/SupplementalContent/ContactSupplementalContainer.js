import { Grid } from "semantic-ui-react";
import ContactMenu from "./ContactMenu";
import ContactSupplementalContentRow from "./ContactSupplementalContentRow";

export default function ContactSupplementalContainer({
  supplementalContent,
  setSupplementalContent,
}) {
  return (
    <Grid.Row>
      <Grid.Row>
        <ContactMenu
          setSupplementalContent={setSupplementalContent}
          supplementalContent={supplementalContent}
        />
      </Grid.Row>
      <ContactSupplementalContentRow />
    </Grid.Row>
  );
}
