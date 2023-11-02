import { useState } from "react";
import "../navbar/navbar.styles.css";

function Navbar({ onSearch }) {
  const [name, setName] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    const inputName = document.getElementById("inputName");
    onSearch(inputName.value);
    setName(inputName.value);
    inputName.value = "";
  };
  return (
    <div className="search-box">
      <input
        onKeyDown={handleKeyPress}
        placeholder="Buscar"
        id="inputName"
        type="search"
      />
      <button type="submit" onClick={handleSearch}>
        Buscar
      </button>
    </div>
  );
}

export default Navbar;
