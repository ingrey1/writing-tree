import { Menu } from "semantic-ui-react";

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
  type = "main",
} = {}) => {
  const subsection =
    type === "main" ? "mainContentSection" : "supplementalContentSection";
  return (
    <Menu.Item
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
    />
  );
};

export { calculateMainContentHeight, generateMenuItem };
