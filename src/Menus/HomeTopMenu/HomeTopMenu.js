import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

const mapSectionToItemName = (topMenuSection) => {
  const mapping = {
    "Home.Introduction": "Intro",
    "Home.Methodology": "Methodology",
    "Home.Navigation": "Navigation",
    "Home.Contact": "Contact",
  };

  return mapping[topMenuSection];
};

export default class HomeTopMenu extends Component {
  render() {
    const activeItem = mapSectionToItemName(this.props.topMenuSelection);

    return (
      <Menu fluid tabular widths={4}>
        <Menu.Item
          name="Intro"
          active={activeItem === "Intro"}
          onClick={(e, state) => {
            this.props.setMainContent({
              showTopMenu: true,
              name: "Home",
              mainContentSection: { name: "Home.Introduction" },
            });
          }}
        />
        <Menu.Item
          name="Methodology"
          active={activeItem === "Methodology"}
          onClick={(e, state) => {
            this.props.setMainContent({
              showTopMenu: true,
              name: "Home",
              mainContentSection: { name: "Home.Methodology" },
            });
          }}
        />
        <Menu.Item
          name="Navigation"
          active={activeItem === "Navigation"}
          onClick={(e, state) => {
            this.props.setMainContent({
              showTopMenu: true,
              name: "Home",
              mainContentSection: { name: "Home.Navigation" },
            });
          }}
        />
        <Menu.Item
          name="Contact"
          active={activeItem === "Contact"}
          onClick={(e, state) => {
            this.props.setMainContent({
              showTopMenu: true,
              name: "Home",
              mainContentSection: { name: "Home.Contact" },
            });
          }}
        />
      </Menu>
    );
  }
}
