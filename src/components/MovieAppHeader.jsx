// import React from 'react';
// // import { Layout, Menu } from 'antd';
// // import { Link } from 'react-router-dom';
// // import SearchBar from './SearchBar';
// // import { FeaturedNav, GenresNav, MoviesNav, TVShowNav } from './Navigation';

import { useState } from "react";
import MovieLogo from "./MovieLogo";
import Navigation from "./Navigation";
import Search from "./Search";

// // const { Header } = Layout;

// const MovieAppHeader = () => {
//   return (
//     <Header style={{ display: 'flex', alignItems: 'center', padding: '0 20px', background: '#1e2129' }}>
//       <div className="logo" style={{ marginRight: '20px' }}>
//         <Link to="/">
//           <img src="/path-to-your-logo.png" alt="Moviesjoy" style={{ height: '30px' }} />
//         </Link>
//       </div>
//       <SearchBar />
//       <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']} style={{ flex: 1, justifyContent: 'flex-end', background: 'transparent' }}>
//         {/* <HomeNav /> */}
//         <FeaturedNav />
//         <GenresNav />
//         <MoviesNav />
//         <TVShowNav />
//       </Menu>
//     </Header>
//   );
// };

// export default MovieAppHeader;
import styles from "../css/movieappheader.module.css"

export default function MovieAppHeader(){
  const [movieData,setMovieData]=useState([])
  return(<div className={styles.header}>
    <MovieLogo/>
    {/* <Search /> */}
    <Search movieData={movieData} setMovieData={setMovieData} />
    <Navigation/>
  </div>)
}