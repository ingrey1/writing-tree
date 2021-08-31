import "./LogoStack.css";
import Logo from "../Logo/Logo"

function LogoStack() {

  const growingBookPath = "images/logos/growing-book.svg"
  const growingBookText = "growing book logo"
  const curiousOwlPath = "images/logos/curious-owl.svg"
  const curiousOwlText = "curious owl logo"
  const cherryBlossomTreePath = "images/logos/cherry-blossom-tree.svg"
  const cherryBlossomTreeText = "cherry blossom tree logo"
  

  return (
    <div className="LogoStack">
         <Logo
          relativePath={growingBookPath}
          altText={growingBookText}
        />
        <Logo
          relativePath={curiousOwlPath}
          altText={curiousOwlText}
        />
        <Logo
          relativePath={cherryBlossomTreePath}
          altText={cherryBlossomTreeText}
        />
    </div>
  );
}

export default LogoStack;