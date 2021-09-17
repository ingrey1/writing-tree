import { Menu } from "semantic-ui-react";

export default function NavigationMenu({
  supplementalContent,
  setSupplementalContent,
}) {
  const activeItem = "Code";
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
              name: "Navigation",
              subsection: "Code",
            },
          });
        }}
      />
    </Menu>
  );
}
