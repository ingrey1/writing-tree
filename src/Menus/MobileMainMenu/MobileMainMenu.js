import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import {
  generateHomeMenuItem,
  generateOverviewMenuItem,
} from "../commonMenuItems";

const dropDownstyle = {
  "z-index": 1,
  position: "absolute",
  color: "#000080",
};

export default class MobileMainMenu extends Component {
  render() {
    const {
      mainContent,
      mainContent: { name },
      supplementalContent,
      setMainContent,
      setSupplementalContent,
    } = this.props;
    const activeItem = name;

    return (
      <Dropdown icon="bars" style={dropDownstyle}>
        <Dropdown.Menu vertical>
          {generateHomeMenuItem({
            activeItem,
            componentType: "Dropdown",
            mainContent,
            supplementalContent,
            setMainContent,
            setSupplementalContent,
          })}
          <Dropdown.Divider />
          <Dropdown item text="Site Code">
            <Dropdown.Menu>
              {generateOverviewMenuItem({
                activeItem,
                mainContent,
                supplementalContent,
                setMainContent,
                setSupplementalContent,
              })}
              <Dropdown.Item>Frontend</Dropdown.Item>
              <Dropdown.Item>Backend</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

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
                onClick={() => {
                  setMainContent({
                    name: "Resources",
                    mainContentSection: { name: "References" },
                  });
                  setSupplementalContent({
                    name: "Resources",
                    supplementalContentSection: {
                      name: "References",
                      subsection: "Code",
                    },
                    show: false,
                    expand: false,
                  });
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
                onClick={() => {
                  setSupplementalContent({
                    ...this.props.supplementalContent,
                    show: !this.props.supplementalContent.show,
                  });
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
