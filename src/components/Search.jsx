
// // import React, { useState } from 'react';
// // import { Input, Card, Col, Row, Typography } from 'antd';
// // import axios from 'axios';

// // const { Search } = Input;
// // const { Title } = Typography;
// // const { Meta } = Card;

// // function SearchComponent() {
// //   const [movies, setMovies] = useState([]);
// //   const [loading, setLoading] = useState(false);

// //   const onSearch = async (value) => {
// //     setLoading(true);
// //     try {
// //       const response = await axios.get(
// //         ``
// //       );
// //       setMovies(response.data.results);
// //     } catch (error) {
// //       console.error('Error searching movies:', error);
// //     }
// //     setLoading(false);
// //   };

// //   return (
// //     <div>
// //       <Title level={2}>Search Movies</Title>
// //       <Search
// //         placeholder="Enter movie title"
// //         onSearch={onSearch}
// //         enterButton
// //         loading={loading}
// //         style={{ marginBottom: 20 }}
// //       />
// //       <Row gutter={[16, 16]}>
// //         {movies.map((movie) => (
// //           <Col xs={24} sm={12} md={8} lg={6} key={movie.id}>
// //             <Card
// //               hoverable
// //               cover={
// //                 <img
// //                   alt={movie.title}
// //                   src={``}
// //                   onError={(e) => {
// //                     e.target.onerror = null;
// //                     e.target.src = '';
// //                   }}
// //                 />
// //               }
// //             >
// //               <Meta title={movie.title} description={`Rating: ${movie.vote_average}`} />
// //             </Card>
// //           </Col>
// //         ))}
// //       </Row>
// //     </div>
// //   );
// // }

// // export default SearchComponent;



// import { useEffect } from "react";
// import { useState } from "react"
// import styles from "../css/search.module.css"

// const URL="https://api.tvmaze.com/search/shows";
// const API_KEY="_UnrgO0re3te9sXKWxh1TfEvuxZRoY_c"

// export default function Search({movieData, setMovieData}){
//     const [showId,setShowId]=useState("");
//     useEffect(()=>{
        
//         async function fetchMovie(){
//           const res= await fetch(`${URL}?q=${showId}`);
//           const data=await  res.json();
//           console.log(data);
//         //   console.log(data.results);
//         setMovieData(data);
//         }
//         fetchMovie()
//         // function demo(){
//         //     console.log("Demo function executed");
//         // }
//         // demo()
//     },[showId]);
//     return(<div className={styles.search}>
//         <input 
//         type="text" 
//         value={showId} 
//         onChange={(e)=>setShowId(e.target.value)} ></input>
//     </div>)
// }
















import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../css/search.module.css";

const URL = "https://api.tvmaze.com/search/shows";
const API_KEY = "_UnrgO0re3te9sXKWxh1TfEvuxZRoY_c";


const api = axios.create({
  baseURL: URL,
});


api.interceptors.request.use(
  (config) => {
    
    config.params = config.params || {};
    config.params['api_key'] = API_KEY;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


api.interceptors.response.use(
  (response) => {
    
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default function Search({ movieData, setMovieData }) {
  const [showId, setShowId] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await api.get("", { params: { q: showId } });
        console.log(data);
        setMovieData(data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    if (showId) {
      fetchMovie();
    }
  }, [showId, setMovieData]);

  return (
    <div className={styles.search}>
      <input
        type="text"
        value={showId}
        onChange={(e) => setShowId(e.target.value)}
      />
    </div>
  );
}