const button =document.querySelector('button');
const textInput = document.querySelector('input');
const textDiv= document.querySelector("div");
button.addEventListener('click', async ()=>{
              
    
    try{
       let query= textInput.value;
    let response= await axios.get(`https://api.adviceslip.com/advice/search/${query}`);
  // console.log(response);
     let quote = response.data.slips;
     for(let i=0;i<quote.length;i++){
          let quoteText = quote[i].advice
   //console.log(quoteText);
   let newPara =  document.createElement('p');
   newPara.innerText= `${quoteText}`;
   textDiv.appendChild(newPara);
     } 
}
    catch(error){
   
        console.log(error);
       }
        
    
    })
    