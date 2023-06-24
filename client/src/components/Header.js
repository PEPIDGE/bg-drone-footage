import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header>
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/">Главна страница</Link>
          </li>
          <li>
            <Link to="/properties">Снимки и видеа на имоти</Link>
          </li>
          <li>
            <Link to="/videos">Снимки и видеа на природа</Link>
          </li>
          <li>
            <Link to="/contacts">Контакти</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
