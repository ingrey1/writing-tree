import "./LogoStack.css";
import { ReactComponent as GrowingBookLogo } from "../../assets/images/logos/growing-book.svg";
import { ReactComponent as CuriousOwlLogo } from "../../assets/images/logos/curious-owl.svg";
import { ReactComponent as CherryBlossomBranchLogo } from "../../assets/images/logos/cherry-blossom-branch.svg";

function LogoStack() {
  const growingBookText = "growing book logo";
  const curiousOwlText = "curious owl logo";
  const cherryBlossomBranchText = "cherry blossom branch logo";

  return (
    <div className="LogoStack">
      <GrowingBookLogo className="logo-stack-image" alt={growingBookText} />
      <CuriousOwlLogo className="logo-stack-image" alt={curiousOwlText} />
      <CherryBlossomBranchLogo
        className="logo-stack-image"
        alt={cherryBlossomBranchText}
      />
    </div>
  );
}

export default LogoStack;
