function SupplementalContent({
  SupplementalContentComponent,
  supplementalContent,
  setSupplementalContent,
}) {
  return (
    <div className="supplemental-content-container">
      <SupplementalContentComponent
        setSupplementalContent={setSupplementalContent}
        supplementalContent={supplementalContent}
      />
    </div>
  );
}

export default SupplementalContent;
