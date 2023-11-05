import "../landing/landing.styles.css";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landing">
      <img className="image" src="../logopokemon.webp" />
      <Link className="homeButton" to="/home">
        <img src="../pokeball.webp" className="imagePokeball" alt="" />
        <h1 style={{ color: "black", size: "3rem" }}>Atrapalos Ya!</h1>
        <img src="../pokeball.webp" className="imagePokeball" alt="" />
      </Link>
    </div>
  );
}

export default Landing;
