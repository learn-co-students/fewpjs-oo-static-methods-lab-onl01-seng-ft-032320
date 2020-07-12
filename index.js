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
    // console.log(arrayOfWords)
    for (let n = 0; n < arrayOfWords.length; n++) {
      // console.log(n)
      // n == 0 would be the first letter of the first word in the sentence so we capitalize it always
      if (n == 0) {
        result.push(this.capitalize(arrayOfWords[n]))
      } else {
        // if arrayOfWords includes one of the exception words, push it into array only
        if (exceptions.includes(arrayOfWords[n])) {
          result.push(arrayOfWords[n])
        } else {
          // capitalize all remaining words and push into result arr
          result.push(this.capitalize(arrayOfWords[n]))
        }
      }
    }
    return result.join(" ");
  }
}