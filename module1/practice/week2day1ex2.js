// Independent Monkey Exercise
// Create a monkey object, which has the following properties:

// name
// species
// foodsEaten
// And the following methods:

// eatSomething(thingAsString)
// introduce: producers a string introducing itself, including its name, species, and what it's eaten
// Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

// Exercise your monkeys by retrieving their 
//properties and using their methods. Practice using both syntaxes for retrieving properties (dot notation and brackets).
//My name is ${objName} and I am from ${key} species . I eat ${obj[key]} for foods`
const Monkey = {
    name: "",
    species: "",
    foodsEaten: "",
    eatSomething: function(food){
        this.foodsEaten += food
    },
    introduce: function(){
        console.log(`${this['name']} is a ${this['species']} that has eaten ${this['foodsEaten']}`)
    }
}
const monkey1 = Object.create(Monkey)
monkey1.name = 'Murdoc'; monkey1.species = 'Gorilla'; monkey1.eatSomething('oranges')
monkey1.introduce()
const monkey2 = Object.create(Monkey)
monkey2.name = 'George'; monkey2.species = 'Chimpanzee'; monkey2.eatSomething('bananas')
monkey2.introduce()
const monkey3 = Object.create(Monkey)
monkey3.name = 'Bentry'; monkey3.species = 'Macaque'; monkey3.eatSomething('apples')
monkey3.introduce()




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

const favorite= {title: 'Mole',
                 servings :2,
                 ingredients:["cinnamon","cumin","cocoa"]
                 }
              

console.log(favorite.title);
console.log("serves:"+favorite.servings);
console.log("Ingredients:");
for (let i=0;i<favorite.ingredients.length;i++){
console.log(favorite.ingredients[i]);
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

const books =[{title:"book1 ", author:"author1 ", read:true}, {title:"book2 ", author:"author2 ", read:false}];

    for(i=0;i<books.length;i++){
        let  book = books[i];
        let  bookRef = book.title + ' by ' + book.author;
        if (book.alreadyRead) {
          console.log('You already read "' + bookRef);
        } else {
          console.log('You still need to read "' + bookRef);
        }
      }
      
    //   const arrOfBooks = [
    //     {
    //       title: "Kitchen",
    //       author: "Banana Yoshimoto",
    //       alreadyRead: true
    //     },
    //     {
    //       title: "Finish",
    //       author: "Jon Acuff",
    //       alreadyRead: false
    //     },
    //     {
    //       title: "Start With Why",
    //       author: "Simon Sinek",
    //       alreadyRead: false
    //     },
    //     {
    //       title: "Code",
    //       author: "Charles Petzold",
    //       alreadyRead: false
    //     },
    //     {
    //       title: "Better",
    //       author: "Charles Duhigg",
    //       alreadyRead: true
    //     },
    //   ]
      
    //   //index
    //   for (let key in arrOfBooks) {
    //     let book = arrOfBooks[key]
    //     if (book.alreadyRead) {
    //       console.log(`You already read ${book.title} by ${book.author}`)
    //     } else {
    //       console.log(`You have not read ${book.title} by ${book.author}`)
    //     }
    //   }
   
      
      
      
    //   Dominik Kulak  3:49 PM
    //   const books = [
    //     {
    //       title: 'Pride and Prejudice',
    //       author: 'Jane Austen',
    //       alreadyRead: true
    //     },
    //     {
    //       title: 'To Kill A Mockingbird',
    //       author: 'Harper Lee',
    //       alreadyRead: false
    //     },
    //     {
    //       title: 'The Alchemist',
    //       author: 'Paulo Coelho',
    //       alreadyRead: true
    //     },
    //     {
    //       title: 'Animal Farm',
    //       author: 'George Orwell',
    //       alreadyRead: true
    //     }
    //   ];
      
    //   books.forEach(book => {
    //     const hasRead = book.alreadyRead;
      
    //     if (hasRead) {
    //       console.log(`You already read "${book.title}" by ${book.author}`);
    //     } else {
    //       console.log(`${book.title} by ${book.author}`);
    //     }
    //   });

      
      
      
    //   Julian Brooks  3:52 PM

    //       let books = [{
    //               title: "The Alchemist",
    //               author: "Paulo Coelho",
    //               alreadyRead: true
    //           },
    //           {
    //               title: "Green Eggs and Ham",
    //               author: "Dr. Seuss",
    //               alreadyRead: false
    //           },
    //           {
    //               title: "Harry Potter and the Sorceror's Stone",
    //               author: "J. K. Rowling",
    //               alreadyRead: true
    //           }
    //       ];
      
      
      
    //       for (book of books) {
    //           let statusText = book.alreadyRead ? "You have already read" : "You have not read";
              
    //           console.log(`${statusText} ${book.title} by ${book.author}`);
    //       }    
    



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

 console.log("favorite movie :" + shawshank.title);
 console.log("movie director :" + shawshank.director);
 console.log("movie release year :" +shawshank.releaseYear);
console.log("movie duration :" + (shawshank.duration +=30));








//Exercise #4 
//using the array provided below, 
// How do you check if an object is an array or not? 
// You are checking if arrayList is an array, assuming it were an object before testing it
// That it is not an object
let arrayList = [1, 2, 3];

    
 let ans = Array.isArray(arrayList);

    if(ans) {
        console.log(`[${arrayList}] is an array`);
    }
    else {
        console.log(arrayList + "is not an array.");
    }

// Array.isArray(arrayList) ?  console.log("it is array") : console.log("it is not array")   




















