import Calculator from "./calculator";

describe("add", () => {
  test("works with integers", () => {
    expect(Calculator.add(33, 19)).toStrictEqual(52);
  });

  test("works with another set of integers", () => {
    expect(Calculator.add(-5, 19)).toStrictEqual(14);
  });

  test("works with floats", () => {
    expect(Calculator.add(999.7, -23.4)).toBeCloseTo(976.3);
  });

  test("doesn't work if inputs are not both numbers", () => {
    expect(() => {
      Calculator.add("a", [1]);
    }).toThrow();
  });
});

describe("subtract", () => {
  test("works with integers", () => {
    expect(Calculator.subtract(678, 55)).toStrictEqual(623);
  });

  test("works with another set of integers", () => {
    expect(Calculator.subtract(-43, -100)).toStrictEqual(57);
  });

  test("works with floats", () => {
    expect(Calculator.subtract(1.1, 77.32)).toBeCloseTo(-76.22);
  });

  test("doesn't work if inputs are not both numbers", () => {
    expect(() => {
      Calculator.subtract("b", [2]);
    }).toThrow();
  });
});

describe("multiply", () => {
  test("works with integers", () => {
    expect(Calculator.multiply(22, 5)).toStrictEqual(110);
  });

  test("works with another set of integers", () => {
    expect(Calculator.multiply(-17, 68)).toStrictEqual(-1156);
  });

  test("works with floats", () => {
    expect(Calculator.multiply(3.14, 180.9)).toBeCloseTo(568.026);
  });

  test("doesn't work if inputs are not both numbers", () => {
    expect(() => {
      Calculator.multiply("c", { three: 3 });
    }).toThrow();
  });
});
