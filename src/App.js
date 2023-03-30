import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {
  const [currentPage, setCurrentPage] = useState('About');
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="App">
      <Header currentPage = {currentPage} handlePageChange = {handlePageChange} />
      <Content currentPage = {currentPage} />
      <Footer />
    </div>
  );
}

export default App;
