import { Header } from "semantic-ui-react";
import CherryBlossomLogo from "../CherryBlossomLogo/CherryBlossomLogo";

function WritingTreeHeader() {
  return (
    <div>
      <CherryBlossomLogo />
      <Header as="h1">Writing Tree</Header>
    </div>
  );
}

export default WritingTreeHeader;
