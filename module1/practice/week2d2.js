//Exercise #1
// Write a function countCharacters that, when given a string as an argument,
// returns an object containing counts of the ocurrences of each character in 
// the string
// function countCharacters(){
// 
//  }
// countCharacters("hello"); => {"h": 1, "e": 1, "l": 2, "o": 1}
let count ={};
function countCharacters(str){
    for(i=0;i<str.length;i++){
            if (count.hasOwnProperty(str[i])) {
              count[str[i]] += 1;
            } else {
              
              count[str[i]] = 1;
            }
          }
        
          return count;
        }
      
        console.log(countCharacters('hello'));
  



//Exercise #2
// Write a function that accepts two objects
// as arguments and 
// *extends* all of the key/value pairs of the second one to the first one
// function extend(obj1, obj2) {
  
// }
// extend({a: 1, c: 3}, {b: 2, c: 4}) => {a: 1, b:2, c:4}

let object1 = {
    a: 1,
    b: 2,
    c: 3
  };
  
 let object2 = {
    c: 4,
    d: 5,
    e: 6
  };
  
  function extend(obj1, obj2) {
    for (let key in obj1) {
        if (!obj2.hasOwnProperty(key)) {
          obj2[key] = obj1[key];
        }
      }
      console.log(obj2);
     }
     extend(object1, object2);

     // 1.const returnedObject = Object.assign(object1, object2);

    //console.log(object1);

    // 2.const extend = (obj1, obj2) => {
    //     let mergedObjs = {...obj1, ...obj2};
    //     return mergedObjs;
    //   }
      
    //   console.log(extend(object1, object2))
   
    

  //Exercise #3
  //using the .filter(), filter out the Full Stack residents 
  
  let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
               { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
               { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
               { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
               { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
               { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
               { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }];


             //let newUsers = users.filter(function(a) {return  a.role === "Full Stack Resident"} )  
             let  newUsers = users.filter((a)=>  a.role ===  "Full Stack Resident")      
             console.log(newUsers) ;
            
            // for(i=0;i<users.length;i++){
            //  if (users[i].role ===  "Full Stack Resident") {
            //     newUsers.push(users[i]);
            // }console.log(newUsers);
            // }
             
  
  // Exercise #4
  //Using Reduce
  //add up all the ages in the array of objects
  // the ages in the array of objects below should equate to 78
   const group=[{ name: 'Josh', age: 24 }, { name: 'Meghan', age: 34 }, { name: 'Samantha', age: 20 }]
    //  let result = group.reduce(function (acc, object) { return acc + object.age; }, 0);
    let result = group.reduce((accumulator, object)=>  {return accumulator + object.age ;},0 );
  
  console.log(result);
  
  
//   // Bonus 
  const hammondsMines = { buenos_aires: {
                                          depth: "400 meters",
                                          annual_budget: 1000000,
                                          specimens: ["Dilophosaurus","Brachiosaurus"]
                                        },
                          mexico: {
                                        depth: "350 meters",
                                        annual_budget: 900000,
                                        specimens: ["Gallimimus", "Parasaurolophus"]
                                     }
                         }
  // 1. Access the depth of John Hammond's mine in Mexico, store the depth of the Mexican 
  //  mine into an appropriately named variable.

  // 2. Access the annual budget for Hammond's mine in Buenos Airies, store the annual budget for 
  //Hammond's mine in Buenos Aires.

  // 3. Access and console the dinosaur DNA specimens found in Buenos Aires.
 
  // 4. Insert Nicaragua into hammondsMines.
  
  // 5. Create three variables to store the annual budgets for each mine into them.
  
  // 6. Create a new reasonably named variable to track the total annual cost of operation for the mines by adding the previously stored budgets.
  
  // 7. Access and console log the "Parasaurolophus" specimen.

  let  mexicoDepth = hammondsMines.mexico.depth;
  console.log(mexicoDepth);          
  let bueAnnualBudget = hammondsMines.buenos_aires.annual_budget;
  console.log(bueAnnualBudget);
  console.log("dinosaur DNA specimens found in Buenos Aires:");
  for(i=0;i<hammondsMines.buenos_aires.specimens.length;i++){
      console.log(hammondsMines.buenos_aires.specimens[i]);
  }
  const nicaragua = {depth: '200 meters',
                     annualBudget: 1500000,
                     specimens: ['Tyrannosaurus Rex','Stegosaurous','Triceratops','Velociraptor' ],
                    };

  let newHammondsMines = Object.assign(hammondsMines, nicaragua);
console.log(newHammondsMines);
let mexAnnualBudget = hammondsMines.mexico.annual_budget;
let nicaraguaAnnualBudget = nicaragua.annualBudget;
let totalAnnualCost = bueAnnualBudget + mexAnnualBudget + nicaraguaAnnualBudget;
console.log(totalAnnualCost);
for(i=0;i<hammondsMines.mexico.specimens.length;i++){
    
}console.log(hammondsMines.mexico.specimens[1]);
