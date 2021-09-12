import { Header, Container, Icon, Button } from "semantic-ui-react";
import Paragraph from "../../../common/components/Paragraph/Paragraph";
import { paragraphs } from "./text";

function Navigation() {
  return (
    <Container text textAlign="center">
      <Header as="h3">Navigation</Header>
      <Header as="h4">Icons</Header>
      <Icon name="book" color="teal" size="large" />
      <Paragraph content={paragraphs[1]} />
      <Icon name="expand" color="teal" size="large" />
      <Paragraph content={paragraphs[2]} />
      <Icon name="copy" color="teal" size="large" />
      <Paragraph content={paragraphs[3]} />
      <Icon name="bars" color="teal" size="large" />
      <Paragraph content={paragraphs[4]} />
      <Icon name="amazon" color="teal" size="large" />
      <Paragraph content={paragraphs[5]} />
      <Icon name="tree" color="teal" size="large" />
      <Paragraph content={paragraphs[6]} />
      <Icon name="cut" color="teal" size="large" />
      <Paragraph content={paragraphs[9]} />
      <Icon name="eye" color="teal" size="large" />
      <Paragraph content={paragraphs[10]} />
      <Header as="h4">Actions</Header>
      <Button basic color="teal">
        Show Extra Content
      </Button>
      <Paragraph content={paragraphs[7]} />
      <Button color="violet">
        <Icon color="teal" name="github"></Icon>
      </Button>
      <Paragraph content={paragraphs[8]} />
    </Container>
  );
}

export default Navigation;
