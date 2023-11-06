import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./views/home/Home";
import Create from "./views/create/Create";
import Details from "./views/detail/Details";
import Landing from "./views/landing/Landing";
import axios from "axios";
axios.defaults.baseURL = "https://pokemonbackend.up.railway.app/";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Details />} />
        <Route path="/create" element={<Create />} />
        <Route path="/" element={<Landing />}></Route>
      </Routes>
    </>
  );
}

export default App;
