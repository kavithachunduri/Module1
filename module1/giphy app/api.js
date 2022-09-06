const BASE_URL = "https://api.giphy.com"
const API_KEY = '2kZpwAtORXujeZcl3UHcVX3nWQzOJj97'
const button =document.querySelector('button');
const giphyInput = document.querySelector('input');
const gifDiv= document.querySelector("div");

button.addEventListener('click', async ()=>{

    let giphy = giphyInput.value ;
   try{
    let response= await axios.get(`${BASE_URL}/v1/gifs/search?api_key=${API_KEY}&q=${giphy}&limit=25`);
//console.log(response.data.data);
     let gif = response.data.data
     for(let i=0;i<gif.length;i++){
        //grab the url property from a certain size
        //put it into an img tag
        //display it on the page 
        let giphyLink = gif[i].images.fixed_height_small.url;
        //console.log(giphyLink)
       let newImg =  document.createElement('img');
       newImg.setAttribute("src" , giphyLink);
       gifDiv.appendChild(newImg);
    }

   } catch(error){
   
    console.log(error);
   }
    

})
