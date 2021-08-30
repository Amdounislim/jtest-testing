/**
 * Export a function named 'count'.
 * It should call the given callback every 10th of a second with a increment from given start to end integer
 * Return a function to prematurely cancel the counting process.
 *
 * @param {number} start - Given to callback first
 * @param {number} end - Stop when count reached this value
 * @param {function(number): void} callback - Called after each 100ms with an increment
 * @returns {function(): void} - Cancel countdown function
 */


const _cancelIntervall = (intervall) => clearInterval(intervall);

export const count = (start, end, callback) => {
    let counter = start;
    let intervall = null;

    intervall = setInterval(() => {
        if (counter === end) {
            _cancelIntervall(intervall);
        }
        callback(counter);
        counter++;
    }, 100);

    return function () { 
       return _cancelIntervall(intervall);
     };
};

