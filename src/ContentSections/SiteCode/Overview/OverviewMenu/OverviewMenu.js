import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { generateMenuItems } from "../../../../utils/components";

const itemNames = ["Introduction", "HTML Primer", "React Primer", "Resources"];
const newInnerContents = [
  "Introduction",
  "HtmlPrimer",
  "ReactPrimer",
  "Resources",
].map((name) => {
  return { name };
});

const mapSectionToMenuName = (subsection) => {
  const mappings = {
    HtmlPrimer: "HTML Primer",
    ReactPrimer: "React Primer",
  };
  return mappings[subsection] || subsection;
};

export default class OverviewMenu extends Component {
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
      <Menu fluid tabular widths={4}>
        {generateMenuItems({
          activeItem,
          itemNames,
          newInnerContents,
          newOuterContents: { name: "Overview" },
          mainContent,
          setMainContent,
          supplementalContent,
          setSupplementalContent,
          newSupplementalInnerContents: newInnerContents,
          newSupplementalOuterContents: { show: false, name: "Overview" },
        })}
      </Menu>
    );
  }
}
