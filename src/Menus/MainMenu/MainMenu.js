import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class MainMenu extends Component {
  state = {};
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu
        vertical
        style={{
          height: "100vh",
          zIndex: 1,
          position: "absolute",
        }}
      >
        <Menu.Menu>
          <Menu.Item
            text="Home"
            name="Home"
            active={activeItem === "Home"}
            onClick={(e, state) => {
              this.props.setMainContent({
                name: "Home",
                mainContentSection: { name: "Home.Introduction" },
                showTopMenu: true,
              });
              this.props.setSupplementalContent({
                name: "Home.Introduction",
                supplementalContentSection: {
                  name: "Home.Introduction",
                  subsection: "Code",
                },
                show: false,
                expand: false,
              });
              this.handleItemClick(e, state);
            }}
          />
        </Menu.Menu>

        <Menu.Item>
          <Menu.Header>Site Code</Menu.Header>
          <Menu.Menu>
            <Menu.Item
              name="start here"
              active={activeItem === "start here"}
              onClick={(e, state) => {
                this.props.setMainContent({
                  name: "Overview",
                  mainContentSection: { name: "Overview.Introduction" },
                  showTopMenu: false,
                });
                this.props.setSupplementalContent({
                  name: "Overview.Introduction",
                  supplementalContentSection: {
                    name: "Overview.Introduction",
                    subsection: "Introduction",
                  },
                  show: false,
                  expand: false,
                });
                this.handleItemClick(e, state);
              }}
            />
            <Menu.Item
              name="frontend"
              active={activeItem === "frontend"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="backend"
              active={activeItem === "backend"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Web APIs</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name="introduction"
              active={activeItem === "introduction"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="open api"
              active={activeItem === "open api"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="tutorials"
              active={activeItem === "tutorials"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="examples"
              active={activeItem === "examples"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Native APIs</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name="introduction"
              active={activeItem === "introduction"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="tutorials"
              active={activeItem === "tutorials"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="examples"
              active={activeItem === "examples"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Miscellaneous</Menu.Header>
          <Menu.Menu>
            <Menu.Item
              name="microservices"
              active={activeItem === "microservices"}
              onClick={this.handleItemClick}
            >
              Microservices
            </Menu.Item>

            <Menu.Item
              name="data flows"
              active={activeItem === "data flows"}
              onClick={this.handleItemClick}
            >
              Data Flows
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Resources</Menu.Header>
          <Menu.Menu>
            <Menu.Item
              name="blog"
              active={activeItem === "blog"}
              onClick={this.handleItemClick}
            >
              Blog
            </Menu.Item>

            <Menu.Item
              name="articles"
              active={activeItem === "articles"}
              onClick={this.handleItemClick}
            >
              Articles And Books
            </Menu.Item>

            <Menu.Item
              name="glossary"
              active={activeItem === "glossary"}
              onClick={this.handleItemClick}
            >
              Glossary
            </Menu.Item>

            <Menu.Item
              name="references"
              active={activeItem === "references"}
              onClick={(e, state) => {
                this.props.setMainContent({
                  name: "Resources",
                  mainContentSection: { name: "Resources.References" },
                  showTopMenu: false,
                });
                this.props.setSupplementalContent({
                  name: "Resources.References",
                  supplementalContentSection: { name: "NoContent" },
                  show: false,
                  expand: false,
                });
                this.handleItemClick(e, state);
              }}
            >
              References
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    );
  }
}
