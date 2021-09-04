
function MainContent({
  TopMenu,
  showTopMenu,
  setMainContent,
  ContentSection
}) {
  return (
    <div className="main-content-container">
      {showTopMenu && <TopMenu setMainContent={setMainContent} />}
      <ContentSection />
    </div>
  );
}

export default MainContent;
