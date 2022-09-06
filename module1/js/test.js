// Given an array of objects summarizing the number of fish in an aquarium,
// find the percent of fish where the species is unknown (the `species` is
// `undefined`). Return the percentage as a whole number between `0` and `100`.

// Example input:
// let fish = [
//   { species: 'Swordtail', count: 2 },
//   { species: 'Pearl Gourami', count: 1 },
//   { species: 'Rummynose Tetra', count: 12 },
//   { species: 'Neon Tetra', count: 30 },
//   { species: 'Guppy', count: 8 },
//   { species: 'Kribensis', count: 1 },
//   { species: 'Angelfish', count: 1 },
//   { species: undefined, count: 5 },
// ];

// Example output:8

function  fishPercent(fish){
  

    let count =0;
    let knownCount = 0;
     fish.forEach(element => {
        if(element.species===undefined){
            count+= element.count;
        }
        if(element.species!==undefined){
            knownCount += element.count;
        }
    });
        let totalCount = count + knownCount;
       
         let totalpercent = Math.round((count /totalCount )*100);
         console.log(totalpercent)
}

fishPercent(fish = [
      { species: 'Swordtail', count: 2 },
      { species: 'Pearl Gourami', count: 1 },
      { species: 'Rummynose Tetra', count: 12 },
      { species: 'Neon Tetra', count: 30 },
      { species: 'Guppy', count: 8 },
      { species: 'Kribensis', count: 1 },
      { species: 'Angelfish', count: 1 },
      { species: undefined, count: 5 },
    ]);


    //--------------------------------------------------------------------------


//     #2
// Days of the week are represented as three-letter strings ("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun")
// Write a function solution that, given a string S representing the day of the week and an integer K (between 0 and 500, inclusive), 
//returns the day of the week that is K day later.

// For example, given S = "Wed" and K = 2, the function should return "Fri".

// Given S = "Sat" and K = 23, the function should return "Mon".

function daysOfWeek(S, K) {
 const week =["Mon","Tue", "Wed","Thu","Fri","Sat","Sun"] ;
 const index = week.indexOf(S);
 let x= week[(index +K)% 7]
 console.log(x)
return x;
}
   daysOfWeek("Sat" , 23)      


































// var removeElement = function(nums, val) {
    
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//       if (nums[i] !== val) {nums[count++] = nums[i];}
//       console.log(count)
//     }
    
//     return count;


// };

// removeElement([3,2,2,3] , 3)