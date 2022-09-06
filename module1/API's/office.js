const button =document.querySelector('#button');
const textInput = document.querySelector('#input1');
const textDiv= document.querySelector("#office");
//const text = document.querySelector("#quote");
const random = document.querySelector('#excuse')
const newButton=document.querySelector('#randomButton');
const noOfExcuses = document.querySelector('#input2');
button.addEventListener('click', async ()=>{ 
 
    try{
        let typeOfExcuse= textInput.value; 
        let noExcuses=noOfExcuses.value;
     let response1= await axios.get(`https://excuser.herokuapp.com/v1/excuse/${typeOfExcuse}/${noExcuses}`);
  // console.log(response1);
  // console.log(noExcuses);
       for(i=0;i<noExcuses;i++){
        
    let  newExcuse = response1.data[i].excuse; debugger;
  //console.log(response1.data[i].excuse);
   
  let newPara =  document.createElement('p');
    newPara.innerText= `${newExcuse}`;
    textDiv.appendChild(newPara);
    }
}
    catch(error){console.log(error); }
    
})


newButton.addEventListener('click', async ()=>{
    
    try{
      
     let response= await axios.get(`https://excuser.herokuapp.com/v1/excuse`);
    //console.log(response);
        let  randomExcuse = response.data[0].excuse;

//console.log(response.data[0].excuse)
   random.innerText= `${randomExcuse}`
    }
    catch(error){
        console.log(error);
    }
    
})
