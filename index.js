class Formatter {
  static capitalize(string){
    string.charAt(0).toUpperCase()
    return string = string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(sentence){
    let exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    return sentence.split(" ").map(word => {
      if (sentence.indexOf(word) == 0){
        return this.capitalize(word) 
      } else {
        if (exceptions.includes(word)){
          return word
        } else {
          return this.capitalize(word)
        }
      }
    }).join(" ")
  }
}
