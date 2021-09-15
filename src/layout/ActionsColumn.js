import { Grid, Header, Divider } from "semantic-ui-react";
import ToggleSupplementalContentAction from "../Actions/ToggleSupplementalContentAction";
import IconButtonLink from "../common/components/IconButtonLink";
import { githubRootUrl } from "../common/constants";
export default function ActionsColumn({
  supplementalContent,
  setSupplementalContent,
}) {
  return (
    <Grid.Column width={3}>
      <Header as="h2" textAlign="center">
        Actions
      </Header>
      <Grid>
        <Grid.Column textAlign="center">
          <ToggleSupplementalContentAction
            supplementalContent={supplementalContent}
            setSupplementalContent={setSupplementalContent}
          />
          <Divider />

          <IconButtonLink
            url={githubRootUrl}
            iconName="github"
            buttonSize="huge"
          />
        </Grid.Column>
      </Grid>
    </Grid.Column>
  );
}
