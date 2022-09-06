
   
//Write a for loop that will iterate from 0 to 10,
//it will multiply the number by 9
//and log the result (e.g. "2 * 9 = 18")
//Bonus: Use a nested for loop to show the tables for every
//multiplier from 1 to 10 (100 results total)
for (i=0; i<=10; i++)
  {
      console.log(i*9);
  }




//Write a function that takes an array of numbers as an argument.
//This function should return the first duplicate number in the array:
// For example: [2,7,5,9,8,7] should return 7;

let n=[1,2,3,4,2,3];

function findDuplicate(){
    let found = false;
 for (i=0;i<=n.length-1;i++){
 if(found == true) break;

    for (j=0;j<=n.length-1;j++){
        if(found == true) break;

        if(n[i] === n[j] && i != j)
        
        {
            
            console.log(n[i]);
            
            found = true;
            break;
        }
    }   
}
}
findDuplicate();

// You just got paid! Write a while loop that will set an accountBalance variable up to and including 100.
// What should accountBalance be initialized to?
// Where in the scope of the while loop should this be initialized?
// Print the balance to the console in a variable called message and start it with the string 'My checking account balance is $'.
// What should message be initialized to?
// Where in the scope of the while loop should this be initialized?
// How can we print a newline in JavaScript? (Ok, this one is for free, '\n').
     let  accountBalance=0;
     let message;
         while (accountBalance<100){
         accountBalance+= 10;
         message= "My checking account balance is $" + accountBalance;
         console.log(message);
     }
  

       

// Given the following array,
// let fishArray = ["Cod", "Tuna", "Salmon", "Swordfish"];
// Loop through the array to find the longest word by how many letters each string contains.
// What other variables will you need?
// Print the length of the longest word to the console.
// Print the longest word to the console.
  // let fishArray = ["Cod", "Tuna", "Salmon", "Swordfish"];
//     for (i=0;i<=fishArray.length-1;i++){
//      for (j=0;j<=fishArray.length-1;i++){
//          if (fishArray[i].length > fishArray[j].length) 
//      }
//   }
let fishArray = ["Cod", "Tuna", "Salmon", "Swordfish"];
let newArray= [];
let wordIndex= 0;
let largest= 0;
fishArray.forEach(element => {
newArray.push(element.length);
  });

for (i=0; i<=newArray.length-1;i++){
    if (newArray[i]>largest) {
         largest=newArray[i];
         wordIndex=i;
        }
        
}console.log(largest);
console.log(fishArray[wordIndex]);

// let x;
// let char="";
// for (x=6;x<=6;x++){
//     char+=char + ('*');
// }
// console.log(char);

// for(let i=10; i>=0; i--)
// {
//     console.log(i);
// }

let i=0;
while (i<100){
    i+=5;

console.log(i)}
