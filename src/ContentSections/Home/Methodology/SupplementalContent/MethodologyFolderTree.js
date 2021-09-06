import FolderTree from "react-folder-tree";
import "react-folder-tree/dist/style.css";

const FolderStructure = ({ data }) => {
  return (
    <FolderTree
      data={data}
      showCheckbox={false}
      readOnly
    />
  );
};

export default FolderStructure;
