import { Container, Header, Message } from "semantic-ui-react";
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
        since Plato tried to grasp the Real, the Good, and the True from his arm
        chair in ancient Greece. Philosophy of science wasn't a thing back then
        because the sciences weren't what they are now. Here's a look at one
        thing philosophers of science talk about. Feel free to check it out if
        you're interested.
        <IconButtonLink
          inverted
          iconName="tree"
          url={philosophyScientificRepresentation}
          buttonColor="white"
          buttonSize="large"
          iconSize="large"
        />
      </p>
      <p>
        The world only continues to grow more complex. Just look at the strange
        turn things have taken with the rise of automation, and the promise of
        computer science--the speculative fiction writers of the past might have
        been more right than they knew. We can all appreciate the advantages
        this complexity has given us. We are healthier, live longer, enjoy
        access to lots of shiny toys, and have eliminated many types of
        suffering that were once thought part and parcel of the human condition.
      </p>
      <p>
        And yet this complexity also brings with it a strong sense of
        bewilderment and discomfort. Where our ancestors could take solace in
        their fables and myths because there were no other options, we now have
        to make decisions about which experts to rely on, when to rely on them,
        and to what degree. This gives rise to the problem of the tyranny of
        experts (I just made this name up, but maybe it exists already).
      </p>
      <p>
        Given the critical importance of the disciplines that relate to human
        health, these questions become even more pertinent. For example, however
        much you might wonder now and again whether your doctor is a
        con(fidence) man, most of us cannot be our own medical practitioners.
      </p>
      <p>
        But we can practice a bit of healthy skepticism, and be judicious in
        which experts we rely on, in what circumstances, and to what degree. The
        democratization of information via the internet has given us access to
        some wonderful resources, despite all the outrage directed toward the
        phenomenon of misinformation.
      </p>
      <p>
        That said, I want to return to where I started, with Taubes' book,
        because it beautifully illustrates how even with the hardest of
        empirical sciences, despite majority agreement among practitioners of
        the discipline, they may still have gotten things terribly wrong. It is
        also one of the most meticulously researched and well-written pieces of
        scientific journalism I've encountered. I'd recommend you read it, and
        form your own opinion.
      </p>
      <p>In the Prologue, Taubes writes:</p>
      <Message>
        <p>
          The reason for this book is straightforward: despite the depth and
          certainty of our faith that saturated fat is the nutritional bane of
          our lives and that obesity is caused by overeating and sedentary
          behavior, there has always been copious evidence to suggest that those
          assumptions are incorrect and that evidence is continuing to mount.
          "There is always an easy solution to every human problem," H.L.
          Mencken once said--"neat, plausible, and wrong." It is quite possible,
          despite all our faith to the contrary, that these concepts are such
          neat, plausible, and wrong solutions. Moreover, it's also quite
          possible that the low-fat, high-carbohydrate diets we've been told to
          eat for the past thirty years are not only making us heavier but
          contributing to other chronic diseases as well.
        </p>
        ...
        <p>
          In this book my aim is to look critically at a straightforward
          question to which most of us believe we know the answer. What
          constitutes a healthy diet? What should we eat if we want to live a
          long and a healthy life? To address this question, we'll examine the
          evidence supporting both the prevailing wisdom and this alternative
          hypothesis, and we'll confront the possibility that much of what we've
          come to believe is wrong.
        </p>
        ...
        <p>
          By critically examining the research that led to the prevailing wisdom
          of nutrition and health, this book may appear to be one-sided, but
          only in that it presents a side that is not often voiced publicly.
          Since the 1970s, the belief that saturated fat causes heart disease
          and perhaps other chronic diseases has been justified by a series of
          expoert reports--from the U.S. Department of Agriculture, the Surgeon
          General's Office, the National Academy of Sciences, and the Department
          of Health in the U.K., among others. These reports present the
          evidence in support of the fat-cholesterol hypothesis and mostly omit
          the evidence in contradiction. This makes for a very compelling case,
          but it is not how science is best served.
        </p>
      </Message>
    </Container>
  );
}
