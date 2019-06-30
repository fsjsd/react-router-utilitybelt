const componentsJoin = (components, separator) => components.reduce(
  (acc, curr) => (acc.length ? [...acc, separator, curr] : [curr]),
  [],
).map((el, index) => ({ ...el, key: index }));

export default componentsJoin;
