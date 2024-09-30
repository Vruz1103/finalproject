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

import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
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
    config.params["api_key"] = API_KEY;
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

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default function Search({ movieData, setMovieData }) {
  const [showId, setShowId] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const debouncedSearchTerm = useDebounce(showId, 600);

  const fetchMovie = useCallback(async (query) => {
    if (!query) {
      setSearchResults([]);
      setOpen(false);
      return;
    }

    try {
      const data = await api.get("", { params: { q: query } });
      console.log(data);
      setSearchResults(data);
      setOpen(true);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  }, []);

  useEffect(() => {
    fetchMovie(debouncedSearchTerm);
  }, [debouncedSearchTerm, fetchMovie]);

  // useEffect(() => {
  //   // const debounceFun
  //   const fetchMovie = async () => {
  //     try {
  //       // console.log(showId, "iij", showId.length);
  //       // if (showId.length > 1) {
  //       //   setOpen(false);
  //       // }
  //       const data = await api.get("", { params: { q: showId } });
  //       console.log(data);
  //       // setMovieData(data);
  //       setSearchResults(data);
  //     } catch (error) {
  //       console.error("Error fetching movie data:", error);
  //     }
  //   };

  //   if (showId) {
  //     fetchMovie();
  //   } else {
  //     setOpen(false);
  //   }
  // }, [showId, setMovieData]);

  // if (open) return null;

  return (
    <div className={styles.searchContainer}>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search Your Movie..."
          value={showId}
          onChange={(e) => {
            setShowId(e.target.value);
            {
              setOpen(true);
            }
          }}
          className={styles.searchInput}
        />
        <svg
          className={styles.searchIcon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        {/* </div>
       {searchResults.length > 0 && (
        <div className={styles.searchResults}>
          {searchResults.map((result) => (
            <SearchResultItem key={result.show.id} show={result.show} />
          ))}
  )}
    //     </div>
    //   )}

    // )
    // ;
  );
} */}

        {searchResults.length > 0 && open && (
          <div className={styles.searchResults}>
            {searchResults.map((result) => (
              <SearchResultItem
                key={result.show.id}
                show={result.show}
                onClick={() => {
                  navigate(`films/${result.show.id}`);
                  setOpen(false);
                  setShowId("");
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// function SearchResultItem({ show, handleClick }) {
//   const navigate = useNavigate();
//   const handleClick = () => {
//     navigate(`films/${show?.id}`);
//   };

function SearchResultItem({ show, onClick }) {
  return (
    <div
      className={styles.searchResultItem}
      // onClick={handleClick}
      onClick={onClick}
    >
      <img
        src={show.image?.medium || "/placeholder.jpg"}
        alt={show.name}
        className={styles.resultImage}
      />
      <div className={styles.resultInfo}>
        <h3 className={styles.resultTitle}>{show.name}</h3>
        <p className={styles.resultDetails}>
          {show.type} • {show.premiered?.slice(0, 4) || "N/A"}
          {/* {show.type} • {show.premiered?.slice(0, 4) || "N/A"} • {show.status} */}
        </p>
      </div>
    </div>
  );
}
