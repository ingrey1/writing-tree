import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

// const items = [
//   { key: "introduction", active: true, name: "Introduction" },
//   { key: "methodology", name: "Methodology" },
//   { key: "usingSite", name: "How To Use This Site" },
//   { key: "contact", name: "Contact" },
// ];

export default class TopMenu extends Component {
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
              mainContent: "Introduction",
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
              mainContent: "Methodology",
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
              mainContent: "UsingThisSite",
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
              mainContent: "ContactMe",
              mainContentSection: { name: "ContactMe" },
            });
          }}
        />
      </Menu>
    );
  }
}
