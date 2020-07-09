class Formatter {
  //add static methods here

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string) {
    let stringRay = string.split(' ')
    let exemption = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']
    let newRay = []

    for (let i = 0; i < stringRay.length; i++) {
      if (i == 0) {
        newRay.push(this.capitalize(stringRay[i]))
      } else {
        if (exemption.includes(stringRay[i])) {
          newRay.push(stringRay[i])
        } else {
          newRay.push(this.capitalize(stringRay[i]))
        }

      }
    }
    let final = newRay.join(' ')
    return final
  }
}