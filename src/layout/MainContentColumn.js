import { Grid } from "semantic-ui-react";
import MobileMainMenu from "../Menus/MobileMainMenu/MobileMainMenu";
import MainContent from "../MainContent/MainContent";
import ToggleSupplementalContentAction from "../Actions/ToggleSupplementalContentAction";
import { getTopMenu, getSectionContent } from "../utils";

export default function MainContentColumn({
  mainContent,
  setMainContent,
  supplementalContent,
  setSupplementalContent,
}) {
  return (
    <>
      {window.screen.width <= 650 && (
        <Grid.Column width={3} style={{ overflow: "auto", height: "10vh" }}>
          <ToggleSupplementalContentAction
            supplementalContent={supplementalContent}
            setSupplementalContent={setSupplementalContent}
          />
          <Grid.Row style={{ height: "10vh" }}>
            <MobileMainMenu
              setMainContent={setMainContent}
              supplementalContent={supplementalContent}
              setSupplementalContent={setSupplementalContent}
            />
          </Grid.Row>
        </Grid.Column>
      )}
      <MainContent
        supplementalContent={supplementalContent}
        setSupplementalContent={setSupplementalContent}
        TopMenu={getTopMenu(mainContent.name)}
        topMenuSection={mainContent.mainContentSection.name}
        showTopMenu={mainContent.showTopMenu}
        setMainContent={setMainContent}
        ContentSection={getSectionContent(
          mainContent.name,
          mainContent.mainContentSection
        )}
      />
    </>
  );
}
