
  let numbers= [19,5,42,2,77];
function sumTwoSmallestNumbers(numbers) {  
let newArray=[];

for(i=0;i<numbers.length;i++){
if(numbers[i]<newArray[0] || newArray[0]==null){
    if(newArray[1]<newArray[0] || newArray[1]==null) 

    newArray[1]=newArray[0]
}
newArray[0]=numbers[i]
else if(numbers[i]<newArray[1] || newArray[1]==null){

    newArray[1]=numbers[i]
}



}
console.log (newArray[0]+newArray[1]);
return (newArray[0]+newArray[1]);
   }



  sumTwoSmallestNumbers(numbers)
 
