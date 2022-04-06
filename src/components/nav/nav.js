import "./nav.css";
import NavImage from "../../assets/laptop.png";

function Nav() {
  return (
    <nav className="Nav">
      <div> </div>
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