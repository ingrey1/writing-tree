import { Button, Icon } from "semantic-ui-react";
export default function IconButtonExpand({
  supplementalContent,
  setSupplementalContent,
  iconName,
  iconSize,
  iconColor,
  buttonSize,
  className,
  inverted,
}) {
  return (
    <Button
      inverted={inverted}
      className={className}
      size={buttonSize || "large"}
    >
      <Icon
        onClick={() =>
          setSupplementalContent({
            ...supplementalContent,
            expand: !supplementalContent.expand,
          })
        }
        color={iconColor || "teal"}
        name={iconName || "expand"}
        size={iconSize || "large"}
      ></Icon>
    </Button>
  );
}
