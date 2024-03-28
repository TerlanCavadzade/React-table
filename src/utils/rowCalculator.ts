const rowCalculator = (...arr: Array<number[]>) => {
  const lengths = arr.map((x) => x.length);
  const max = Math.max(...lengths);
  return max.toString();
};

export default rowCalculator;
