import reverseString from "./reverseString";

test("works with one word", () => {
  expect(reverseString("reverse")).toMatch(/^esrever$/);
});

test("works with another word", () => {
  expect(reverseString("string")).toMatch(/^gnirts$/);
});

test("works with multiple words", () => {
  expect(reverseString("these are multiple words")).toMatch(
    /^sdrow elpitlum era eseht$/
  );
});

test("doesn't work if input is not a string", () => {
  expect(() => {
    reverseString(123);
  }).toThrow(TypeError);
});
