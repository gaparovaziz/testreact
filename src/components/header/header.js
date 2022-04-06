import "./header.css";
// import headerImage from "../../assets/back.png";

function Header() {
  const style = {
    // backgroundImage: `url(${headerImage})`
  };

  return (
    <header className="Header" style={style}>
      <h1>Laptops </h1>
      <p>This is an internet shop</p>
    </header>
  );
}

export default Header;