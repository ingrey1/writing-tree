import "./Reference.css";

const createAuthorsString = (author) => {
  if (!Array.isArray(author)) return author;

  let authorStr = "";

  author.forEach((authorName, index) => {
    if (index === 0) {
      authorStr += authorName;
    } else {
      authorStr += `, ${authorName}`;
    }
  });

  return authorStr;
};

export default function Reference({ data, showContext, showBorder }) {
  const { type, about, author, year, title } = data;

  let citation;

  if (type === "book") {
    const { edition, publisher } = data;

    citation = (
      <>
        {createAuthorsString(author)} ({year}). <i>{title}</i> ({edition} ed.).{" "}
        {publisher}.
      </>
    );
  } else if (type === "website") {
    const { website, fullUrl } = data;
    citation = (
      <>
        {createAuthorsString(author)} ({year}). <i>{title}</i>. {website}.{" "}
        {fullUrl}
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
