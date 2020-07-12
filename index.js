class Formatter {
  static capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
      return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(string) {
      let returnString = "",
          words = string.split( ' ' ),
          word = "";

      returnString = this.capitalize(words[0]);
      for (let i = 1; i < words.length; i++) {
          switch (words[i]) {
            case "the":
              word = words[i];
              break;
            case "a":
              word = words[i];
              break;
            case "an":
              word = words[i];
              break;
            case "but":
              word = words[i];
              break;
            case "of":
              word = words[i];
              break;
            case "and":
              word = words[i];
              break;
            case "for":
              word = words[i];
              break;
            case "at":
              word = words[i];
              break;
            case "by":
              word = words[i];
              break;
            case "from":
              word = words[i];
              break;
            default:
              word = this.capitalize(words[i]);
          }
          returnString = returnString.concat(" ", word);
      }
      return returnString;
  }
}
