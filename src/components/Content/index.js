import './style.css';

// function Content() {
//   return (
//     <div className = "content">
//         <p>Content</p>
//     </div>
//   );
// }

// export default Content;

import React from 'react';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';

export default function Content(props) {
 

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
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
    <div>
      {renderPage()}
    </div>
  );
}