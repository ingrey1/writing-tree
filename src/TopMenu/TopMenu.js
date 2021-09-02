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
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Methodology"
          active={activeItem === "Methodology"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Using This Site"
          active={activeItem === "Using This Site"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Contact Me"
          active={activeItem === "Contact Me"}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}

