import logo from './logo.svg';
import './style.css';

function Header() {
  return (
    <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Huda Barry</h1>
        <ul>
          <li>About Me</li>
          <li>Portfolio</li>
          <li>Contact</li>
          <li>Resume</li>
        </ul>
    </header>
  );
}

export default Header;