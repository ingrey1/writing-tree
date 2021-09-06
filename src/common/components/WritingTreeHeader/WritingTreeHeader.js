import { Header } from "semantic-ui-react";
import CherryBlossomLogo from "../CherryBlossomLogo/CherryBlossomLogo";

function WritingTreeHeader() {
  return (
    <div className="writing-tree-header-container">
      <Header as="h1" style={{ marginTop: "10px" }} textAlign="center">
        Writing Tree
      </Header>
      <CherryBlossomLogo />
    </div>
  );
}

export default WritingTreeHeader;
