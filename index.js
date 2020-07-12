class Formatter {
  
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }
  static titleize(string) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let result = [];
    let arrayOfWords = string.split(" ")
    // 'n' represents each elemnet/word in the array of words
    for (let n = 0; n < arrayOfWords.length; n++) {
      // if '(n == 0)' below is refering to the firs word in the array. The first word should always be capitalized in this case.
      if (n == 0) {
        result.push(this.capitalize(arrayOfWords[n]))
      } else {
        if (exceptions.includes(arrayOfWords[n])) {
          result.push(arrayOfWords[n])
        } else {
          result.push(this.capitalize(arrayOfWords[n]))
        }
      }
    }
    return result.join(" ");
  }

}