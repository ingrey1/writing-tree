function MainContent({
  TopMenu,
  topMenuSection,
  showTopMenu,
  setMainContent,
  ContentSection,
}) {
  return (
    <div className="main-content-container">
      {showTopMenu && (
        <TopMenu
          topMenuSelection={topMenuSection}
          setMainContent={setMainContent}
        />
      )}
      <ContentSection />
    </div>
  );
}

export default MainContent;
