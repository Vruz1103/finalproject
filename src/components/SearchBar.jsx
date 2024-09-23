import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
// import { setSearchQuery } from './searchSlice';

import { setSearchQuery } from '../redux/searchSlice';

const { Search } = Input;

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (value) => {
    dispatch(setSearchQuery(value));
    
  };

  return (
    <Search
      
      placeholder="Search your movie..."
      onSearch={handleSearch}
      style={{ width: 300, marginRight: '20px' }}
      enterButton={<SearchOutlined />}
    />
  );
};

export default SearchBar;



// import React from "react";
// import {Input} from 'antd'

// return(
//   <Search/>

// )