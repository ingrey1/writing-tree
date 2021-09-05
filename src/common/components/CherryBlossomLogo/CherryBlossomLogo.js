import "./CherryBlossomLogo.css";
import { ReactComponent as Logo } from "../../../assets/images/logos/cherry-blossom-branch.svg";

function CherryBlossomLogo() {
  const cherryBlossomBranchText = "cherry blossom branch logo";

  return (
    <div className="cherry-blossom-logo-div">
      <Logo className="cherry-blossom-logo-svg" alt={cherryBlossomBranchText} />
    </div>
  );
}

export default CherryBlossomLogo;
