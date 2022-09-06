//Exercise #1
//Write a function that loops over the following array of TKH students
// and prints out their name and what class they are currently in.
const students = [
    "Angel",
    "Ayman",
    "David",
    "Diana",
    "Ezra",
    "Jahaziel",
    "Jennifer",
    "Julian",
    "Katherine",
    "Leesel",
    "Naeem",
    "Nashid",
    "Quiana",
    "Shafee",
    "Shan",
    "Stephanie",
    "Tinesha",
    "Zipporah",
  ];
  
   function  StudentClass(){
//       let i = 1;
//       students.forEach(g => {
//         console.log(g , "is in class" , i);
//         i = i + 1;
//       });
       for (i=0;i<=students.length-1;i++){
          console.log(students[i] , "is in class" , i);
      }
    }

  StudentClass();
  
  
  console.log('------------------------------------------------------')
  //Exercise #2
  //Write a function named calculateDogAge that:
  //takes one argument: your puppy's age
  //calculates your dog's age based on the conversion rate of
  // 1 human year to 7 dog years
  //outputs the result to the screen like so:
  //"Your dog is something years old in dog years"
  //call the function with different sets of values
  //Add an additional argument to the function that takes the conversion
  //rate of human to dog years
  
  let x;
  function calculateDogAge(age){
         x=(age*7);
         console.log("your dog is", x, "years old in dog years")

  }
  
  calculateDogAge(4);
calculateDogAge(8);
  
  
  
console.log('------------------------------------------------------')
  
  
  
  //Exercise #3
  //Write a function named calculateSupply that:
  // takes 2 arguments: age, amount per day
  // calculates the amount consumed for the rest of the life(based on a benchmark age)
  //  outputs the result to the screen like so: "You will need SOMETHING to last you until the age of X"
  // Call that function several times, using different values each time
  // Bonus: accept floating point values for amount per day, and round the
  // result to a round number
  let benchAge=100;
  let amount;
  function calculateSupply(age, pay){
                 amount= (benchAge-age)*(365*pay);
                 console.log("you will need", amount,"$ to last until the age of", benchAge);

  }
  calculateSupply(30, 200);
  
  
  
  console.log('------------------------------------------------------')
  
  
  
  
  //Exercise #4
  //http://math2.org/math/geometry/circles.htm
  //
  //Create 2 functions that calculate properties of a circle:
  //First: Create a function called calcCircumference
  // - Pass the radius to the function
  // - Calculate the circumference based on the radius
  // - and output " The circumference is SOMETHING"
  // Second: Create a function called calcArea:
  // - Pass the radius to the function
  // - Calculate the area based on the radius and output "The area is SOMETHING"
  let circum;
  let area;
  function calcCircumference(radius){
       circum= (2* Math.PI * radius);
    console.log("The circumference of the circle is", circum);
  }
function calcArea(radius){
      area= (Math.PI*radius*radius);
      console.log("The area is ", area)
}
calcCircumference(5);
calcArea(6)
  
  
  
console.log('------------------------------------------------------')
  
  
  
  
  //Exercise #5
  //Create a function called celsiusToFahrenheit:
  // - store a celsius temperature into a variable
  // - convert it to fahrenheit and output "SOMETHING degrees Celsius is Something degrees Fahrenheit"
  //Create a function called fahrenheitToCelsius:
  // - Now store a fahrenheit temperature int a variable
  // - Convert it to celsius and output "SOMETHING degrees Fahrenheit is SOMETHING degrees Celsius"
  let temp1;
  let temp2;

  function celsiusToFahrenheit(c){
          temp1 = (c * 9/5) + 32;
          console.log (c, "degress celsius is "  , temp1 ,"degrees Fahrenheit");
  }
  
  celsiusToFahrenheit(3);
  
  function fahrenheitToCelsius(f){
           temp2 =((f - 32) * (5/9) );
           console.log (f, "degress celsius is "  , temp2 ,"degrees Fahrenheit")
  }
  
  fahrenheitToCelsius(37);

  console.log('------------------------------------------------------')
  
  //Exercise #6
  //Write a function that takes 3 parameters and returns one number, which is
  //the product of the first two numbers raised to the power of the third
  //passing this function 1,2,3 should give you back the answer to (1 * 2)^3
let ans1;
let ans2;
  function productAndPower(a,b,c){
           ans1= (a*b);
           ans2=Math.pow(ans1,c);
           console.log("The product of the first two raised to power of third is", ans2);
  }
  productAndPower(4,3,2);


  console.log('------------------------------------------------------')