const button =document.querySelector('button');
const breedInput = document.querySelector('input');
const imageDiv= document.querySelector("div");
//type into the text box
// extract whatever was typed into the box
//on the click of the button 
//send that to the api

button.addEventListener('click', async ()=>{
let breed = breedInput.value             
let response= await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
let dogPic= response.data.message;
//console.log(response.data.message);
//show on the browser
imageDiv.innerHTML= `<img src=${dogPic}>`

})