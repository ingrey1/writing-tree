import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class ContactMenu extends Component {
  render() {
    const activeItem = "Code";

    return (
      <Menu fluid tabular widths={2}>
        <Menu.Item
          name="Code"
          active={activeItem === "Code"}
          onClick={(e, state) => {
            this.props.setSupplementalContent({
              ...this.props.supplementalContent,
              show: true,
              name: "Home.Contact",
              supplementalContentSection: {
                name: "Home.Contact",
                subsection: "Contact",
              },
            });
          }}
        />
      </Menu>
    );
  }
}
