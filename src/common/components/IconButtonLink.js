import { Button, Icon } from "semantic-ui-react";

export default function IconButtonLink({ url, iconName, iconSize, color }) {
  return (
    <Button as="a" href={url} target="_blank">
      <Icon name={iconName} size={iconSize} color={color || "teal"}></Icon>
    </Button>
  );
}
