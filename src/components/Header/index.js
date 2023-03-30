import React from 'react';
import Navigation from '../Navigation';
import './style.css';

function Header({currentPage, handlePageChange}) {
  return (
    <header>
        <h1>Huda Barry</h1>
        <Navigation currentPage = {currentPage} handlePageChange = {handlePageChange}/>
    </header>
  );
}

export default Header;