import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class NavigationMenu extends Component {
  render() {
    const activeItem = "Code";
    return (
      <Menu fluid tabular widths={2}>
        <Menu.Item
          name="Code"
          active={activeItem === "Code"}
          onClick={() => {
            this.props.setSupplementalContent({
              ...this.props.supplementalContent,
              show: true,
              name: "Home",
              supplementalContentSection: {
                name: "Navigation",
                subsection: "Code",
              },
            });
          }}
        />
      </Menu>
    );
  }
}
