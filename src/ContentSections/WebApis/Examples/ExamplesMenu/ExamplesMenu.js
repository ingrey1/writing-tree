import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { generateMenuItems } from "../../../../utils/components";

const itemNames = ["Book Hero API"];
const newInnerContents = ["BookHeroApi"].map((name) => {
  if (name === "BookHeroApi") {
    return { name, subsection: "Visualization" };
  }

  return { name };
});

const newOuterContents = { name: "WebApisExamples" };

const newSupplementalOuterContents = { show: false, name: "WebApisExamples" };

const mapSectionToMenuName = (subsection) => {
  const mappings = {
    BookHeroApi: "Book Hero API",
  };
  return mappings[subsection] || subsection;
};

export default class ExamplesMenu extends Component {
  render() {
    const {
      mainContent,
      mainContent: {
        mainContentSection: { name },
      },
      setMainContent,
      supplementalContent,
      setSupplementalContent,
    } = this.props;

    const activeItem = mapSectionToMenuName(name);

    return (
      <Menu fluid tabular widths={1}>
        {generateMenuItems({
          activeItem,
          itemNames,
          newInnerContents,
          newOuterContents,
          mainContent,
          setMainContent,
          supplementalContent,
          setSupplementalContent,
          newSupplementalInnerContents: newInnerContents,
          newSupplementalOuterContents,
        })}
      </Menu>
    );
  }
}
