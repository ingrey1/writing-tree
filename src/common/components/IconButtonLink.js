import { Button, Icon } from "semantic-ui-react";

export default function IconButtonLink({ url, iconName, iconSize }) {
  return (
    <Button hre={url} target="_blank">
      <Icon name={iconName} size={iconSize}></Icon>
    </Button>
  );
}
