import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { generateMenuItem } from "../../../../../utils/components";

const IntroMenuItem = (activeItem, mainContent, setMainContent) => {
  return generateMenuItem({
    activeItem,
    itemName: "Introduction",
    newStateName: "Introduction",
    mainContent,
    setMainContent,
  });
};

const HtmlPrimerMenuItem = (activeItem, mainContent, setMainContent) => {
  return generateMenuItem({
    activeItem,
    itemName: "HTML Primer",
    newStateName: "HtmlPrimer",
    mainContent,
    setMainContent,
  });
};

const ReactPrimerMenuItem = (activeItem, mainContent, setMainContent) => {
  return generateMenuItem({
    activeItem,
    itemName: "React Primer",
    newStateName: "ReactPrimer",
    mainContent,
    setMainContent,
  });
};

const ResourcesMenuItem = (activeItem, mainContent, setMainContent) => {
  return generateMenuItem({
    activeItem,
    itemName: "Resources",
    newStateName: "Resources",
    mainContent,
    setMainContent,
  });
};

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
      mainContent,
      mainContent: {
        mainContentSection: { name },
      },
      setMainContent,
    } = this.props;

    const activeItem = mapSectionToMenuName(name);

    return (
      <Menu fluid tabular widths={4}>
        {IntroMenuItem(activeItem, mainContent, setMainContent)}
        {HtmlPrimerMenuItem(activeItem, mainContent, setMainContent)}
        {ReactPrimerMenuItem(activeItem, mainContent, setMainContent)}
        {ResourcesMenuItem(activeItem, mainContent, setMainContent)}
      </Menu>
    );
  }
}
