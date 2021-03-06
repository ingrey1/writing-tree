import { Button } from "semantic-ui-react";

function ToggleSupplementalContentAction({
  supplementalContent,
  setSupplementalContent,
}) {
  return (
    <Button
      basic
      color="teal"
      onClick={() => {
        setSupplementalContent({
          ...supplementalContent,
          show: !supplementalContent.show,
        });
      }}
    >
      {supplementalContent.show ? "Hide Extra Content" : "Show Extra  Content"}
    </Button>
  );
}

export default ToggleSupplementalContentAction;
