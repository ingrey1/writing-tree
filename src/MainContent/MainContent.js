function MainContent({
  TopMenu,
  topMenuSection,
  showTopMenu,
  setMainContent,
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
      <ContentSection />
    </>
  );
}

export default MainContent;
