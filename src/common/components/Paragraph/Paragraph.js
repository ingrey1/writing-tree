function Paragraph({ content, endComponent }) {
  return (
    <p className="paragraph">
      {content}
      {endComponent}
    </p>
  );
}

export default Paragraph;
