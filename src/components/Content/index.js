import React from 'react';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import './style.css';

export default function Content(props) {
 
  const renderPage = () => {
    if (props.currentPage === 'About') {
      return <About />;
    }
    if (props.currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  };

  return (
    <div className = "content">
      {renderPage()}
    </div>
  );
}