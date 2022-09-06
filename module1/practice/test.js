// function high(x){
//     splitArray = x.split(' ');
//     charArray= splitArray.split('');
//     for(let i=0;i<splitArray.length;i++){
//          for (j=0;j<charArray.length;j++){
//                       let value=0;
//                       value+= charArray[j].toUpperCase().charCodeAt()-64;
//                        return value;
//          }
//     }     
//    let highScore =0;
//    let highIndex;
//    for(let h=0;h<)}






function high(x){
    let splitArray= x.split(' ');
    let splitChar= splitArray.map(element=> element.split(''));
    let charValue = splitChar.map(element=> {
             let value=0;
             element.map(character=> value+= character.toUpperCase().charCodeAt()-64);
                        return value;
                                   });
    let highestScore=0;
    let   highScoreIndex;
    for(let i=0;i<charValue.length;i++){
      if(charValue[i]>highestScore){
        highestScore= charValue[i];
        highScoreIndex=i;
      }    
    }
    return splitArray[highScoreIndex];                            
                                                               
  }
  