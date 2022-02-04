import guardarDeathCase from "./actions/guardarDeathcase";
import "./App.css";
import React, { useEffect, useState } from "react";

import Tabs from "./components/Tabs";
import arrDd from "./db/dbjson";
import getAllCases from "./actions/getAllCases";
import getAllIllnesses from "./actions/getAllIllnesses";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Main from "./views/Main";

//tabDeDatabase[0].contenido = <p style={{color: 'red'}}>contenido11</p>;

function App() {
  //console.log("arrDb: ", arrDd.arrDd.slice(0, 3));
  const [isLoading, setIsLoading] = useState(true);
  const [allCasesArr, setAllCasesArr] = useState([]);

  const [illnessesArr, setIllnessesArr] = useState([]);
  //const arrInsert = arrDd.arrDd.slice(0, 3);
  const arrInsert = arrDd.arrDd;

  let [arrEfermedades, setArrEfermedades] = useState([]);

  const tabDeDatabase = [
    {
      etiqueta: "Enfermedad",
      contenido: <p style={{ color: "red" }}>contenido1</p>,
    },
    { etiqueta: "Favoritos", contenido: "contenido2" },
  ];

  /*   const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.target.closest('form')
    
  const arrEle =  await arrInsert.map( async (x) => {
    console.log("x: ", x );
    console.log("año: ", x.year );
    console.log("mes: ", x.month );
    console.log("cases: ", x.cases );
    console.log("illness: ", x.illness );

    const { success, data } = await guardarDeathCase({
      year: x.year,
      month: x.month,
      cases: x.cases,
      illness: x.illness
  })
  console.log(success, data)

  } )
  } */

  useEffect(() => {
    getAllCases()
      .then(({ success, data }) => {
        if (success) {
          console.log("data: ", data);
          setAllCasesArr(data);
         
        } else console.log("Sucedio un error");
      })
      .catch((e) => console.log(e));

    getAllIllnesses()
      .then(({ success, data }) => {
        if (success) {
          console.log("dataIllnesses: ", data);
          //setIsLoading(false);

          const newData = data.map(x => {
            return {illness : x, heart: false}
          })

          setIllnessesArr(newData);
          setIsLoading(false);
          /*           const element = data.map((x, key) => (
            <tr key={key} style={{fontSize: '1rem'}}>
              <td>{x}</td>
              <td>
              <button className="btn" onClick={(e) => onClick(e,x)}>{heart}</button>
              </td>
            </tr>
          ));

          tabDeDatabase[0].contenido =<table>
            {element}
          </table>; */
        } else console.log("Sucedio un error");
      })
      .catch((e) => console.log(e));
  }, []);

  console.log("arrEfermedades: ", arrEfermedades);
  return (
    <div className="App">
      {/*       <form className="new-form" onSubmit={onSubmit}>
        <button type="button">Cancel</button>
        <button type="submit">Submit</button>
      </form> */}
      {isLoading ? (
        "Loading..."
      ) : (
        <Main allCasesArr={allCasesArr} illnessesArr={illnessesArr} setIllnessesArr = {setIllnessesArr}/>
      )}
      {/*       <div className="body-organizer">
        <Tabs tabs={tabDeDatabase} arrayEnfermedades={arrayEnfermedades}/>
        <Body />
      </div> */}
    </div>
  );
}

export default App;
