import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { generateMenuItems } from "../../utils/components";

const itemNames = ["Introduction", "Methodology", "Contact", "Navigation"];
const newInnerContents = itemNames.map((name) => {
  return { name };
});

export default class HomeMenu extends Component {
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

    const activeItem = name;

    return (
      <Menu fluid tabular widths={4}>
        {generateMenuItems({
          activeItem,
          itemNames,
          newInnerContents,
          newOuterContents: { name: "Home" },
          mainContent,
          setMainContent,
          supplementalContent,
          setSupplementalContent,
          newSupplementalInnerContents: newInnerContents,
          newSupplementalOuterContents: { show: false, name: "Home" },
        })}
      </Menu>
    );
  }
}
