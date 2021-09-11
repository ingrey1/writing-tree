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
  content,
  newOuterContents = {},
  newInnerContents = {},
  setContent,
  supplementalContent,
  setSupplementalContent,
  newSupplementalContentState,
  style = {},
  additionalProps = {},
  componentType = "Menu",
  type = "main",
} = {}) => {
  const subsection =
    type === "main" ? "mainContentSection" : "supplementalContentSection";
  const Component = componentType === "Menu" ? Menu : Dropdown;
  console.info("newOuterContent", newOuterContents);
  console.info("newInnerContent", newInnerContents);
  console.info(".....");
  return (
    <Component.Item
      key={Math.random()}
      style={style}
      name={itemName}
      active={activeItem === itemName}
      onClick={() => {
        if (supplementalContent) {
          setSupplementalContent({
            ...supplementalContent,
            ...newSupplementalContentState,
          });
        }
        setContent({
          ...content,
          ...newOuterContents,
          [subsection]: {
            ...content[subsection],
            ...newInnerContents,
          },
        });
      }}
      {...additionalProps}
    />
  );
};

const generateMenuItems = ({
  activeItem,
  itemNames,
  newInnerContents,
  newOuterContents,
  mainContent,
  setMainContent,
}) => {
  return itemNames.map((item, index) => {
    return generateMenuItem({
      activeItem: activeItem,
      itemName: item,
      newInnerContents: Array.isArray(newInnerContents)
        ? newInnerContents[index]
        : newInnerContents,
      newOuterContents: Array.isArray(newOuterContents)
        ? newOuterContents[index]
        : newOuterContents,
      content: mainContent,
      setContent: setMainContent,
    });
  });
};

export { calculateMainContentHeight, generateMenuItem, generateMenuItems };
