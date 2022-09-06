function twoSum(nums, target) {
    for(let i=0;i<nums.length;i++){
        if (nums[i]+nums[i+1]=== target){
          //let x= [nums[i],nums[i+1]];
          let x=[i,i+1];
          console.log(x)
            return x;
        }
    }
};

twoSum( [3,3],6)
















// function findMissingLetter(array)
// {

//     let alphabetArr = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
//     console.log(alphabetArr);
//     console.log("hello workd");
//     let alphabetSlice = alphabetArr.slice(alphabetArr.indexOf(array[0]), alphabetArr.indexOf(array[array.length - 1]) + 1);

//     let missingLetter = alphabetSlice.find((e, i) => e !== array[i]);
//     console.log(missingLetter);
//     return missingLetter;
   



// }

// findMissingLetter(["a","c","d","e"])