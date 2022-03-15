import { Link } from "react-router-dom";
// make h1 link to home page with Link and "/"
function Header() {
  return (
    <header>
      {/* wrap h1 in Router link which naviages back to the homepage */}
      <Link to="/">
        <h1>Hackflix</h1>
      </Link>
    </header>
  );
}

export default Header;
