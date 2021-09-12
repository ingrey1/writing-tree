import { Container, Header, Message } from "semantic-ui-react";
import IconButtonLink from "../../../../common/components/IconButtonLink";
import Reference from "../../../../common/components/Reference/Reference";
import Paragraph from "../../../../common/components/Paragraph/Paragraph";
import { paragraphs } from "./funFactsText";
import { home } from "../../../../common/data/references";
import {
  goodCaloriesBadCaloriesOnAmazon,
  philosophyScientificRepresentation,
} from "../../../../common/constants";

import { generateArrayFromRange } from "../../../../utils/general";

const {
  methodology: {
    funFacts: { calories, philosophyScience },
  },
} = home;

const amazonLink = (
  <IconButtonLink
    inverted
    iconName="amazon"
    url={goodCaloriesBadCaloriesOnAmazon}
    buttonColor="white"
    buttonSize="large"
    iconSize="large"
  />
);

const philosophyLink = (
  <IconButtonLink
    inverted
    iconName="tree"
    url={philosophyScientificRepresentation}
    buttonColor="white"
    buttonSize="large"
    iconSize="large"
  />
);

const paragraphs2to6 = generateArrayFromRange(2, 6, 1).map((key) => (
  <Paragraph key={key} content={paragraphs[key]} />
));

const paragraphs8To13 = generateArrayFromRange(8, 13, 1).map((key) => (
  <Paragraph key={key} content={paragraphs[key]} />
));

const paragraphs14To16 = generateArrayFromRange(14, 16, 1).map((key) => (
  <Paragraph key={key} content={paragraphs[key]} />
));

const paragraphs18To20 = generateArrayFromRange(18, 20, 1).map((key) => (
  <Paragraph key={key} content={paragraphs[key]} />
));

const paragraphs29To31 = generateArrayFromRange(29, 31, 1).map((key) => (
  <Paragraph key={key} content={paragraphs[key]} />
));

const paragraphs23To28 = generateArrayFromRange(23, 28, 1).map((key) => (
  <Paragraph key={key} content={paragraphs[key]} />
));

export default function FunFacts() {
  return (
    <Container text>
      <p></p>
      <Header as="h3">Appeal to Scientific Authority: A Cautionary Tale</Header>
      <Paragraph content={paragraphs[1]} />
      <Paragraph
        content={
          <i>
            Good Calories, Bad Calories: Fats, Carbs, and the Controversial
            Science of Diet and Health
          </i>
        }
        endComponent={amazonLink}
      />
      {paragraphs2to6}
      <Paragraph content={paragraphs[7]} endComponent={philosophyLink} />
      {paragraphs8To13}
      <Message>{paragraphs14To16}</Message>
      <Paragraph content={paragraphs[17]} />
      From Chapter 2:
      <Message>{paragraphs18To20}</Message>
      <Paragraph content={paragraphs[21]} />
      <Paragraph content={paragraphs[22]} />
      From chapter 5:
      <Message>{paragraphs23To28}</Message>
      {paragraphs29To31}
      <Header as="h3">References</Header>
      <Reference data={calories}></Reference>
      <p></p>
      <Reference data={philosophyScience}></Reference>
    </Container>
  );
}
