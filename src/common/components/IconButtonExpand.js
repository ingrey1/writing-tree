import { Button, Icon } from "semantic-ui-react";
export default function IconButtonExpand({
  supplementalContent,
  setSupplementalContent,
  iconName,
  iconSize,
  iconColor,
  buttonColor,
  buttonSize,
  className,
  inverted,
}) {
  return (
    <Button
      inverted={inverted}
      className={className}
      color={buttonColor || "white"}
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
        name={iconName}
        size={iconSize || "large"}
      ></Icon>
    </Button>
  );
}
