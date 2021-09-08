import { useRef, useState } from "react";
import "./CopyTextToClipboard.css";
import { Button, Icon } from "semantic-ui-react";

export default function CopyTextToClipboard({ text }) {
  const [copySuccess, setCopySuccess] = useState(false);
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    setCopySuccess(true);
  }

  return (
    <div id="container">
      <div>
        <form>
          <textarea
            className="disable-resize"
            name="email"
            ref={textAreaRef}
            value={text}
            readonly
          />
        </form>
      </div>
      <div>
        <Button
          inverted
          style={{ marginLeft: "5px" }}
          onClick={copyToClipboard}
          color="white"
        >
          <Icon name="copy" color="teal"></Icon>
        </Button>
      </div>
      <div>{copySuccess && <Icon name="check" color="green"></Icon>}</div>
    </div>
  );
}
