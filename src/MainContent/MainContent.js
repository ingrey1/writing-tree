function MainContent({
  TopMenu,
  topMenuSection,
  showTopMenu,
  setMainContent,
  ContentSection,
}) {
  return (
    <>
      {showTopMenu && (
        <TopMenu
          topMenuSelection={topMenuSection}
          setMainContent={setMainContent}
        />
      )}
      <ContentSection />
    </>
  );
}

export default MainContent;
