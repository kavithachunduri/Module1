function golfScoreCalculator(parList, scoreList){
    const pars = parList.split(' ')
    const scores = scoreList.split(' ')
    let  diffNumber=[];
 let sum=0;
 diffNumber = (scores, pars) => scores.map(function (num, idx) { return num- pars[idx] });
 console.log(diffNumber)
 for (let i = 0; i < diffNumber.length; i++) { sum += diffNumber[i]; } 
 return sum;
 
}
console.log(golfScoreCalculator('443454444344544443', '353445334534445344'));

function golfScoreCalculator(parList, scoreList){
    const pars = parList.split(' ')
    const scores = scoreList.split(' ')
  let difference = [];
 let sum = 0;
 for(let i=0;i<parList.length;i++){
   let diff = (scoreList[i]-parList[i]);
   difference[i]=diff;
 } 
 
  for (let i = 0; i < difference.length; i++) { sum += difference[i]; } 
return sum;

}