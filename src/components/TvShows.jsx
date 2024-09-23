import MovieAppHeader from "./MovieAppHeader"
import { useState } from "react";


export default function TvShows(){
    const [movieData,setMovieData]= useState({});
    return(<div>
         <MovieAppHeader movieData={movieData} setMovieData={setMovieData}/>
    </div>)
}