class Formatter {
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
  };

  static sanitize(str) {
    return str.replace(/[0-9!#@$%^&*(){}]/g, '');
  };

  static titleize(str) {
    let strArr = str.split(" ");
    return strArr.map((w) => {
      if(w == strArr[0] && w == "a") {
        return w[0].toUpperCase();
      }
      if(!['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'].includes(w)) {
        return w[0].toUpperCase() + w.slice(1);
      } else {
        return w;
      }
    }).join(" ");
  };
}