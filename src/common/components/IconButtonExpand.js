import { Button, Icon } from "semantic-ui-react";
export default function IconButtonExpand({
  supplementalContent,
  setSupplementalContent,
}) {
  return (
    <Button color="teal">
      <Icon
        onClick={() =>
          setSupplementalContent({
            ...supplementalContent,
            expand: !supplementalContent.expand,
          })
        }
        name="expand"
        size="large"
      ></Icon>
    </Button>
  );
}
