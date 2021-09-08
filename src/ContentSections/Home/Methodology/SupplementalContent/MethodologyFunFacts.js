import { Container, Header } from "semantic-ui-react";
import IconButtonLink from "../../../../common/components/IconButtonLink";
import { goodCaloriesBadCaloriesOnAmazon } from "../../../../common/constants";

export default function FunFacts() {
  return (
    <Container text>
      <p></p>
      <Header as="h3">Appeal to Scientific Authority: a Cautionary Tale</Header>
      <p>
        In the main content section, I mentioned the fact that we sometimes must
        rely on experts as a matter of practical necessity. In this section, I
        will clarify what I mean by that, and provide an interesting example
        gleaned from science writer Gary Taubes' seminal work.
      </p>
      <p>
        <i>
          Good Calories, Bad Calories: Fats, Carbs, and the Controversial
          Science of Diet and Health
          <IconButtonLink
            inverted
            iconName="amazon"
            url={goodCaloriesBadCaloriesOnAmazon}
            buttonColor="white"
            buttonSize="large"
            iconSize="large"
          />
        </i>
      </p>
    </Container>
  );
}
