import analyzeArray from "./analyzeArray";

test("works with a sample array", () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);

  expect(result.average).toStrictEqual(4);
  expect(result.min).toStrictEqual(1);
  expect(result.max).toStrictEqual(8);
  expect(result.length).toStrictEqual(6);
});

test("works with another sample array", () => {
  const result = analyzeArray([-1, 8.2, 300, -4, 2.5, 677, 0]);

  expect(result.average).toBeCloseTo(140.386);
  expect(result.min).toStrictEqual(-4);
  expect(result.max).toStrictEqual(677);
  expect(result.length).toStrictEqual(7);
});

test("doesn't work if input is not an array of numbers", () => {
  expect(() => {
    analyzeArray(1, 2, 3, "a", "b", "c");
  }).toThrow(TypeError);
});
