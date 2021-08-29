/**
 * Get the last n data elements from the nested object
 *
 * See the test if you have questions
 */


/**
 * non recursive solution
 */
 export const getLastNumbers = (linkedList, lastItems) => {
    let list = linkedList;
    const arr = [];

    while (list.next) {
        arr.push(list.data);
        list = list.next;
    }
    arr.push(list.data);

    return lastItems >= arr.length ? arr : arr.slice(arr.length - lastItems, arr.length);

}

/**
 * recursive solution
 */

//  export const getLastNumbers = (linkedList, n, result = []) => {
//     if (n === 0) {
//       return result;
//     }
  
//     if (!linkedList.next) {
//       return [...result, linkedList.data].slice(-n);
//     }
//     result.push(linkedList.data);
  
//     return getLastNumbers(linkedList.next, n, result);
//   };