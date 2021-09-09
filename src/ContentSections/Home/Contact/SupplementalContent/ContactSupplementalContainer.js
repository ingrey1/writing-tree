import { Grid } from "semantic-ui-react";
import ContactMenu from "./ContactMenu";
import ContactSupplementalContentRow from "./ContactSupplementalContentRow";

export default function ContactSupplementalContainer({
  supplementalContent,
  setSupplementalContent,
}) {
  const { subsection: componentKey } =
    supplementalContent.supplementalContentSection;
  return (
    <Grid.Row>
      <Grid.Row>
        <ContactMenu
          contactMenuSelection={componentKey}
          setSupplementalContent={setSupplementalContent}
          supplementalContent={supplementalContent}
        />
      </Grid.Row>
      <ContactSupplementalContentRow componentKey={componentKey} />
    </Grid.Row>
  );
}
