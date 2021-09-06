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
            this.props.setSupplementalContent({
              show: false,
              name: "Home.Introduction",
              supplementalContentSection: { name: "NoContent" },
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
            this.props.setSupplementalContent({
              show: false,
              name: "Home.Methodology",
              supplementalContentSection: { name: "NoContent" },
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
            this.props.setSupplementalContent({
              show: false,
              name: "Home.Navigation",
              supplementalContentSection: { name: "NoContent" },
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
            this.props.setSupplementalContent({
              show: false,
              name: "Home.Contact",
              supplementalContentSection: { name: "NoContent" },
            });
          }}
        />
      </Menu>
    );
  }
}
