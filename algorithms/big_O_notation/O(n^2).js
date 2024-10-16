function square(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j); //i - column, j - row
    }
  }
}
square(4);

/**   MATRIX(4x4)
 *    СO LU MN S
 *  R 00 10 20 30 
    O 01 11 21 31  area = 4*4 = 4^2 = 16 - the number of times we had to perform the instruction
    W 02 12 22 32  
    S 03 13 23 33
 *     

    O(n^2), where n^2 = the number of times the instruction will be performed
 */
