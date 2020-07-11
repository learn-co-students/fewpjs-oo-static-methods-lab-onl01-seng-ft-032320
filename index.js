class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, "");
  }

  static titleize(string) {
    let exceptions = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
    ];
    let result = [];
    let sentence = string.split(" ");
    for (let n = 0; n < sentence.length; n++) {
      if (n == 0) {
        result.push(this.capitalize(sentence[n]));
      } else {
        if (exceptions.includes(sentence[n])) {
          result.push(sentence[n]);
        } else {
          result.push(this.capitalize(sentence[n]));
        }
      }
    }
    return result.join(" ");
  }
}
