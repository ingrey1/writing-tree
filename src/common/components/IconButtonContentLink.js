import { Button, Icon } from "semantic-ui-react";

export default function IconButtonContentLink({
  state,
  setState,
  newStateContent,
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
      className={className}
      inverted={inverted}
      color={buttonColor || "white"}
      onClick={() => {
        setState({ ...state, ...newStateContent });
      }}
      size={buttonSize || "large"}
    >
      <Icon
        name={iconName}
        size={iconSize || "large"}
        color={iconColor || "teal"}
      ></Icon>
    </Button>
  );
}
