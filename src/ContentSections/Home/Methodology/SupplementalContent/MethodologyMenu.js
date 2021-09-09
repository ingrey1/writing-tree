import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class MethodologyMenu extends Component {
  render() {
    const activeItem = this.props.methodologyMenuSelection;

    return (
      <Menu fluid tabular widths={2}>
        <Menu.Item
          name="FunFacts"
          active={activeItem === "FunFacts"}
          onClick={(e, state) => {
            this.props.setSupplementalContent({
              ...this.props.supplementalContent,
              show: true,
              name: "Home",
              supplementalContentSection: {
                name: "Methodology",
                subsection: "FunFacts",
              },
            });
          }}
        />
        <Menu.Item
          name="Code"
          active={activeItem === "Code"}
          onClick={(e, state) => {
            this.props.setSupplementalContent({
              ...this.props.supplementalContent,
              show: true,
              name: "Home",
              supplementalContentSection: {
                name: "Methodology",
                subsection: "Code",
              },
            });
          }}
        />
      </Menu>
    );
  }
}
