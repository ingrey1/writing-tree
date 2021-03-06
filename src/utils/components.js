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
  newOuterContents = {},
  newInnerContents = {},
  content,
  setContent,
  supplementalContent,
  setSupplementalContent,
  newSupplementalOuterContents = {},
  newSupplementalInnerContents = {},
  style = {},
  additionalProps = {},
  componentType = "Menu",
} = {}) => {
  const Component = componentType === "Menu" ? Menu : Dropdown;

  return (
    <Component.Item
      text={itemName}
      key={Math.random()}
      style={style}
      name={itemName}
      active={activeItem === itemName}
      onClick={() => {
        if (supplementalContent) {
          setSupplementalContent({
            ...supplementalContent,
            ...newSupplementalOuterContents,
            supplementalContentSection: {
              ...supplementalContent.supplementalContentSection,
              ...newSupplementalInnerContents,
            },
          });
        }
        if (content) {
          setContent({
            ...content,
            ...newOuterContents,
            mainContentSection: {
              ...content.mainContentSection,
              ...newInnerContents,
            },
          });
        }
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
  supplementalContent,
  setSupplementalContent,
  newSupplementalOuterContents = {},
  newSupplementalInnerContents = {},
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
      supplementalContent,
      setSupplementalContent,
      newSupplementalInnerContents: Array.isArray(newSupplementalInnerContents)
        ? newSupplementalInnerContents[index]
        : newSupplementalInnerContents,
      newSupplementalOuterContents: Array.isArray(newSupplementalOuterContents)
        ? newSupplementalOuterContents[index]
        : newSupplementalOuterContents,
    });
  });
};

export { calculateMainContentHeight, generateMenuItem, generateMenuItems };
