import { useState } from "react";
import { Grid } from "semantic-ui-react";
import "./App.css";
import MainMenuColumn from "../layout/MainMenuColumn";
import MainContentColumn from "../layout/MainContentColumn";
import ActionsColumn from "../layout/ActionsColumn";
import SupplementalContentRow from "../layout/SupplementalContentRow";
import { calculateMainContentHeight } from "../utils";
import {
  isLargeScreen,
  fullHorizontalSize,
  contentColumnSize,
} from "../common/constants";

function App() {
  const [mainContent, setMainContent] = useState({
    name: "Home",
    mainContentSection: { name: "Home.Introduction" },
    showTopMenu: true,
  });

  const [supplementalContent, setSupplementalContent] = useState({
    show: false,
  });

  return (
    <Grid celled="internally" style={{ height: "100vh" }}>
      <Grid.Row>
        {isLargeScreen && <MainMenuColumn setMainContent={setMainContent} />}
        <Grid.Column
          width={isLargeScreen ? contentColumnSize : fullHorizontalSize}
          style={{ height: "100vh" }}
        >
          <Grid.Row
            style={{ height: supplementalContent.show ? "80vh" : "100vh" }}
          >
            <Grid.Column
              width={isLargeScreen ? contentColumnSize : fullHorizontalSize}
              style={{
                overflow: "auto",
                maxHeight: calculateMainContentHeight(supplementalContent.show),
                height: calculateMainContentHeight(supplementalContent.show),
              }}
            >
              <MainContentColumn
                mainContent={mainContent}
                setMainContent={setMainContent}
                supplementalContent={supplementalContent}
                setSupplementalContent={setSupplementalContent}
              />
            </Grid.Column>
          </Grid.Row>

          {supplementalContent.show && <SupplementalContentRow />}
        </Grid.Column>
        {isLargeScreen && (
          <ActionsColumn
            supplementalContent={supplementalContent}
            setSupplementalContent={setSupplementalContent}
          />
        )}
      </Grid.Row>
    </Grid>
  );
}

export default App;
