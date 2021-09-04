import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class HomeTopMenu extends Component {
  state = { activeItem: "Introduction" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu fluid tabular widths={5}>
        <Menu.Item
          name="Introduction"
          active={activeItem === "Introduction"}
          onClick={(e, state) => {
            this.handleItemClick(e, state);
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
            this.handleItemClick(e, state);
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
            this.handleItemClick(e, state);
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
            this.handleItemClick(e, state);
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
