import "./Logo.css";

function Logo({relativePath, altText}) {
  return (
    <div className="Logo">
        <img
          src={process.env.PUBLIC_URL + relativePath}
          alt={altText}
        />
    </div>
  );
}

export default Logo;