import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { generateMenuItems } from "../../../../../utils/components";

const itemNames = ["Introduction", "HTML Primer", "React Primer", "Resources"];
const newStateNames = [
  "Introduction",
  "HtmlPrimer",
  "ReactPrimer",
  "Resources",
];

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
    } = this.props;

    const activeItem = mapSectionToMenuName(name);

    return (
      <Menu fluid tabular widths={4}>
        {generateMenuItems({
          activeItem,
          itemNames,
          newStateNames,
          mainContent,
          setMainContent,
        })}
      </Menu>
    );
  }
}
