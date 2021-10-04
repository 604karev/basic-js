import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit( n ) {
  let array = [...`${n}`];
  let num = 0;
  for (let i = 0; i < array.length; i++) {
    array.splice(i, 1);
    if (+array.join("") > num) {
      num = +array.join("");
    }
    array = [...`${n}`];
  }
  return num;
}
