class Formatter {
  //add static methods here
  static capitalize(strng){
    return strng.charAt(0).toUpperCase() + strng.slice(1);
  }
  static sanitize(strng){
    return strng.replace(/[^A-Za-z0-9-' ]+/g, '');
  }
  static titleize(strng){
    return titleCase(strng)
  }
}

function titleCase(str) {
  let newArray = []
  let lower = str.toLowerCase();
  let array = lower.split(' ');
    newArray.push(array.map(x => {
       if (x == array[0]) {
        return x.charAt(0).toUpperCase() + x.slice(1);
      }
      if (x == "the") {
        return x
      }
      if (x == "a") {
        return x
      }
      if (x == "an") {
        return x
      }
      if (x == "but") {
        return x
      }
      if (x == "of") {
        return x
      }
      if (x == "and") {
        return x
      }
      if (x == "for") {
        return x
      }
      if (x == "at") {
        return x
      }
      if (x == "by") {
        return x
      }
      if (x == "from") {
        return x
      }
      else {
        return x.charAt(0).toUpperCase() + x.slice(1);
      }
     
    }).join(' ')
  )
 
  return newArray.join(' ')
}