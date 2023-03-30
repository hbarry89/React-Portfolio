import logo from './logo.svg';
import './style.css';

function Header() {
  return (
    <div className = "header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello!</p>
    </div>
  );
}

export default Header;