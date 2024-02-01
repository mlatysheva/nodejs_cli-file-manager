/**
 * @description: function is used to capitalise the name of the user in console messages
 * @param {*} string 
 * @returns string with the first letter capitalised
 */
export const capitalizeFirstLetter = (string="Beautiful Stranger") => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}