import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

const mapSectionToItemName = (topMenuSection) => {
  if (topMenuSection === "ContactMe") return "Contact Me";
  else if (topMenuSection === "UsingThisSite") return "UsingThisSite";
  else return topMenuSection;
};

export default class HomeTopMenu extends Component {
  render() {
    const activeItem = mapSectionToItemName(this.props.topMenuSelection);

    return (
      <Menu fluid tabular widths={5}>
        <Menu.Item
          name="Introduction"
          active={activeItem === "Introduction"}
          onClick={(e, state) => {
            this.props.setMainContent({
              showTopMenu: true,
              name: "Home",
              mainContentSection: { name: "Introduction" },
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
              mainContentSection: { name: "Methodology" },
            });
          }}
        />
        <Menu.Item
          name="Using This Site"
          active={activeItem === "Using This Site"}
          onClick={(e, state) => {
            this.props.setMainContent({
              showTopMenu: true,
              name: "Home",
              mainContentSection: { name: "UsingThisSite" },
            });
          }}
        />
        <Menu.Item
          name="Contact Me"
          active={activeItem === "Contact Me"}
          onClick={(e, state) => {
            this.props.setMainContent({
              showTopMenu: true,
              name: "Home",
              mainContentSection: { name: "ContactMe" },
            });
          }}
        />
      </Menu>
    );
  }
}
