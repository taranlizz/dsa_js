// _______BIG O(N) FUNCTION____
function linearFunc(arr) {
  //O(n) as the size of n increases the number of iterations that the for loop must traverse increases as well
  for (let i = 0; i < arr.length; i++) {
    console.log(1000 * 100000); // takes constant time //O(1)
    let something = (200000 * 2000000) / 2; //takes constant time // O(1)
    console.log(something); //takes constant time // O()
  }
}

//linearFunc is O(n) because of ORDER OF GROWTH. Constants are ignored unless the entirety of the function is constant O(1).

const arr = [1, 2, 3, 4, 5, 6, 7]; //can includes millions of items
linearFunc(arr); //linearFunc scales linear or O(n)

//__________________________________

//________CONSTANTS O(1)____________
//A CONSTANT is any step that doesn't scale with the input to the function.

//the function does nothing with the array
//the only operation is constant
function constants(arr) {
  const result = 100 * 1000; // = 100000 // takes the same amount of time or constant time to return the same result
  return result;
}

/*IMPORTANT: when evaluating an algorithm's efficiency,
  we must to take into consideration the efficiency of each step with the algorithm.
  We then find the step that has the worst performance and prioritize it over all of the better performing steps*/
