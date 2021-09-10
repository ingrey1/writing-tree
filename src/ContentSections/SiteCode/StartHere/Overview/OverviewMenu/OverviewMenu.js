import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

const IntroMenuItem = (activeItem, setSupplementalContent) => (
  <Menu.Item
    name="Introduction"
    active={activeItem === "Introduction"}
    onClick={(e, state) => {
      setSupplementalContent({
        show: false,
        expand: false,
        name: "Overview",
        mainContentSection: {
          name: "Introduction",
        },
      });
    }}
  />
);

const HtmlPrimerMenuItem = (activeItem, setSupplementalContent) => (
  <Menu.Item
    name="HTML Primer"
    active={activeItem === "HTML Primer"}
    onClick={(e, state) => {
      setSupplementalContent({
        show: false,
        expand: false,
        name: "Overview",
        mainContentSection: {
          name: "HtmlPrimer",
        },
      });
    }}
  />
);

const ReactPrimerMenuItem = (activeItem, setSupplementalContent) => (
  <Menu.Item
    name="React Primer"
    active={activeItem === "React Primer"}
    onClick={(e, state) => {
      setSupplementalContent({
        show: false,
        expand: false,
        name: "Overview",
        mainContentSection: {
          name: "ReactPrimer",
        },
      });
    }}
  />
);

const ResourcesMenuItem = (activeItem, setSupplementalContent) => (
  <Menu.Item
    name="Resources"
    active={activeItem === "Resources"}
    onClick={(e, state) => {
      setSupplementalContent({
        show: false,
        expand: false,
        name: "Overview",
        mainContentSection: {
          name: "Resources",
        },
      });
    }}
  />
);

const mapSectionToMenuName = (subsection) => {
  const mappings = {
    HtmlPrimer: "HTML Primer",
    ReactPrimer: "React Primer",
  };
  return mappings[subsection] || subsection;
};

export default class OverviewMenu extends Component {
  render() {
    const {
      mainContent: {
        mainContentSection: { name },
      },
      setMainContent,
    } = this.props;

    const activeItem = mapSectionToMenuName(name);

    return (
      <Menu fluid tabular widths={4}>
        {IntroMenuItem(activeItem, setMainContent)}
        {HtmlPrimerMenuItem(activeItem, setMainContent)}
        {ReactPrimerMenuItem(activeItem, setMainContent)}
        {ResourcesMenuItem(activeItem, setMainContent)}
      </Menu>
    );
  }
}
