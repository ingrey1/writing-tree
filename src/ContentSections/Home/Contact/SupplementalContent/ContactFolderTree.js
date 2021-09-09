import FolderTree from "react-folder-tree";
import "react-folder-tree/dist/style.css";

const relativeFolderStructure = {
  name: "Contact",
  isOpen: false,
  children: [
    {
      name: "SupplementalContent",
      isOpen: false,
      children: [
        { name: "ContactCode.js" },
        { name: "ContactFolderTree.js" },
        { name: "ContactComponentTree.js" },
        { name: "ContactMenu.js" },
        { name: "ContactSupplementalContainer.js" },
      ],
    },
    { name: "Contact.css" },
    { name: "Contact.js" },
  ],
};

const ContactFolderTree = () => {
  return (
    <FolderTree data={relativeFolderStructure} showCheckbox={false} readOnly />
  );
};

export default ContactFolderTree;
