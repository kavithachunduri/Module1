// function findBigString(strings) {
// let largest = new Array(); // take an empty array
// let largestLength = 0;  // let intial length of the largest word is zero
    

//        for(i=0;i<strings.length;i++){    //for loop
          
//            if (strings[i].length > largestLength){ // comapring length of each string to largestlength
//                largestLength = strings[i].length;   //if its greater than the largestlength assign the value to largestlength
               
//                largest.push(strings[i]);
//            }
//            else if (strings[i].length === largestLength){  //if both strings are equal 
//             largestLength = strings[i].length;
//                largest.push(strings[i]);
//            }
           
//        }
//        return largest;
//     }
//    console.log(findBigString(['denver',"pittsburgh", "newyork","harriburgh"]));



function findBigString(strings) {
let largest = new Array(); // take an empty array
let largestLength = 0;  // let intial length of the largest word is zero
    

       for(i=0;i<strings.length;i++){    //for loop
          
           if (strings[i].length > largestLength){ // comapring length of each string to largestlength
               largestLength = strings[i].length;   //if its greater than the largestlength assign the value to largestlength
               
               
           }
           else if (strings[i].length === largestLength){  //if both strings are equal 
            largestLength = strings[i].length;
               largest.push(strings[i]);
           }
           
       }
       return largest;
    }
   console.log(findBigString(['denver',"pittsburgh", "newyork","harriburgh"]));