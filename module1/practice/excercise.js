//Exercise #1
//Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number. 
// Call that function 2 times with different number pairs
// and log the output to make sure it works 
//(e.g. "The greater number of 5 and 10 is 10")
function  greaterNum(num1,num2){
    if(num1>num2){
        console.log(`the greater number of ${num1} and ${num2} is ${num1}`)
    }
    else
   { console.log(`the greater number  of  ${num1} and ${num2} is ${num2}`)
}
}

greaterNum(2,3);
greaterNum(6,5);


//Exercise #2
//Write a function named helloWorld that: 
// takes 1 argument, a language code ("es", "de", "en")
// returns "Hello, World" for the given language, for at least 
// 3 languages. It should default to returning English
//Call that function for each of the supported languages and log the 
// resultto make sure it works

// function helloWorld(language){

// switch(language){
//     case language= "spanish":
//         console.log('Hola, Mundo');
//         break;
//     case language= "German":
//         console.log('Hallo, Welt');
//         break;
//     case language= "Italian":
//         console.log('Ciao, mondo');
//         break;  
//      default:
//          console.log("hello, World") ;       
// }
// }

//helloWorld('German');

function helloWorld(language){
    if(language=="Spanish"){ console.log('Hola, Mundo');}
    else if(language=="German"){ console.log('Hallo, Welt');}
    else if(language=="Italian"){ console.log('Ciao, Mondo');}
    else {{ console.log('Hello, World');}}
}

helloWorld('Italian');


//Exercise #3
//Write a function named assignGrade that:
//takes 1 argument, a number score
//returns a grade for the score, either "A", "B", "C", "D", or "F"
//Call that function for a few different scores and log the result 
//to make sure it works
  function assignGrade(score){
  if (score<100 && score>=90){
      console.log('You got a grade A ');
  }
  else if (score<90 && score>=80){
    console.log('You got a grade B ');
}
else if (score<80 && score>=65){
    console.log('You got a grade C ');
}
else if (score<65 && score>=55){
    console.log('You got a grade D ');
}
else {
    console.log('You got a grade F ');
}
  }
assignGrade(73);
assignGrade(89);
assignGrade(57);








//Exercise #4
//Write a function named pluralize that:
//takes 2 arguments, a noun and a number
//returns the number and pluralized form, like "5 cats" or "1 dog"
//call that function for a few different scores
//and log the result to make sure it works
//Bonus: Make it handle a few collective nouns like "sheep" and "geese"

function pluralize(noun , number){
if (number==1){
    console.log(`${number} ${noun}`);
}
else if(number>1){
    console.log(`${number} ${noun}s`);
}
}
pluralize("dog", 2);