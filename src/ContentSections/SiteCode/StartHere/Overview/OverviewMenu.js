import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class OverviewMenu extends Component {
  render() {
    const activeItem =
      this.props.mainContent.mainContentSection.name.split(".")[1];
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
                name: "Overview.Introduction",
                subsection: "Code",
              },
            });
            this.props.setSupplementalContent({
              show: false,
              expand: false,
              name: "Overview",
              supplementalContentSection: {
                name: "Overview.Introduction",
                subsection: "Introduction",
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
                name: "Overview.ReactPrimer",
                subsection: "Code",
              },
            });
            this.props.setSupplementalContent({
              show: false,
              expand: false,
              name: "Overview",
              supplementalContentSection: {
                name: "Overview.ReactPrimer",
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
                name: "Overview.Resources",
                subsection: "Code",
              },
            });
            this.props.setSupplementalContent({
              show: false,
              expand: false,
              name: "Overview",
              supplementalContentSection: {
                name: "Overview.Resources",
                subsection: "Code",
              },
            });
          }}
        />
      </Menu>
    );
  }
}
