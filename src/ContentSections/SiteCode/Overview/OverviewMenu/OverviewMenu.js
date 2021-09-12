import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { generateMenuItems } from "../../../../utils/components";

const itemNames = ["Introduction", "HTML Primer", "React Primer"];
const newInnerContents = ["Introduction", "HtmlPrimer", "ReactPrimer"].map(
  (name) => {
    if (name === "HtmlPrimer") {
      return { name, subsection: "Html" };
    }

    return { name };
  }
);

const newOuterContents = { name: "Overview" };

const newSupplementalOuterContents = { show: false, name: "Overview" };

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
      <Menu fluid tabular widths={3}>
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
