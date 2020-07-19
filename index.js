class Formatter {
  //add static methods here

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.substring(1, string.length);
  }

  static sanitize(string) {
    return string.replace(/[^0-9a-zA-Z '-]/g, '');
  }

  static titleize(string) {
    let words = string.split(" ");
    let banned = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    for (let i = 0; i < words.length; i ++) {
      if (i == 0 || !banned.includes(words[i])) {
        words[i] = (words[i].charAt(0).toUpperCase() + words[i].substring(1, words[i].length));
      }
    }
    return words.join(" ");
  }
  

}