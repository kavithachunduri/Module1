const button =document.querySelector('button');
const textInput = document.querySelector('input');
const textDiv= document.querySelector("#quotes");
button.addEventListener('click', async ()=>{
              
    
    try{
    
    let response= await axios.get(`https://api.adviceslip.com/advice`);
   
    //console.log(response);
    let quote = response.data.slip.advice;
   // console.log(response.data.slip.advice)
   //textDiv.innerHTML= `${quote}`
   textDiv.innerHTML= `${quote}`
    }
    catch(error){
        console.log(error);
    }
    
})