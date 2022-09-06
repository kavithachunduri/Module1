// write a function that takes two numbers and returns the max of two numbers
//you must pseudo code

//max of two numbers .(get tha max by adding the numbers divide by no.of numbers)
// use Math.max() function 

// function maxOfTwoNumbers(a, b) {
//     return Math.max(a,b);
// }
// console.log(maxOfTwoNumbers(5,10));

function maxOfTwoNumbers(a, b) {
if(a==b){ return a + "is equal" + b}//compare if both are equal
    else if (a>b){ return a + "is max"}//compare if  a is greater than b
 else { return b +" is max"}//else return b as max
}
console.log(maxOfTwoNumbers(5,10));



//Write a function that takes a character 
//and returns true if it's a vowel. 
//Otherwise, it should return false

function isCharacterVowel(char) {
    if(char.length==1){
    let char1 = char.toLowerCase();
    if (char1==='a'||char1==='e'||char1==='i'||char1==='o'||char1==='u')//check if the character is equal to any one of the vowels( a,e,i,o,u)
    {             
        return true;//if it is equal return true (the character is vowel )
    }
    else {
     
        return false;    // return false if it not vowel
    }
}}
console.log(isCharacterVowel('A'));
console.log(isCharacterVowel('l'));
console.log(isCharacterVowel('u'));



//  given an array of strings return the longest string

function findBigString(strings) {
     let longest = strings[0].length;
         largest = strings[0];
        for(i=1;i<strings.length;i++){
            if (strings[i].length > longest){
                largest = strings[i];
                longest= strings[i].length;
            }
            
        } return largest;
}

console.log(findBigString(['pittsburgh',"denver", "newyork","harrisburgh"]));















