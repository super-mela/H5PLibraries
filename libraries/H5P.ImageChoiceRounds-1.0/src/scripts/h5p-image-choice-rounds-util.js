/** Class for utility functions */
export default class Util {
  /**
   * Extend an array just like JQuery's extend.
   * @param {object} arguments Objects to be merged.
   * @return {object} Merged objects.
   */
  static extend() {
    for (let i = 1; i < arguments.length; i++) {
      for (let key in arguments[i]) {
        if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
          if (
            typeof arguments[0][key] === 'object' &&
            typeof arguments[i][key] === 'object'
          ) {
            this.extend(arguments[0][key], arguments[i][key]);
          }
          else {
            arguments[0][key] = arguments[i][key];
          }
        }
      }
    }
    return arguments[0];
  }

  /**
   * Retrieve true string from HTML encoded string.
   * @param {string} input Input string.
   * @return {string} Output string.
   */
  static htmlDecode(input) {
    var dparser = new DOMParser().parseFromString(input, 'text/html');
    return dparser.documentElement.textContent;
  }

  /**
   * Retrieve string without HTML tags.
   * @param {string} input Input string.
   * @return {string} Output string.
   */
  static stripHTML(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  }

  /**
   * Shuffle array.
   * @param {object[]} array Array.
   * @return {object[]} Shuffled array.
   */
  static shuffleArray(array) {
    let j, x, i;
    for (i = array.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = array[i];
      array[i] = array[j];
      array[j] = x;
    }

    return array;
  }
}
