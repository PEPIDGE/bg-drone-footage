import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header>
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/videos">Featured Videos</Link>
          </li>
          <li>
            <Link to="/properties">Real Estate Properties</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
