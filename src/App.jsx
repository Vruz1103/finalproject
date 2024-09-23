import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import './App.css'
import Search from "./components/Search";
import MovieList from "./components/MovieList";
import Navigation from "./components/Navigation";
import MovieItem from "./components/MovieItem";
import MovieLogo from "./components/MovieLogo";
import MovieAppHeader from "./components/MovieAppHeader";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import TopMovie from "./components/TopMovie";
import Home from "./components/Home";
import Featured from "./components/Featured";
import Genres from "./components/Genres";
import TvShows from "./components/TvShows";
import Movies from "./components/Movies";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import styles from "./css/innercontainer.module.css";

function App() {
  // const [count, setCount] = useState(0)
  // const [movieData,setMovieData]=useState([])

  return (
    <div className="App">
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/genres" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvshows" element={<TvShows />} />
      </Routes>
      {/* <Container>
      
      <MovieAppHeader movieData={movieData} setMovieData={setMovieData}/>
     
      <InnerContainer >
       <MovieList/>

      
       <TopMovie/>

   
      </InnerContainer> */}
      {/* {movieData && <MovieList movieData={movieData}/>} */}
      {/* </Container> */}

      {/* <MovieLogo/> */}
      {/* <Navigation/> */}
      {/* <Search movieData={movieData} setMovieData={setMovieData} /> */}
      {/* <Navigation/> */}
    </div>
  );
}

export default App;

// src/App.js
// import React from 'react';
// import { Layout, Menu } from 'antd';
// import { HomeOutlined, SearchOutlined } from '@ant-design/icons';
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import Home from './components/Home';
// import Search from './components/Search';

// const { Header, Content, Footer } = Layout;

// function App() {
//   return (
//     <Router>
//       <Layout className="layout" style={{ minHeight: '100vh' }}>
//         <Header>
//           <div className="logo" />
//           <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
//             <Menu.Item key="1" icon={<HomeOutlined />}>
//               <Link to="/">Home</Link>
//             </Menu.Item>
//             <Menu.Item key="2" icon={<SearchOutlined />}>
//               <Link to="/search">Search</Link>
//             </Menu.Item>
//           </Menu>
//         </Header>
//         <Content style={{ padding: '0 50px' }}>
//           <div className="site-layout-content" style={{ margin: '16px 0' }}>
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/search" element={<Search />} />
//             </Routes>
//           </div>
//         </Content>
//         <Footer style={{ textAlign: 'center' }}>Movie App ©2023 Created by You</Footer>
//       </Layout>
//     </Router>
//   );
// }

// export default App;

// src/App.jsx
// import React from 'react';
// import { Layout } from 'antd';
// import { Routes, Route } from 'react-router-dom';
// import MovieAppHeader from './components/MovieAppHeader';
// import Home from './components/Home';
// import Featured from './components/Featured';
// import Genres from './components/Genres';
// import Movies from './components/Movies';
// import TVShow from './components/TvShows';

// const { Content } = Layout;

// const App = () => {
//   return (
//     <Layout>
//       <MovieAppHeader />
//       <Content style={{ padding: '0 50px', marginTop: 64 }}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/featured" element={<Featured />} />
//           <Route path="/genres" element={<Genres />} />
//           <Route path="/movies" element={<Movies />} />
//           <Route path="/tvshow" element={<TVShow />} />
//         </Routes>
//       </Content>
//     </Layout>
//   );
// };

// export default App;
