class Formatter {
    //add static methods here
    static capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    static sanitize(string) {
        return string.replace(/[^A-Za-z0-9- ']+/g, '');
    }
    static titleize(str) {
        let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
        let arr = []
        str.split(' ').forEach(e => {

            if (!exceptions.includes(e)) {
                arr.push(this.capitalize(e))
            } else {
                arr.push(e)
            }


        })
        arr[0] = this.capitalize(arr[0])
        return arr.join(' ')
    }
}