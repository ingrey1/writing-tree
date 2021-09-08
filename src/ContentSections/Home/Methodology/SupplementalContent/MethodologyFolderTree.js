import FolderTree from "react-folder-tree";
import "react-folder-tree/dist/style.css";

const relativeFolderStructure = {
  name: "Methodology",
  isOpen: false,
  children: [
    {
      name: "SupplementalContent",
      isOpen: false,
      children: [
        { name: "MethodologyCode.js" },
        { name: "MethodologyFolderTree.js" },
        { name: "MethodologyComponentTree.js" },
        { name: "MethodologyFunFacts.js" },
        { name: "MethodologyMenu.js" },
        { name: "MethodologySupplementalContainer.js" },
      ],
    },
    { name: "Methodology.css" },
    { name: "Methodology.js" },
    { name: "text.js" },
  ],
};

const MethodologyFolderTree = () => {
  return (
    <FolderTree data={relativeFolderStructure} showCheckbox={false} readOnly />
  );
};

export default MethodologyFolderTree;
