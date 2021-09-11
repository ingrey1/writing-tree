import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class ResourcesMenu extends Component {
  render() {
    const {
      mainContentSection: { name },
    } = this.props.mainContent;
    const activeItem = name;

    return (
      <Menu fluid tabular widths={4}>
        <Menu.Item
          name="References"
          active={activeItem === "References"}
          onClick={(e, state) => {
            this.props.setMainContent({
              showTopMenu: true,
              name: "Resources",
              mainContentSection: { name: "References" },
            });

            this.props.setSupplementalContent({
              show: false,
              expand: false,
              name: "Resources",
              supplementalContentSection: {
                name: "References",
                subsection: "NoContent",
              },
            });
          }}
        />
      </Menu>
    );
  }
}
