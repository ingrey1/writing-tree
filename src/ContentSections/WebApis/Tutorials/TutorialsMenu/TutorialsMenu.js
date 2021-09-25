import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { generateMenuItems } from "../../../../utils/components";

const itemNames = ["Visualization Tool"];
const newInnerContents = ["VisualizationTool"].map((name) => {
  if (name === "VisualizationTool") {
    return { name, subsection: name };
  }

  return { name };
});

const newOuterContents = { name: "WebApisTutorials" };

const newSupplementalOuterContents = { show: false, name: "WebApisTutorials" };

const mapSectionToMenuName = (subsection) => {
  const mappings = {
    VisualizationTool: "Visualization Tool",
  };
  return mappings[subsection] || subsection;
};

export default class ExamplesMenu extends Component {
  render() {
    const {
      mainContent,
      mainContent: {
        mainContentSection: { name },
      },
      setMainContent,
      supplementalContent,
      setSupplementalContent,
    } = this.props;

    const activeItem = mapSectionToMenuName(name);

    return (
      <Menu fluid tabular widths={1}>
        {generateMenuItems({
          activeItem,
          itemNames,
          newInnerContents,
          newOuterContents,
          mainContent,
          setMainContent,
          supplementalContent,
          setSupplementalContent,
          newSupplementalInnerContents: newInnerContents,
          newSupplementalOuterContents,
        })}
      </Menu>
    );
  }
}
