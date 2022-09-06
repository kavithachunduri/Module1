
//Calculator
// Recognize user input and display it
//We need a button to clear the screen
//We need to be able to compute all the math
// Average button


function input(button) {
    // The text of the button that is clicked to be displayed on the 
    // screen
    //extract the value from buttons, add that value to the display
    // value
    document.calc.display.value += button.value;
  }
  
  function clearDisplay() {
    document.calc.display.value = "";
  }
  
  function enter() {
    //Evaluate the string on the screen
    // as a mathematical equation
    // then displays the answer back on the screen
  document.calc.display.value = eval(document.calc.display.value)
  }
  
  
  
  function average() {
   let sum = 0;
   let listOfNums =  document.calc.display.value.split(',');
    
    for (let i = 0; i < listOfNums.length; i++){
      sum += parseInt(listOfNums[i])
      //parseInt will read an integer inside of a string as 
      // an integer not as a string
    }
    let average = sum / listOfNums.length;
  
    document.calc.display.value = average;
    
  }