export default class Calculator {
  static add(x, y) {
    if (isNaN(x) || isNaN(y)) {
      throw new Error("Inputs must be numbers!");
    }
    return x + y;
  }

  static subtract(x, y) {
    if (isNaN(x) || isNaN(y)) {
      throw new Error("Inputs must be numbers!");
    }
    return x - y;
  }
}
