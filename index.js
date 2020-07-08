class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(title) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let result = [];
    let sentence = title.split(" ")
    for ( let n = 0; n < sentence.length; n++) {
      if ( n == 0 ) {
        result.push( this.capitalize(sentence[n]))
      } else {
        if ( exceptions.includes(sentence[n])) {
          result.push(sentence[n])
        } else {
          result.push(this.capitalize(sentence[n]))
        }
      }

    }
    return result.join( " " );
  }
}