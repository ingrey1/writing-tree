import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class HomeMenu extends Component {
  render() {
    const {
      mainContentSection: { name },
    } = this.props.mainContent;
    const activeItem = name;

    return (
      <Menu fluid tabular widths={4}>
        <Menu.Item
          name="Introduction"
          active={activeItem === "Introduction"}
          onClick={(e, state) => {
            this.props.setMainContent({
              ...this.props.mainContent,
              name: "Home",
              mainContentSection: { name: "Introduction" },
            });
            this.props.setSupplementalContent({
              show: false,
              expand: false,
              name: "Home",
              supplementalContentSection: {
                name: "Introduction",
                subsection: "Code",
              },
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
            this.props.setSupplementalContent({
              show: false,
              expand: false,
              name: "Home",
              supplementalContentSection: {
                name: "Methodology",
                subsection: "FunFacts",
              },
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
              mainContentSection: { name: "Navigation" },
            });
            this.props.setSupplementalContent({
              show: false,
              expand: false,
              name: "Home",
              supplementalContentSection: {
                name: "Navigation",
                subsection: "Code",
              },
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
              mainContentSection: { name: "Contact" },
            });

            this.props.setSupplementalContent({
              show: false,
              expand: false,
              name: "Home",
              supplementalContentSection: {
                name: "Contact",
                subsection: "Code",
              },
            });
          }}
        />
      </Menu>
    );
  }
}
