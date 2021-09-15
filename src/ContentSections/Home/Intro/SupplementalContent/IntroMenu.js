import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default function IntroMenu({
  supplementalContent,
  supplementalContent: {
    supplementalContentSection: { subsection },
  },
  setSupplementalContent,
}) {
  const activeItem = subsection;

  return (
    <Menu fluid tabular widths={2}>
      <Menu.Item
        name="Code"
        active={activeItem === "Code"}
        onClick={() => {
          setSupplementalContent({
            ...supplementalContent,
            show: true,
            name: "Home",
            supplementalContentSection: {
              name: "Introduction",
              subsection: "Code",
            },
          });
        }}
      />
      <Menu.Item
        name="Credits"
        active={activeItem === "Credits"}
        onClick={() => {
          setSupplementalContent({
            ...supplementalContent,
            show: true,
            name: "Home",
            supplementalContentSection: {
              name: "Introduction",
              subsection: "Credits",
            },
          });
        }}
      />
    </Menu>
  );
}
