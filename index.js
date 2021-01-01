class Formatter {
  //add static stamethods here
  static capitalize(string){
    return string.split(" ").map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')

  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '')
  }

  static titleize(string){
    let array = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']

    let result = [];
    let arrayOfWords = string.split( " " )
    for ( let n = 0; n < arrayOfWords.length; n++ ) {
      if ( n == 0 ) {
        result.push( this.capitalize( arrayOfWords[ n ] ) )
      } else {
        if ( array.includes( arrayOfWords[ n ] ) ) {
          result.push( arrayOfWords[ n ] )
        } else {
          result.push( this.capitalize( arrayOfWords[ n ] ) )
        }
      }

    }
    return result.join( " " );
  }
    

  }
