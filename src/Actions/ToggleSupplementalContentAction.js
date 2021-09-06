import { Button } from "semantic-ui-react";

function ToggleSupplementalContentAction({
  supplementalContent,
  setSupplementalContent,
}) {
  console.info(supplementalContent);
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
      {supplementalContent.show
        ? "Hide Supplemental Content"
        : "Show Supplemental Content"}
    </Button>
  );
}

export default ToggleSupplementalContentAction;
