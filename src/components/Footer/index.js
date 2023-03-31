import React from 'react';
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import stackoverflow from '../../assets/stackoverflow.png'

function Footer() {
  return (
    <footer>
      <a href="https://github.com/hbarry89" target="_blank" rel="noreferrer"><img src={github} alt="GitHub Logo"></img></a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><img src={linkedin} alt="GitHub Logo"></img></a>
      <a href="https://stackoverflow.com/" target="_blank" rel="noreferrer"><img src={stackoverflow} alt="GitHub Logo"></img></a>
    </footer>
  );
}

export default Footer;