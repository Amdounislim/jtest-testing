/**
 * Have a look at the test and implement the needed function, so the test will succeed
 */

/**
 * 
 * @param {Array} array 
 * @returns {Number}
 */
 export const sum = (array) => array.reduce((acc, cur) => acc + cur, 0);

 /**
  * 
  * @param {Array} array 
  * @returns {Array}
  */
 export const concat = (array1, array2, array3) => [...array1, ...array2, ...array3];
 
 
 /**
  * 
  * @param {Array} array 
  * @returns {Number}
  */
 export const count = (array, target) => array.filter((item) => item === target).length;
 
 
 /**
  * 
  * @param {Array} array 
  * @returns {Array}
  */
 export const duplicates = (array) => {
     const result = [];
     array.forEach((item, i) => {
         if (array.indexOf(item) !== i && result.indexOf(item) === -1) {
             result.push(item);
         }
     });
     return result;
 };
 
 /**
  * 
  * @param {Array} array 
  * @returns {Array}
  */
 export const square = (array) => array.map((item) => Math.pow(item, 2));
 