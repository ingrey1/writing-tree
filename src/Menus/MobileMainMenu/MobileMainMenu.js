import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";

const dropDownstyle = {
  "z-index": 1,
  position: "absolute",
  color: "#000080",
};

export default class MobileMainMenu extends Component {
  state = {};
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Dropdown icon="bars" style={dropDownstyle}>
        <Dropdown.Menu vertical>
          <Dropdown.Item
            name="Home"
            text="Home"
            active={activeItem === "Home"}
            onClick={(e, state) => {
              this.props.setMainContent({
                name: "Home",
                mainContentSection: { name: "Home.Introduction" },
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
              <Dropdown.Item
                onClick={(e, state) => {
                  this.props.setMainContent({
                    name: "Resources",
                    mainContentSection: { name: "References" },
                    showTopMenu: false,
                  });
                  this.props.setSupplementalContent({
                    name: "Resources",
                    supplementalContentSection: {
                      name: "References",
                      subsection: "Code",
                    },
                    show: false,
                    expand: false,
                  });
                  this.handleItemClick(e, state);
                }}
              >
                References
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown.Divider />
          <Dropdown item text="Actions">
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={(e, state) => {
                  this.props.setSupplementalContent({
                    ...this.props.supplementalContent,
                    show: !this.props.supplementalContent.show,
                  });
                  this.handleItemClick(e, state);
                }}
              >
                Toggle Extra Content
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
