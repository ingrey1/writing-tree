import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class OverviewMenu extends Component {
  render() {
    const activeItem = this.props.mainContent.mainContentSection.name;
    return (
      <Menu fluid tabular widths={4}>
        <Menu.Item
          name="Introduction"
          active={activeItem === "Introduction"}
          onClick={(e, state) => {
            this.props.setMainContent({
              showTopMenu: false,
              name: "Overview",
              mainContentSection: {
                name: "Introduction",
              },
            });
            this.props.setSupplementalContent({
              show: false,
              expand: false,
              name: "Overview",
              supplementalContentSection: {
                name: "Introduction",
                subsection: "Code",
              },
            });
          }}
        />
        <Menu.Item
          name="ReactPrimer"
          active={activeItem === "ReactPrimer"}
          onClick={(e, state) => {
            this.props.setMainContent({
              showTopMenu: false,
              name: "Overview",
              mainContentSection: {
                name: "ReactPrimer",
              },
            });
            this.props.setSupplementalContent({
              show: false,
              expand: false,
              name: "Overview",
              supplementalContentSection: {
                name: "ReactPrimer",
                subsection: "Code",
              },
            });
          }}
        />
        <Menu.Item
          name="Resources"
          active={activeItem === "Resources"}
          onClick={(e, state) => {
            this.props.setMainContent({
              showTopMenu: false,
              name: "Overview",
              mainContentSection: {
                name: "Resources",
              },
            });
            this.props.setSupplementalContent({
              show: false,
              expand: false,
              name: "Overview",
              supplementalContentSection: {
                name: "Resources",
                subsection: "Code",
              },
            });
          }}
        />
      </Menu>
    );
  }
}
