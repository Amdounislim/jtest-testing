/**
 * This test, tests some knowledge of Regular Expressions.
 *
 * See the test for what functions you need to implement.
 */

 export const containsNumber = (str) => /\d/.test(str);

 export const containsRepeatingLetter = (str) => /([a-zA-Z])\1+/.test(str);
 
 export const endsWithVowel = (str) => /.*[AEIOUaeiou]$/.test(str);
 
 export const captureThreeNumbers = (str) => {
     const rgx = /\d{3}/;
     const series = str.match(rgx);
     return series ? series[0] : false;
 }
 
 export const matchesPattern=(str)=> {
     const rgx = /^\d{3}-\d{3}-\d{4}$/;
     return rgx.test(str);
   }
 
   export const isUSD=(str)=> {
     const rgx = /^\$(\d{1,3}(,\d{3})*|(\d+))(\.\d{2})?$/;
   
     return rgx.test(str);
   }  
 