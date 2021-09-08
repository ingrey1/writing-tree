import { Container, Header } from "semantic-ui-react";
import IconButtonLink from "../../../../common/components/IconButtonLink";
import {
  goodCaloriesBadCaloriesOnAmazon,
  philosophyScientificRepresentation,
} from "../../../../common/constants";

export default function FunFacts() {
  return (
    <Container text>
      <p></p>
      <Header as="h3">Appeal to Scientific Authority: A Cautionary Tale</Header>
      <p>
        In the main content section, I mentioned that we sometimes must rely on
        experts as a matter of practical necessity. In this section, I will
        elaborate on this theme with an interesting example gleaned from science
        writer Gary Taubes' seminal work.
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
      <p>
        Once upon a time, the sum of human knowledge was very small. As little
        as ten thousand years ago, only a few people could engage in the basics
        of farming. Until two thousand years ago, humanity had no idea how
        useful wheels could be.
      </p>
      <p>
        There were not many experts because humans had not advanced far upon the
        path of knowledge. And so in most cases, they did not have the choice to
        rely on experts. They either made do with what meager scraps of
        knowledge they could ferret out themselves, or turned to myths and
        fables for comfort.
      </p>
      <p>
        But eventually we built the tools to elevate ourselves. We learned to
        farm, and that surplus of food enabled larger populations that could
        afford to support specialization. And so the bar for human knowledge
        grew, and more subject matter experts started to appear.
      </p>
      <p>
        However, compared to the modern world, there was still much less
        complexity, and that meant our relationship with experts was much less
        complicated than it is today. Until a few hundred years ago, the
        sciences were all lumped together, and hadn't yet begun to develop their
        own sophisticated models, methodologies, and enormous domain knowledge
        bases. You could still find the Rennaisance (wo)man: The person who
        could come near the limits of the standards of human knowledge in many
        different fields, for a given historical period.
      </p>
      <p>
        But the industrial revolution occurred, and with it the beginnnings of
        the technological revolution. People built more complex tools, and those
        tools allowed us to further specialize. Soon enough the scope of human
        knowledge grew dramatically. We didn't have just biology, we had
        biochemistry, biophysics, genetics--the list goes on. New disciplines
        arose (e.g., information science). Old disciplines, like psychology,
        were formalized and advanced in unprecedented fashion.
      </p>
      <p>
        Even philosophy, that oldest of disciplines, had gotten a make over
        since Plato tried to grasp the Real, the Good, and True from his arm
        chair in ancient Greece. Philosophy of science wasn't a thing back then
        because the sciences weren't what they are now. Here's a look at what
        philosophers of science talk about.{" "}
        <IconButtonLink
          inverted
          iconName="tree"
          url={philosophyScientificRepresentation}
          buttonColor="white"
          buttonSize="large"
          iconSize="large"
        />
      </p>
    </Container>
  );
}
