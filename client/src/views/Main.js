import React, { useState } from "react";
import Header from "../components/Header";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Body from "../components/Body";
import Tabs from "../components/Tabs";
import TextField from "@mui/material/TextField";

const Main = (props) => {
  const [enfermedadSeleccionada, setEnfermedadSeleccionada] =
    useState("All Cause");

  const [newArrayIllnesses, setNewArrayIllnesses] = useState(
    props.illnessesArr
  );

  const tabDeDatabase = [
    {
      etiqueta: "Enfermedad",
      contenido: <p style={{ color: "red" }}>contenido1</p>,
    },
    { etiqueta: "Favoritos", contenido: "contenido2" },
  ];

  const element = newArrayIllnesses.map((x, key) => (
    <tr key={key} style={{ fontSize: "1rem" }}>
      <td>{x.illness}</td>
      <td>
        <button className="btn" onClick={(e) => onClick(e, x.illness)}>
          {x.heart ? <FaHeart /> : <FaRegHeart />}
        </button>
      </td>
    </tr>
  ));

  tabDeDatabase[0].contenido = (
    <table>
      <tr style={{ display: "flex", justifyContent: "center" }}>
        <TextField
          id="filled-basic"
          label="Buscador"
          variant="filled"
          onChange={(e) => onChangeBuscador(e)}
        />
      </tr>
      {element}
    </table>
  );

  const favoriteElement = newArrayIllnesses
    .map((x, key) =>
      x.heart ? (
        <tr
          key={key}
          style={{ fontSize: "1rem", cursor: "pointer" }}
          onClick={(e) => onClickFavorite(e, x.illness)}
        >
          <td style={{ padding: "3px 20px" }}>{x.illness}</td>
          <td style={{ padding: "3px 20px" }}>
            {x.heart ? <FaHeart /> : <FaRegHeart />}
          </td>
        </tr>
      ) : (
        ""
      )
    )
    .filter((x) => x != undefined);

  tabDeDatabase[1].contenido = <table>{favoriteElement}</table>;

  const onChangeBuscador = (e) => {
    e.preventDefault();
    const newArrIll = props.illnessesArr.filter((x) =>
      x.illness.includes(e.target.value)
    );
    setNewArrayIllnesses(newArrIll);
  };

  const onClick = (e, x) => {
    e.preventDefault();
    const newArr = newArrayIllnesses.map((obj) => {
      if (obj.illness == x && obj.heart == false) {
        return { illness: x, heart: true };
      }

      if (obj.illness == x && obj.heart == true) {
        return { illness: x, heart: false };
      }

      return obj;
    });
    setNewArrayIllnesses(newArr);
  };

  const onClickFavorite = (e, x) => {
    e.preventDefault();
    setEnfermedadSeleccionada(x);
  };

  return (
    <div>
      <Header />
      <div className="body-organizer">
        <Tabs tabs={tabDeDatabase} arrayEnfermedades={newArrayIllnesses} />
        <Body
          allData={props.allCasesArr}
          illnessSelected={enfermedadSeleccionada}
        />
      </div>
    </div>
  );
};

export default Main;
