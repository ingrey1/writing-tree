import React, { Component } from "react";
import { Menu, Dropdown, Sticky } from "semantic-ui-react";

export default class MainMenu extends Component {
  state = {};
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu
        vertical={!this.props.horizontal}
        style={{
          height: this.props.horizontal ? "5vh" : "100vh",
          "z-index": 1,
          position: "absolute",
        }}
      >
        <Menu.Menu>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={(e, state) => {
              this.props.setMainContent({
                name: "Home",
                mainContentSection: { name: "Introduction" },
                showTopMenu: true,
              });
              this.handleItemClick(e, state);
            }}
          />
        </Menu.Menu>
        {this.props.horizontal ? (
          <Dropdown item text="The Code For This Site">
            <Dropdown.Menu>
              <Dropdown.Item>Start Here</Dropdown.Item>
              <Dropdown.Item>Frontend</Dropdown.Item>
              <Dropdown.Item>Backend</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <Menu.Item>
            <Menu.Header>The Code For This Site</Menu.Header>
            <Menu.Menu>
              <Menu.Item
                name="start here"
                active={activeItem === "start here"}
                onClick={this.handleItemClick}
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
        )}

        {this.props.horizontal ? (
          <Dropdown item text="Web API Documentation">
            <Dropdown.Menu>
              <Dropdown.Item>Introduction</Dropdown.Item>
              <Dropdown.Item>Open API</Dropdown.Item>
              <Dropdown.Item>Tutorials</Dropdown.Item>
              <Dropdown.Item>Examples</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <Menu.Item>
            <Menu.Header>Web API Documentation</Menu.Header>

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
        )}

        {this.props.horizontal ? (
          <Dropdown item text="Native API Documentation">
            <Dropdown.Menu>
              <Dropdown.Item>Introduction</Dropdown.Item>
              <Dropdown.Item>Tutorials</Dropdown.Item>
              <Dropdown.Item>Examples</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <Menu.Item>
            <Menu.Header>Native API Documentation</Menu.Header>

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
        )}

        {this.props.horizontal ? (
          <Dropdown item text="Additional Resources">
            <Dropdown.Menu>
              <Dropdown.Item>Blog</Dropdown.Item>
              <Dropdown.Item>Articles</Dropdown.Item>
              <Dropdown.Item>Glossary</Dropdown.Item>
              <Dropdown.Item>References</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <Menu.Item>
            <Menu.Header>Additional Resources</Menu.Header>
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
                onClick={this.handleItemClick}
              >
                References
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>
        )}
      </Menu>
    );
  }
}
