import FolderTree from "react-folder-tree";
import "react-folder-tree/dist/style.css";

const relativeFolderStructure = {
  name: "Navigation",
  isOpen: false,
  children: [
    {
      name: "SupplementalContent",
      isOpen: false,
      children: [
        { name: "NavigationCode.js" },
        { name: "NavigationFolderTree.js" },
        { name: "NavigationComponentTree.js" },
        { name: "NavigationMenu.js" },
        { name: "NavigationSupplementalContainer.js" },
      ],
    },
    { name: "Navigation.css" },
    { name: "Navigation.js" },
    { name: "text.js" },
  ],
};

const NavigationFolderTree = () => {
  return (
    <FolderTree data={relativeFolderStructure} showCheckbox={false} readOnly />
  );
};

export default NavigationFolderTree;
