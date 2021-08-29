/**
 * Check if the given string is an anagram of a palindrom
 *
 * Example
 * s = 'aabbccdd'
 * One way this can be arranged into a palindrome is abcddcba. Return true.
 *
 * Constraints
 * contains only lowercase letters in the range ascii[a..z]
 */

 export const isPalindromePossible = (str) => {
    const letterOccurence = {};
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (letterOccurence[char]) {
        letterOccurence[char]++;
      } else {
        letterOccurence[char] = 1;
      }
    }
  
    const occurences = Object.values(letterOccurence);
  
    const hasMoreThanOddOccurence =
      occurences.filter((occ) => occ % 2 === 1).length > 1;
  
    return !hasMoreThanOddOccurence;
  };