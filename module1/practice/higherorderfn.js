//Exercise #3
// using reduce, add up all numbers in an array
// ex: [10,12,20,50] => 92
let numbers=[10,12,20,50];
let sum =numbers.reduce((accumulator,currentValue)=>
      {return accumulator+ currentValue; },0);

console.log(sum);
 


//Exercise #4
//Using Reduce, multiply all numbers in a given array
//ex: multiply([1, 2, 3, 4, 5]) => 120
let num = [1,2,3,4,5];
let multiply = num.reduce((accumulator,currentValue)=>
{return accumulator * currentValue; },1);

console.log(multiply);



//Exercise #5
//using reduce, power up all numbers in a given array
// ex:  squareNums([3, 2, 3]) => 729, since (3^2) = 9 and then (9 ^ 3) = 729
let num1=[3,2,3];
let power = num1.reduce((accumulator,currentValue)=>
//{return accumulator ** currentValue }
{ return Math.pow(accumulator,currentValue)}
);
console.log(power);