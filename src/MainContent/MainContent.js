function MainContent({
  TopMenu,
  topMenuSection,
  showTopMenu,
  setMainContent,
  supplementalContent,
  setSupplementalContent,
  ContentSection,
}) {
  return (
    <>
      {showTopMenu && (
        <TopMenu
          topMenuSelection={topMenuSection}
          setMainContent={setMainContent}
          setSupplementalContent={setSupplementalContent}
        />
      )}
      <ContentSection
        supplementalContent={supplementalContent}
        setSupplementalContent={setSupplementalContent}
      />
    </>
  );
}

export default MainContent;
