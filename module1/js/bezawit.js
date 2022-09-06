import  { useState , useEffect} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import React from 'react'
import './moviedetails.scss';



const picConfig = {
  w300Image: (imgPath) => `https://image.tmdb.org/t/p/w300/${imgPath}`,
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

function TvShowDetails() {

      const navigate = useNavigate();
      const {id} = useParams();
      const[movieTrailer , setMovieTrailer]= useState('');
      const[movieCast , setMovieCast ] = useState('')
      const[moviedescription,setMovieDescription ]=useState('')

       
       const VIDEO_URL = "https://www.youtube.com/watch?v="  ;
       const BASE_URL = "https://api.themoviedb.org/3"
       const API_KEY = "b990552aaa8b2d4d2ccfc84e824bd713";

 //movie trailer==https://api.themoviedb.org/3/movie/135647/videos?api_key=b990552aaa8b2d4d2ccfc84e824bd713&language=en-US
 //movie credits==https://api.themoviedb.org/3/movie/135647/credits?api_key=b990552aaa8b2d4d2ccfc84e824bd713&language=en-US
 //movie details==https://api.themoviedb.org/3/movie/135647?api_key=b990552aaa8b2d4d2ccfc84e824bd713&language=en-US
       async function getVideos(id ){
        const videoresponse = await  axios.get(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`);
      
        console.log(" trailervideo",videoresponse);
        let outputvideo= videoresponse.data.results;
        console.log("trailer", outputvideo)
        console.log("trailerkey", outputvideo[0].key)
            setTvTrailer(outputvideo);      
             
       }




       async function getCredits(id ){
          const castresponse = await  axios.get(`${BASE_URL}/tv/${id}/credits?api_key=${API_KEY}&language=en-US`);
        
          console.log(" credits",castresponse);
          let output= castresponse.data;
          console.log("cast", output)
              setTvCast(output);      
               
         }

         async function getDetails(id ){
          const detailsresponse = await  axios.get(`${BASE_URL}/tv/${id}?api_key=${API_KEY}&language=en-US`);
          console.log(" credits",detailsresponse);
          let detail= detailsresponse.data;
          console.log("cast", detail)
         
              setDescription(detail);      
               
         }
         console.log("setcast",tvCast)
           console.log("description",description)
         
           useEffect(()=>{
               getVideos(tvshow_id)
               getDetails(tvshow_id )
               getCredits(tvshow_id )
                      },[tvshow_id])

        console.log( "overview",description.overview)
        console.log( "posterpath",`${picConfig.originalImage(description.poster_path )}`)
     
         return(
          
<div>
             
             <div className='banner' style={{backgroundImage:`url(${picConfig.originalImage(description.backdrop_path || description.poster_path)})`}}></div>
            <div className='mb-3 movie-content container'>
               <div className='movie-content__poster'>
                {/* <img className='movie-content__poster__img' src={`${picConfig.originalImage(description.poster_path || description.backdrop_path)}`}  alt="pic"/> */}
                <div className='movie-content__poster__img' style={{backgroundImage:`url(${picConfig.originalImage(description.poster_path || description.backdrop_path)})`}} ></div>
    
                 <div className='movie-content__info'>
                  <h1 className='title'>{description.original_name}</h1>
                  <div className="genres">
                       {description.genres && description.genres.map((item) => (
                         <span className='genres__item'  key={item.name}>{item.name}</span>
                      ))}
                  </div>
                      <p className='overview'>{description.overview}</p>
                      <div className='cast'>
                        <div className='section__header'>
                          <h2>Casts</h2>
                        </div>
                        <div className='casts'>
                        {tvCast.cast && tvCast.cast.slice(0, 5).map((item) => {
                          return(
                            <div className="casts__item">                                        
                            <div className="casts__item__img"  style={{backgroundImage:`url(${picConfig.w500Image(item.profile_path)})`}} key={item.id} ></div>
                              {/* <img className="casts_item_img" src={`${picConfig.w500Image(item.profile_path )}`}  alt="pic"/> */}
                               <p className="casts__item__name" key={item.name} >{item.name}</p>
                              </div>
                               )
                           })}
                        
                      </div> 
                       </div>
                 </div> 
               </div>
               <div className='container'>
                <div className='section mb-3'>
                 {tvTrailer && tvTrailer.slice(0, 1).map((item) => {
                  return <iframe
                src={`https://www.youtube.com/embed/${item.key}`}
                height="350"
                width="450"
                title="video"
            ></iframe>}) }
                </div>
               </div>
            </div>
              <button className="returnTvShow" onClick={() => navigate(-1)}>Return to Tvshows</button>
          </div>
         )
}

