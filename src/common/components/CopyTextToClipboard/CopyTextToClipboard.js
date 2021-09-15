import { useState } from "react";
import { Button, Icon } from "semantic-ui-react";

export default function CopyTextToClipboard({
  text,
  iconName,
  buttonColor,
  iconColor,
  buttonStyle,
  iconStyle,
  buttonSize,
  iconSize,
  inverted,
  checkColor,
  checkSize,
}) {
  const [isCopied, setIsCopied] = useState(false);

  const icon = (
    <Icon
      style={iconStyle || {}}
      name={iconName || "copy"}
      size={iconSize || "large"}
      color={iconColor || "teal"}
    ></Icon>
  );

  return (
    <>
      <Button
        inverted={inverted}
        color={buttonColor}
        style={buttonStyle || { margin: "5px", borderStyle: "none" }}
        size={buttonSize || "large"}
        onClick={() => {
          navigator.clipboard.writeText(text);
          setIsCopied(true);
        }}
        icon={icon}
      ></Button>
      {isCopied && (
        <Icon
          size={checkSize || "small"}
          name="check"
          color={checkColor || "teal"}
        ></Icon>
      )}
    </>
  );
}
