class Formatter {
  //add static methods here
  static capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(string) {
    let words = ['of', 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let splitString = string.split(' ')
    let first = splitString.slice(0, 1)

    let remainder = splitString.slice(1).map((word) => {
      for (let i = 0; i < words.length; i++) {
        if (word === words[i]) {
          return word
        }
      }
      return this.capitalize(word)
    }).join(' ')
    return this.capitalize(first.join(' ')) + " " + remainder

  }
}