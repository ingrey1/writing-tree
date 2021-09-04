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
        setSupplementalContent({ show: !supplementalContent.show });
      }}
    >
      {supplementalContent.show
        ? "Hide Supplemental Content"
        : "Show Supplemental Content"}
    </Button>
  );
}

export default ToggleSupplementalContentAction;
