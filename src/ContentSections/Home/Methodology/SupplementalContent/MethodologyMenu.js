import { Menu } from "semantic-ui-react";
import { generateMenuItems } from "../../../../utils/components";

const itemNames = ["Code", "FunFacts"];
const newSupplementalInnerContents = itemNames.map((name) => {
  return { name: "Methodology", subsection: name };
});

export default function MethodologyMenu({
  supplementalContent,
  supplementalContent: {
    supplementalContentSection: { subsection },
  },
  setSupplementalContent,
}) {
  const activeItem = subsection;

  return (
    <Menu fluid tabular widths={2}>
      {generateMenuItems({
        activeItem,
        itemNames,
        supplementalContent,
        setSupplementalContent,
        newSupplementalInnerContents: newSupplementalInnerContents,
        newSupplementalOuterContents: {
          show: true,
          name: "Home",
        },
      })}
    </Menu>
  );
}
