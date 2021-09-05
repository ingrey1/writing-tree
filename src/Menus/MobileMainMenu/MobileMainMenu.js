import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";

const dropDownstyle = {
  height: "5vh",
  "z-index": 1,
  position: "absolute",
  color: "#000080",
  "background-color": "teal",
  "font-size": "100%",
};

export default class MobileMainMenu extends Component {
  state = {};
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Dropdown text="Menu" style={dropDownstyle}>
        <Dropdown.Menu vertical>
          <Dropdown.Item
            name="Home"
            text="Home"
            active={activeItem === "Home"}
            onClick={(e, state) => {
              this.props.setMainContent({
                name: "Home",
                mainContentSection: { name: "Introduction" },
                showTopMenu: true,
              });
              this.handleItemClick(e, state);
            }}
          ></Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Menu item text="Site Code">
            <Dropdown.Item>Start Here</Dropdown.Item>
            <Dropdown.Item>Frontend</Dropdown.Item>
            <Dropdown.Item>Backend</Dropdown.Item>
          </Dropdown.Menu>

          <Dropdown item text="Web APIs">
            <Dropdown.Menu>
              <Dropdown.Item>Introduction</Dropdown.Item>
              <Dropdown.Item>Open API</Dropdown.Item>
              <Dropdown.Item>Tutorials</Dropdown.Item>
              <Dropdown.Item>Examples</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown item text="Native APIs">
            <Dropdown.Menu>
              <Dropdown.Item>Introduction</Dropdown.Item>
              <Dropdown.Item>Tutorials</Dropdown.Item>
              <Dropdown.Item>Examples</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown item text="Miscellaneous">
            <Dropdown.Menu>
              <Dropdown.Item>Microservices</Dropdown.Item>
              <Dropdown.Item>Data Flows</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown item text="Resources">
            <Dropdown.Menu>
              <Dropdown.Item>Blog</Dropdown.Item>
              <Dropdown.Item>Articles</Dropdown.Item>
              <Dropdown.Item>Glossary</Dropdown.Item>
              <Dropdown.Item>References</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text="Actions">
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={(e, state) => {
                  this.props.setSupplementalContent({
                    show: !this.props.setSupplementalContent.show,
                  });
                  this.handleItemClick(e, state);
                }}
              >
                Toggle Supplemental Content
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
