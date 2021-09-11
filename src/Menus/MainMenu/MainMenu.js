import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { generateMenuItem } from "../../utils/components";

export default class MainMenu extends Component {
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
      <Menu
        vertical
        style={{
          height: "100vh",
          zIndex: 1,
          position: "absolute",
        }}
      >
        <Menu.Menu>
          {generateMenuItem({
            activeItem,
            itemName: "Home",
            newInnerContents: { name: "Introduction" },
            newOuterContents: { name: "Home" },
            setContent: setMainContent,
            content: mainContent,
            supplementalContent,
            setSupplementalContent,
            newSupplementalContentState: { show: false },
          })}
        </Menu.Menu>

        <Menu.Item>
          <Menu.Header>Site Code</Menu.Header>
          <Menu.Menu>
            {generateMenuItem({
              activeItem,
              itemName: "Overview",
              newInnerContents: { name: "Introduction" },
              newOuterContents: { name: "Overview" },
              setContent: setMainContent,
              content: mainContent,
              supplementalContent,
              setSupplementalContent,
              newSupplementalContentState: { show: false },
            })}
            <Menu.Item name="frontend" active={activeItem === "frontend"} />
            <Menu.Item name="backend" active={activeItem === "backend"} />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Web APIs</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name="introduction"
              active={activeItem === "introduction"}
            />
            <Menu.Item name="open api" active={activeItem === "open api"} />
            <Menu.Item name="tutorials" active={activeItem === "tutorials"} />
            <Menu.Item name="examples" active={activeItem === "examples"} />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Native APIs</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name="introduction"
              active={activeItem === "introduction"}
            />
            <Menu.Item name="tutorials" active={activeItem === "tutorials"} />
            <Menu.Item name="examples" active={activeItem === "examples"} />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Miscellaneous</Menu.Header>
          <Menu.Menu>
            <Menu.Item
              name="microservices"
              active={activeItem === "microservices"}
            >
              Microservices
            </Menu.Item>

            <Menu.Item name="data flows" active={activeItem === "data flows"}>
              Data Flows
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Resources</Menu.Header>
          <Menu.Menu>
            <Menu.Item name="blog" active={activeItem === "blog"}>
              Blog
            </Menu.Item>

            <Menu.Item name="articles" active={activeItem === "articles"}>
              Articles And Books
            </Menu.Item>

            <Menu.Item name="glossary" active={activeItem === "glossary"}>
              Glossary
            </Menu.Item>

            <Menu.Item
              name="references"
              active={activeItem === "references"}
              onClick={() => {
                setMainContent({
                  name: "Resources",
                  mainContentSection: { name: "References" },
                  showTopMenu: false,
                });
                setSupplementalContent({
                  show: false,
                  expand: false,
                });
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
