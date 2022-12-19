import CaesarCipher from "./caesarCipher";

describe("encrypt", () => {
  test("works with one word", () => {
    expect(CaesarCipher.encrypt("abc", 4)).toMatch(/^efg$/);
  });

  test("works with another word", () => {
    expect(CaesarCipher.encrypt("xyz", -5)).toMatch(/^stu$/);
  });

  test("works with multiple words", () => {
    expect(CaesarCipher.encrypt("def ghi", 3)).toMatch(/^ghi jkl$/);
  });

  test("wraps back to a if result goes beyond z", () => {
    expect(CaesarCipher.encrypt("zzz", 2)).toMatch(/^bbb$/);
  });

  test("wraps to z if result goes before a", () => {
    expect(CaesarCipher.encrypt("aaa", -2)).toMatch(/^yyy$/);
  });

  test("works with a large positive offset", () => {
    expect(CaesarCipher.encrypt("word", 123)).toMatch(/^phkw$/);
  });

  test("works with a large negative offset", () => {
    expect(CaesarCipher.encrypt("word", -456)).toMatch(/^iadp$/);
  });

  test("works with capital letters", () => {
    expect(CaesarCipher.encrypt("ABC", -28)).toMatch(/^YZA$/);
  });

  test("works with another set of capital letters", () => {
    expect(CaesarCipher.encrypt("XYZ", 54)).toMatch(/^ZAB$/);
  });

  test("doesn't work if not given a string input and a number offset", () => {
    expect(() => {
      CaesarCipher.encrypt(123, []);
    }).toThrow();
  });
});

describe("decrypt", () => {
  test("works with one word", () => {
    expect(CaesarCipher.decrypt("abc", 4)).toMatch(/^wxy$/);
  });

  test("works with another word", () => {
    expect(CaesarCipher.decrypt("xyz", -5)).toMatch(/^cde$/);
  });

  test("works with multiple words", () => {
    expect(CaesarCipher.decrypt("def ghi", 3)).toMatch(/^abc def$/);
  });

  test("wraps back to a if result goes beyond z", () => {
    expect(CaesarCipher.decrypt("zzz", -2)).toMatch(/^bbb$/);
  });

  test("wraps to z if result goes before a", () => {
    expect(CaesarCipher.decrypt("aaa", 2)).toMatch(/^yyy$/);
  });

  test("works with a large positive offset", () => {
    expect(CaesarCipher.decrypt("word", 456)).toMatch(/^iadp$/);
  });

  test("works with a large negative offset", () => {
    expect(CaesarCipher.decrypt("word", -123)).toMatch(/^phkw$/);
  });

  test("works with capital letters", () => {
    expect(CaesarCipher.decrypt("ABC", 28)).toMatch(/^YZA$/);
  });

  test("works with another set of capital letters", () => {
    expect(CaesarCipher.decrypt("XYZ", -54)).toMatch(/^ZAB$/);
  });

  test("doesn't work if not given a string input and a number offset", () => {
    expect(() => {
      CaesarCipher.decrypt(-987, false);
    }).toThrow();
  });
});
