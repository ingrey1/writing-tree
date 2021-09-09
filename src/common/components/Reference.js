export default function Reference({ data, showContext }) {
  const { type, context } = data;

  let citation;

  if (type === "book") {
    const { author, year, title, edition, publisher } = data;
    citation = (
      <>
        {author}. ({year}). <i>{title}</i> ({edition} ed.). {publisher}
      </>
    );
  }

  return (
    <div>
      <p>{citation}</p>
      {showContext && <p>{context}</p>}
    </div>
  );
}
