import "./CherryBlossomLogo.css";
import { Image } from "semantic-ui-react";
import cherryBlossomLogo from "../../../assets/images/logos/cherry-blossom-tree.png";

function CherryBlossomLogo() {
  const cherryBlossomBranchText = "cherry blossom branch logo";

  return (
    <div className="cherry-blossom-logo-div">
      <Image
        className="cherry-blossom-logo"
        src={cherryBlossomLogo}
        alt={cherryBlossomBranchText}
      />
    </div>
  );
}

export default CherryBlossomLogo;
