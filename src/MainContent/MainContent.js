function MainContent({
  TopMenu,
  topMenuSection,
  showTopMenu,
  mainContent,
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
        mainContent={mainContent}
        setMainContent={setMainContent}
        supplementalContent={supplementalContent}
        setSupplementalContent={setSupplementalContent}
      />
    </>
  );
}

export default MainContent;
