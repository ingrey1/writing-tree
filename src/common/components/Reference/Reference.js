import "./Reference.css";

export default function Reference({ data, showContext, showBorder }) {
  const { type, about } = data;

  let citation;

  if (type === "book") {
    const { author, year, title, edition, publisher } = data;
    citation = (
      <>
        {author}. ({year}). <i>{title}</i> ({edition} ed.). {publisher}.
      </>
    );
  }

  return (
    <div className={showBorder && "border"}>
      <p>{citation}</p>
      {showContext && (
        <p>
          <b>Reasons to Read: </b>
          <p>{about}</p>
        </p>
      )}
    </div>
  );
}
