import { Button, Icon } from "semantic-ui-react";

export default function IconButtonLink({
  url,
  iconName,
  inverted,
  className,
  iconSize,
  iconColor,
  buttonColor,
  buttonSize,
}) {
  return (
    <Button
      as="a"
      target="_blank"
      href={url}
      inverted={inverted}
      size={buttonSize}
      color={buttonColor || "violet"}
    >
      <Icon
        name={iconName}
        className={className}
        size={iconSize || "large"}
        color={iconColor || "teal"}
      ></Icon>
    </Button>
  );
}
