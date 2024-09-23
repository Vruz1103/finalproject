import MovieAppHeader from "./MovieAppHeader"
import { useState } from "react";
export default function Movies(){
    const [movieData,setMovieData]=    useState({});
    return(<div>
         <MovieAppHeader movieData={movieData} setMovieData={setMovieData}/>
    </div>)
}