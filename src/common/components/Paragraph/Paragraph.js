function Paragraph({ content, endComponent }) {
  return (
    <p
      className="paragraph"
      style={{ marginBottom: "10px", marginTop: "10px" }}
    >
      {content}
      {endComponent}
    </p>
  );
}

export default Paragraph;
