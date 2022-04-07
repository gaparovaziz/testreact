import "./nav.css";

function Nav() {
  return (
    <nav className="Nav">
    <head><link href="https://fonts.googleapis.com/css2?family=Rubik+Bubbles&family=Rubik+Puddles&display=swap" rel="stylesheet"/></head>
      <h1 className="nameShop">ShoP tyPe</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Products</a></li>
        <li><a href="/">Contacts</a></li>
      </ul>
    </nav>
  );
}

export default Nav;