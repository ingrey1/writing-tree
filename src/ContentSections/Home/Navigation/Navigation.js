import { Header, Container, Icon, Button } from "semantic-ui-react";

function Navigation() {
  return (
    <Container text textAlign="center">
      <Header as="h3">Navigation</Header>
      <Header as="h4">Icons</Header>
      <Icon name="book" color="teal" size="large" />
      <p>
        This icon lives in the main content section for some topics. It means
        there is some additional content related to the things described above
        it. Clicking the icon will open the relevant supplemental content
        section.
      </p>
      <Icon name="expand" color="teal" size="large" />
      <p>
        This icon lives in the top left portion of the supplemental content
        section. Clicking the icon will expand or contract the supplemental
        content section.
      </p>
      <Icon name="copy" color="teal" size="large" />
      <p>
        You will find this icon next to certain code snippets and text blocks.
        Clicking it will copy the relevant text
      </p>
      <Icon name="bars" color="teal" size="large" />
      <p>
        This icon is a menu. You can click on it to bring up various options.
        The main menu for the mobile layout uses this icon: you can find it on
        the top left on the main content area.
      </p>
      <Icon name="amazon" color="teal" size="large" />
      <p>
        You will sometimes find this icon next to the names of books. Click the
        icon to open up a new tab with the book in Amazon. These aren't
        affiliatized links (I dont make money from them). This is just a quick
        way for you to read the summary of the book and glance at the reviews to
        see if it's something you might be interested in purchasing.
      </p>
      <Icon name="tree" color="teal" size="large" />
      <p>
        This icon represents an external link to an article or book. You will
        find it occasionally in the supplemental content sections.
      </p>
      <Header as="h4">Actions</Header>
      <Button basic color="teal">
        Show Extra Content
      </Button>
      <p>
        This button can be found in the actions panel on the right, visible in
        large screen mode. Clicking it will toggle the supplemental content
        section. Alternatively, on mobile, you can click on the toggle extra
        content option in the main menu located at the top of the screen.
      </p>
    </Container>
  );
}

export default Navigation;
