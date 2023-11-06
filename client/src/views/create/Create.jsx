import { useEffect, useState } from "react";
import axios from "axios";
import "../create/create.styles.css";
import { createPokemon } from "../../redux/actions";

import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import { validation } from "./validation";

const Form = () => {
  const [errors, setErrors] = useState({});
  const [types, setTypes] = useState([]);
  const [typesActive, setTypeActive] = useState([]);
  const [dataForm, setDataForm] = useState({
    name: "",
    image: "",
    health: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    axios("http://localhost:3001/types")
      .then(({ data }) => {
        if (data) {
          setTypes(data);
        } else {
          window.alert("Error al obtener la data");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, image, health, attack, defense, speed, height, weight } =
      dataForm;

    const hasErrors = Object.values(errors).some((error) => error !== "");

    if (
      !name ||
      !image ||
      !health ||
      !attack ||
      !defense ||
      typesActive.length === 0
    ) {
      window.alert("Faltan Datos Obligatorios");
    } else if (hasErrors) {
      window.alert("hay errores");
    } else {
      dispatch(
        createPokemon({
          name,
          image,
          health,
          attack,
          defense,
          speed: speed !== "" ? speed : null,
          height: height !== "" ? height : null,
          weight: weight !== "" ? weight : null,
          types: typesActive,
        })
      );
      window.alert("pokemon creado correctamente");
      navigate(-1);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setDataForm({ ...dataForm, [name]: value });
    validation({ ...dataForm, [name]: value }, errors, setErrors);
  };

  const handleClick = (typeId) => {
    if (typesActive.length > 3) {
      if (typesActive.includes(typeId)) {
        const newArray = typesActive.filter((type) => type !== typeId);
        setTypeActive(newArray);
      }
      return;
    }
    if (typesActive.includes(typeId)) {
      const newArray = typesActive.filter((type) => type !== typeId);
      setTypeActive(newArray);
    } else {
      setTypeActive([...typesActive, typeId]);
    }
  };
  return (
    <div>
      <div className="nav">
        <Link to={"/home"}>
          <img src="../logopokemon.webp" alt="" style={{ width: "200px" }} />
        </Link>

        <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
          <h1>Home</h1>
        </Link>
      </div>
      <h1 className="titulo">Create your Pokemon!</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="campos">
          <div className="campo">
            <label>Name: </label>
            <input
              type="text"
              name="name"
              value={dataForm.name}
              onChange={handleInputChange}
            />
            <span className="errors">{errors.name}</span>
          </div>
          <div className="campo">
            <label>Image:</label>
            <input
              type="text"
              name="image"
              value={dataForm.image}
              onChange={handleInputChange}
            />
            <span className="errors">{errors.image}</span>
          </div>
          <div className="campo">
            <label>HP: </label>
            <input
              type="text"
              name="health"
              value={dataForm.health}
              onChange={handleInputChange}
            />
            <span className="errors">{errors.health}</span>
          </div>
          <div className="campo">
            <label>Attack: </label>
            <input
              type="text"
              name="attack"
              value={dataForm.attack}
              onChange={handleInputChange}
            />
            <span className="errors">{errors.attack}</span>
          </div>
          <div className="campo">
            <label>Defense: </label>
            <input
              type="text"
              name="defense"
              value={dataForm.defense}
              onChange={handleInputChange}
            />
            <span className="errors">{errors.defense}</span>
          </div>
          <div className="campo">
            <label>Speed: </label>
            <input
              type="text"
              name="speed"
              value={dataForm.speed}
              onChange={handleInputChange}
            />
            <span className="errors">{errors.speed}</span>
          </div>
          <div className="campo">
            <label>Height: </label>
            <input
              type="text"
              name="height"
              value={dataForm.height}
              onChange={handleInputChange}
            />
            <span className="errors">{errors.height}</span>
          </div>
          <div className="campo">
            <label>Weight: </label>
            <input
              type="text"
              name="weight"
              value={dataForm.weight}
              onChange={handleInputChange}
            />
            <span className="errors">{errors.weight}</span>
          </div>
        </div>

        <div className="typesContainer">
          {types?.map((type) => (
            <button
              type="button"
              key={type.id}
              className={`${typesActive.includes(
                type.id
              )} ? "active": ''"buttonTypes"`}
              onClick={() => handleClick(type.id)}
              style={{ cursor: "pointer" }}
            >
              <div className="typesDiv">
                <div className="type_item">
                  <span
                    className={"detail_type2 detail_type2_" + type.name}
                  ></span>
                </div>
              </div>
              <p className="nameType">{type.name}</p>
            </button>
          ))}
        </div>

        <button onClick={handleSubmit} className="buttonSubmit" type="submit">
          Create Pokemon!
        </button>
      </form>
      <button
        style={{
          marginTop: "1rem",
          marginBottom: "1rem",
          width: "100px",
          cursor: "pointer",
        }}
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </div>
  );
};

export default Form;
