const generateArrayFromRange = (start, stop, step) => {
  return Array.from(
    { length: (stop - start) / step + 1 },
    (_, i) => start + i * step
  );
};

const getSubTreeByNickname = (node, element, nickname) => {
  if (node.name === element && node.nickname === nickname) return node;
  else if (!node.children || !node.children.length) return null;
  else {
    let res;
    for (let child of node.children) {
      res = getSubTreeByNickname(child, element, nickname);
      if (res) return res;
    }
    return null;
  }
};
export { generateArrayFromRange, getSubTreeByNickname };
