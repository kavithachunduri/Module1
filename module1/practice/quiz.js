/*
 * 1. sum takes two arguments
 * and returns their sum
 */
const sum = (a, b) => {
     return a+b;
    
} 
console.log('---------Question 1------------');
console.log(sum(2,3));


/*
 * 2.  genNums takes a single number as an argument
 * it should return an array of the numbers from 1..n
 * Ex genNums(2) => [1, 2]
 */
let array=[];
const genNums = (n) => {
   for(i=1;i<=n;i++){
       array.push(i);
       
   }return array;
}
genNums(5);
console.log('---------Question 2------------');
console.log(array);

/*
 * 3. greeter takes a string as an argument (a person's name)
 * it should return a string greeting the person
 * in the form of: Hello, <name>
 */
const greeter = (name) => {
     return "Hello " + name;
}
console.log('---------Question 3------------');
console.log(greeter('kavitha'));

/*
 *  4. reverseString takes a string
 * and should return the reverse of the string
 * e.g., reverseString('cat') => 'tac'
 */
const reverseString = (str) => {
    let split= str.split('').reverse().join('');
    return split;
 }
 console.log('---------Question 4------------');
 console.log(reverseString('hello'));
/*
 *  5. flipBool takes an array of Boolean values
 * it should call map on the array and flip
 * each Boolean value to its opposite,
 * e.g., flipBool([true]) => [false]
 *       flipBool([false, true]) => [true, false]
 *       etc
 * then return the new array
 * Be sure to use map()!
 */

// const flipBool = bools => bools.map(bool=> !bool)
  
const flipBool = (bools) => {
  
    return bools.map(function(bool) {return !bool})
    }
    console.log('---------Question 5------------');
    console.log(flipBool([false, true]));
    console.log(flipBool([true]));