import FolderTree from "react-folder-tree";
import "react-folder-tree/dist/style.css";
import { getSubTreeByNickname } from "../../../../../utils/general";

const FileIcon = (...args) => null;
const FolderIcon = (...args) => null;

const htmlTreeData = {
  name: "html",
  children: [
    { name: "head", children: [{ name: "title", nickname: 1 }], nickname: 1 },
    {
      name: "body",
      children: [
        { name: "h1", nickname: 1 },
        { name: "h2", nickname: 1 },
        {
          name: "section",
          nickname: 1,
          children: [
            { name: "p", nickname: 1 },
            { name: "p", nickname: 2 },
            { name: "img", nickname: 1 },
            {
              name: "section",
              nickname: 2,
              children: [
                {
                  name: "section",
                  nickname: 3,
                  children: [
                    {
                      name: "table",
                      nickname: 1,
                      children: [
                        {
                          name: "tbody",
                          nickname: 1,
                          children: [
                            {
                              name: "tr",
                              nickname: 1,
                              children: [
                                { name: "th", nickname: 1 },
                                { name: "th", nickname: 2 },
                                { name: "th", nickname: 3 },
                                { name: "th", nickname: 4 },
                              ],
                            },
                            {
                              name: "tr",
                              nickname: 2,
                              children: [
                                { name: "td", nickname: 1 },
                                { name: "td", nickname: 2 },
                                {
                                  name: "td",
                                  nickname: 3,
                                  children: [
                                    {
                                      name: "ul",
                                      nickname: 1,
                                      children: [
                                        { name: "li", nickname: 1 },
                                        { name: "li", nickname: 2 },
                                        { name: "li", nickname: 3 },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  name: "td",
                                  nickname: 4,
                                  children: [
                                    {
                                      name: "ol",
                                      nickname: 2,
                                      children: [
                                        { name: "li", nickname: 4 },
                                        { name: "li", nickname: 5 },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default function AnimalKingdomTree({ isOpen, subTree }) {
  const data = subTree
    ? getSubTreeByNickname(htmlTreeData, subTree.name, subTree.nickname)
    : htmlTreeData;

  return (
    <FolderTree
      data={data}
      iconComponents={{ FileIcon, FolderIcon }}
      showCheckbox={false}
      readOnly
      initOpenStatus={isOpen || "closed"}
    />
  );
}
