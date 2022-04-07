import "./header.css";
import headerImage from "../../assets/back.png";

function Header() {
  const style = {
    backgroundImage: `url(${headerImage})`
  };

  return (
    <header className="Header" style={style}>
      <head><link href="https://fonts.googleapis.com/css2?family=Rubik+Bubbles&family=Rubik+Puddles&display=swap" rel="stylesheet"/></head>
      <h1 className="theMainText">Laptops </h1>
      <p>This is an internet shop</p>
    </header>
  );
}

export default Header;