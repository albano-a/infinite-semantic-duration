import { useState } from "preact/hooks";

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };
  const buttonStyle = {
    position: "absolute",
    margin: "10px",
    right: "0",
  };

  return (
    <div className="container has-text-right" style={buttonStyle}>
      <button className="button is-primary-dark" onClick={copyToClipboard}>
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

export default CopyButton;
