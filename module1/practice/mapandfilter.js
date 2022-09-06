//Exercise #2
// Write a function using .filter(), that takes in an array
// of numbers and returns an array of only numbers that are divisible
// by 6

const numbers = [5, 6 ,7 ,8,10 ,12,18];
const newNumbers = numbers.filter((num)=>  num % 6 === 0)
console.log(newNumbers)