export default class CaesarCipher {
  static encrypt(string, offset) {
    return string
      .split("")
      .map((letter) => {
        if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) {
          const tempResult = letter.charCodeAt(0) + offset;
          let result;
          if (tempResult > 122) {
            result = ((tempResult - 97) % 26) + 97;
          } else if (tempResult < 97) {
            result = 122 - ((122 - tempResult) % 26);
          } else {
            result = tempResult;
          }
          return String.fromCharCode(result);
        } else if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) {
          const tempResult = letter.charCodeAt(0) + offset;
          let result;
          if (tempResult > 90) {
            result = ((tempResult - 65) % 26) + 65;
          } else if (tempResult < 65) {
            result = 90 - ((90 - tempResult) % 26);
          } else {
            result = tempResult;
          }
          return String.fromCharCode(result);
        } else {
          return letter;
        }
      })
      .join("");
  }
}
