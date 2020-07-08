class Formatter {
  static capitalize(phrase) {
    return phrase[0].toUpperCase() + phrase.slice(1)
  }

  static sanitize(phrase) {
    return phrase.replace(/[^A-Za-z \-\' ]+/g, '')
  }

  static titleize(phrase) {
    let phraseArray = phrase.split(" ")
    const exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    for (let i = 0; i < phraseArray.length; i ++) {
      if (i === 0 || !(exceptions.includes(phraseArray[i]))) {
        phraseArray[i] = this.capitalize(phraseArray[i])
      } 
    }
    return phraseArray.join(" ")
  }
}