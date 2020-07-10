class Formatter {
  
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-' ]+/g, '');
  }
  //keep dashes, single quotes, spaces

  static titleize(str) {
    let capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1);
    let lowerCaseWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let strArr = capitalizedStr.split(' ');
    return strArr.map(str => {
      if (lowerCaseWords.includes(str)) {
        return str
      } else {
        return str.charAt(0).toUpperCase() + str.slice(1)
      }
    }).join(' ');
  }
}