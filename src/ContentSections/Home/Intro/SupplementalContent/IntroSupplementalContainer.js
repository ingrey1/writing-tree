import { Grid } from "semantic-ui-react";
import IntroMenu from "./IntroMenu";
import IntroSupplementalContentRow from "./IntroSupplementalContentRow";

export default function IntroSupplementalContainer({
  supplementalContent,
  setSupplementalContent,
}) {
  const { subsection: componentKey } =
    supplementalContent.supplementalContentSection;
  return (
    <Grid.Row>
      <Grid.Row>
        <IntroMenu
          introMenuSelection={componentKey}
          setSupplementalContent={setSupplementalContent}
          supplementalContent={supplementalContent}
        />
      </Grid.Row>
      <IntroSupplementalContentRow componentKey={componentKey} />
    </Grid.Row>
  );
}
