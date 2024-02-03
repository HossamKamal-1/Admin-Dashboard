import { Link } from 'react-router-dom';
import './Header.scss';
function Header() {
  return (
    <header>
      <Link className="home-link" to="/">
        <img src="/logo.svg" alt="logo" />
        <span>SpotAdmin</span>
      </Link>
      <div className="icons">
        <img src="/search.svg" alt="search icon" className="icon" />
        <img src="/app.svg" alt="app icon" className="icon" />
        <img src="/expand.svg" alt="expand icon" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="notification" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="/noavatar.png" alt="avatar" />
          <span>Jane</span>
        </div>
        <img src="/settings.svg" alt="settings icon" className="icon" />
      </div>
    </header>
  );
}
export default Header;