export default TvShowDetails





























































// import React from 'react'
// import {useNavigate} from "react-router-dom"

// function TvShowOut(props) {
//     const navigate = useNavigate();
   
//    const  w500Image =  `https://image.tmdb.org/t/p/w500/${props.image}`

//   return (

//     <div className='SearchTile' key={props.id}>
//         <img  className='SearchTile_img' src={w500Image} onClick={()=> navigate(`/TvShows/${props.id}`)} alt="Post banner" />
//         <p  className='SearchTile_name'>{props.title}</p>
//         </div>
       
//   )
// }

// export default TvShowOut






















// // import React from 'react'
// // import MovieOut from '../Components/MovieOut'

// // function MovieFilter(props) {

// // const { data} = props            

// //   return (
// //     <div className='SearchOutput'>
// //                  { data.map((show)=>{
                    

// //                     return <MovieOut  key={show.name} id={show.id} title={show.name} image={show.poster_path} />
                    
                   
// //                     })
// //                 }
// //     </div>
// //   )
// // }

// // export default MovieFilter







// // import React from 'react';
// // import { useState, useEffect } from 'react';
// // import MovieList from './MovieList'
// // import {callPopularMovies} from '../Services/ApiCall';
// // import MovieFilter from './MovieFilter';
// // import MoviesMiddle from './MoviesMiddle';
// // import MovieDescription from './MovieDescription'
// // import {BrowserRouter as Router, Route} from 'react-router-dom';
// // import './moviespopular.scss';
// // import Error from './Error';
// // import TvRoundedIcon from '@mui/icons-material/TvRounded';

// // function Movies() {
// //     const [click,setClick] = useState([]);
// //     const [search,setSearch] = useState('');
// //     const[error,setError] =useState('')
// //   const [popularMovie, setPopularMovie] = useState([])

// //   const BASE_URL = "https://api.themoviedb.org/3"
// //   const API_KEY = "b990552aaa8b2d4d2ccfc84e824bd713"


  
// //   const pageLoad=async()=>{

// //     let movieAll = await callPopularMovies()
// //     movieAll = movieAll.data.results
// //     setPopularMovie(movieAll)
// //     console.log("setpopluar movie",movieAll)
// //   }

// //   useEffect(()=>{
// //     pageLoad()
// //   },[])
   
// //   const buttonClick =async() =>{
      
// //     if(search!==""){
// //     let response = await searchMovies(search);
// //     console.log("api response",response)
// //     setPopularMovie('');
// //      if( response.data.results.length!==0){
// //       let output=response.data.results;
// //       console.log('output',output)
       
// //        setSearch('')
// //        setClick(output)
// //        setError("")
// //     }
// //       else{
// //       setError(`There are no results for ${search} `)
// //     }
// //   }
// //     else{
      
// //         setError("Type the name of the Tv show you want in the box")
// //     }
// //  console.log("click", click);
// // }
  
 


// //   return (
// //     <div className='tvShows'>

// //           <h1>< TvRoundedIcon />  Tv Shows  < TvRoundedIcon />
// //          </h1>
// //         <input  type="text" placeholder="Search Your Tvshow...."  onChange={(e)=>setSearch(e.target.value)} />
     
// //      <button    onClick={buttonClick}  > Search </button>
// //      <div>
// //     <OutputMap mapping={click}/>
   
   

// // {/* <MoviesMiddle clearMovieList={event => clearMovieList(event)}/> */}

      
     
// // <div className="popular">
// // {popularMovie.map((singleMovie, index) => {
// //   return <div className="popular"><MovieList movieData={singleMovie} key={index} /></div>
  
// // })}
// // </div>

// //  {/* <MovieFilter data = {popularMovie}/> */}
// //  </div>
// //      <div>
// //       { error!=="" && <Error error={error}/>}

// //     </div>

// //     </div>
// //   )
// // }



// // export default Movies