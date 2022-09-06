//DrEvil
//create a function called DrEvil. It should take a single argument, an amount
//and return '<amount> dollars', except it will add '(pinky)' at the end if 
//the amount is 1 million. For example:
// DrEvil(10): 10 dollars
// DrEvil(1000000): 1000000 dollars (pinky)
// answer below:

function DrEvil(amount){
if (amount===1000000){
    console.log(`${amount} dollars (pinky)`);}
else{console.log(`${amount} dollars`)}  }  
DrEvil(100);
DrEvil(1000000);

//Create a function called mixUp
//It should take in two stings, and return the concatenation of the two strings(separated by a space)
//slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. 
//For example:
//mixUp('mix', 'pod'): 'pox mid'
//mixUp('dog', 'dinner'): 'dig donner'
//write answer below 
function mixUp(a,b){
let swap= b.slice(0,2) + a.slice(2) + " " + a.slice(0,2) + b.slice(2);
console.log(swap);
}
mixUp('mix', 'pod');
mixUp('dog', 'dinner');
 //2. //str1= a.splice('');
    //str2= b.splice('');
    
    //let newstr1= str1.replace(a,b);
    //let newStr2=str2.replace(b,a);
    //console.log(newStr1,newStr2);

//Create a function called fixStart
//It should take a single argument, a string, and return a version where all occurences of its first
//character have been replaced with '*', except for the character itself. 
//fixstart('babble'): 'ba**le'
//write answer below
function fixStart(a){
    for(i=0;i<a.length;i++){
        if(a[i]===a[0] && i!==0){
         a[i] = "*";
        }
    }console.log(a);
}fixStart('babble');
// let string;
// for(let i=0;i<a.length;i++){
//     if (a[i]===a[0] && i!==0){ 
//     string = a.replaceAll(a[i], "*").replace("*",a[0]);}    
//    } console.log(string);



// Independent Monkey Exercise
// Create a monkey object, which has the following properties:

// name
// species
// foodsEaten
// And the following methods:

// eatSomething(thingAsString)
// introduce: producers a string introducing itself, including its name, species, and what it's eaten
// Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

// Exercise your monkeys by retrieving their properties and using their methods. Practice 
// using both syntaxes for retrieving properties (dot notation and brackets).












// Exercise #1
// Create an object to hold information on your favorite recipe.
//It should have properties for *title* (a string), *servings*(a number)
// and *ingredients*(an array of strings)
// On separate lines (one console.log statement for each), log the 
//recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

let object  = { title: "Cake",
                servings:2,
                ingredients:["butter","sugar","flour"]}
console.log(object.title);
console.log("Serves :" +object.servings);
console.log("Ingredients :");
for(i=0;i<object.ingredients.length;i++){
            console.log(object.ingredients[i]);
}





//Exercise #2
// Create an array of objects, where each object describes
// a book and has properties for the *title*(a string), *author*(a string)
// and *alreadyRead* (a boolean indicating if you read it yet)
// Iterate through the array of objects of books. For each book, log the book title and book
// author like so: "1984 by George Orwell"
// Now use an if/else statement to change the output depending on whether you read it
// or not. If you read it, log a string like "You already read "1984" by George Orwell"
// and vice versa

const arrOfBooks = [
    {
      title: "Kitchen",
      author: "Banana Yoshimoto",
      alreadyRead: true
    },
    {
      title: "Finish",
      author: "Jon Acuff",
      alreadyRead: false
    },
    {
      title: "Start With Why",
      author: "Simon Sinek",
      alreadyRead: false
    },
    {
      title: "Code",
      author: "Charles Petzold",
      alreadyRead: false
    },
    {
      title: "Better",
      author: "Charles Duhigg",
      alreadyRead: true
    },
  ]

  for(i=0;i<arrOfBooks.length;i++){
      let array= arrOfBooks[i];
  if(array.alreadyRead){
      console.log("you alread read the book ");
  }else{ console.log("you dint read the book ");}
  }
//Exercise #3
//Create your object representing your favorite movie, like so
// const shawshank = {
//   title: 'Shawshank Redemption',
//   director: 'Frank Darabont',
//   actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
//   releaseYear: 1994, 
//   duration: 142
// }
// After you have crreated your movie object, print the title 
// of your movie using dot notation
// Print the director's name
// Print the release year
// Maybe your favorite came with an extended cut, including deleted scenes. 
// Write a statement that increases your movie object's duration by 30 minutes. 

const shawshank = {
       title: 'Shawshank Redemption',
       director: 'Frank Darabont',
       actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
       releaseYear: 1994, 
        duration: 142
    }
console.log(shawshank.title);
console.log(shawshank.director);
console.log(shawshank.releaseYear);
console.log(shawshank.duration+=30);

//Exercise #4 
//using the array provided below, 
// How do you check if an object is an array or not? 
// You are checking if arrayList is an array, assuming it were an object before testing it
// That it is not an object
let arrayList = [1, 2, 3];

 Array.isArray(arrayList) ?  console.log("it is array") : console.log("it is not array")