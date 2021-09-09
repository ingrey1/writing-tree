import { useState } from "react";
import { Grid } from "semantic-ui-react";
import "./App.css";
import MainMenuColumn from "../layout/MainMenuColumn";
import MainContentColumn from "../layout/MainContentColumn";
import ActionsColumn from "../layout/ActionsColumn";
import SupplementalContentRow from "../layout/SupplementalContentRow";
import { calculateMainContentHeight } from "../utils/components";
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
    expand: false,
    name: "Home.Introduction",
    supplementalContentSection: {
      name: "Home.Introduction",
      subsection: "Code",
    },
  });

  return (
    <Grid celled="internally">
      <Grid.Row>
        {isLargeScreen && (
          <MainMenuColumn
            mainContent={mainContent}
            setMainContent={setMainContent}
            supplementalContent={supplementalContent}
            setSupplementalContent={setSupplementalContent}
          />
        )}
        <Grid.Column
          width={isLargeScreen ? contentColumnSize : fullHorizontalSize}
          style={{ height: "100vh" }}
        >
          <Grid.Row
            style={{
              height: supplementalContent.show
                ? supplementalContent.expand
                  ? "5vh"
                  : "60vh"
                : "100vh",
              overflowX: "hidden",
            }}
          >
            <Grid.Column
              width={isLargeScreen ? contentColumnSize : fullHorizontalSize}
              style={{
                overflow: "auto",
                overflowX: "hidden",
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

          {supplementalContent.show && (
            <SupplementalContentRow
              supplementalContent={supplementalContent}
              setSupplementalContent={setSupplementalContent}
            />
          )}
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
