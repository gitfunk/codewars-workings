// 7 kyu
// ## String ends with?
// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

// # DESCRIPTION:
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
  // TODO: complete
}

// # Working

// MDN has String.endsWith(searchString, length)

function solution(str, ending){
  return str.endsWith(ending)
}
// This seems too easy for a 7 kyu. 


// Practice rewriting as an arrow function
const solution = (str, ending) => str.endsWith(ending);


