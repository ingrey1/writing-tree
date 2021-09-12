import { Menu } from "semantic-ui-react";

export default function IntroMenu({
  setSupplementalContent,
  supplementalContent,
}) {
  const activeItem = "Code";

  return (
    <Menu fluid tabular widths={2}>
      <Menu.Item
        name="Code"
        active={activeItem === "Code"}
        onClick={() => {
          setSupplementalContent({
            supplementalContent,
            show: true,
            name: "Overview",
            supplementalContentSection: {
              name: "Introduction",
              subsection: "Code",
            },
          });
        }}
      />
    </Menu>
  );
}
