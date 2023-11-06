import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { filterOrigin, filterTypes } from "../../redux/actions";
import "../../components/filters/filters.styles.css";

const Filters = () => {
  const dispatch = useDispatch();
  const [types, setTypes] = useState([]);

  useEffect(() => {
    axios
      .get("/types")
      .then(({ data }) => {
        if (data) {
          setTypes(data);
        } else {
          console.log("error");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handlerFilterOrigin = (e) => {
    dispatch(filterOrigin(e.target.value));
  };

  const handlerFilterType = (e) => {
    dispatch(filterTypes(e.target.value));
  };

  return (
    <div className="contenedor-filter">
      <div className="filter-type">
        <h2>Filters</h2>
        <select onChange={handlerFilterType}>
          <option value="" disabled>
            --Select
          </option>
          <option value="ALL"> All </option>
          {types.map((type) => (
            <option key={type.id} value={type.name}>
              {type.name}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-origin">
        <h2>Filter Origin</h2>
        <select onChange={handlerFilterOrigin}>
          <option value="" disabled>
            -- Select
          </option>
          <option value="ALL"> All</option>
          <option value="API"> Api</option>
          <option value="DB">DataBase</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
