export default analyzeArray = (array) => {
  return {
    average:
      array.reduce((sum, number) => {
        return sum + number;
      }, 0) / array.length,
    min: array.reduce((lowest, number) => {
      return number < lowest ? number : lowest;
    }),
    max: array.reduce((lowest, number) => {
      return number > lowest ? number : lowest;
    }),
    length: array.length,
  };
};
