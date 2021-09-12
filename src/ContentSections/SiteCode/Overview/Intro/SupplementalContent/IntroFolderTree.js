import FolderTree from "react-folder-tree";
import "react-folder-tree/dist/style.css";

const relativeFolderStructure = {
  name: "Intro",
  isOpen: false,
  children: [
    {
      name: "SupplementalContent",
      isOpen: false,
      children: [
        { name: "IntroCode.js" },
        { name: "IntroFolderTree.js" },
        { name: "IntroComponentTree.js" },
        { name: "IntroMenu.js" },
        { name: "IntroSupplementalContainer.js" },
      ],
    },
    { name: "Intro.js" },
    { name: "text.js" },
  ],
};

const IntroFolderTree = () => {
  return (
    <FolderTree data={relativeFolderStructure} showCheckbox={false} readOnly />
  );
};

export default IntroFolderTree;
