import Introduction from "../Introduction/Introduction";

function MainContent({ MainContentComponent, mainContentProps }) {

   

  return !MainContentComponent ? <Introduction /> : (
    <div className="main-content-container">
      <MainContentComponent {...mainContentProps} />
    </div>
  );
}

export default MainContent
