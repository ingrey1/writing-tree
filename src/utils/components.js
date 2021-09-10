import { Menu, Dropdown } from "semantic-ui-react";

const calculateMainContentHeight = (showSupplementalContent) => {
  if (window.screen.width <= 650 && showSupplementalContent) return "50vh";
  else if (showSupplementalContent) return "60vh";
  else if (window.screen.width <= 650) return "90vh";
  else return "100vh";
};

// use to generate menu item for main/supplemental content
const generateMenuItem = ({
  activeItem,
  itemName,
  newStateName,
  content,
  setContent,
  style = {},
  additionalProps = {},
  componentType = "Menu",
  type = "main",
} = {}) => {
  const subsection =
    type === "main" ? "mainContentSection" : "supplementalContentSection";
  const Component = componentType === "Menu" ? Menu : Dropdown;

  return (
    <Component.Item
      style={style}
      name={itemName}
      active={activeItem === itemName}
      onClick={() =>
        setContent({
          ...content,
          [subsection]: {
            ...content[subsection],
            name: newStateName,
          },
        })
      }
      {...additionalProps}
    />
  );
};

export { calculateMainContentHeight, generateMenuItem };
