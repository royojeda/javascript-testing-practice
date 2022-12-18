import capitalize from "./capitalize";

test("works with one word", () => {
  expect(capitalize("word")).toMatch(/^Word$/);
});

test("works with another word", () => {
  expect(capitalize("Another")).toMatch(/^Another$/);
});

test("works with multiple words", () => {
  expect(capitalize("multiple words")).toMatch(/^Multiple words$/);
});

test("doesn't work if input is not a string", () => {
  expect(() => {
    capitalize(123);
  }).toThrow(TypeError);
});
