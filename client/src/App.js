import guardarDeathCase from "./actions/guardarDeathcase";
import "./App.css";
import React, { useEffect, useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import arrDd from "./db/dbjson";
import getAllCases from "./actions/getAllCases";
import getAllIllnesses from "./actions/getAllIllnesses";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee} from '@fortawesome/free-solid-svg-icons'
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const tabDeDatabase = [
  {
    etiqueta: "Enfermedad",
    contenido: <p style={{ color: "red" }}>contenido1</p>,
  },
  { etiqueta: "Favoritos", contenido: "contenido2" },
];

//tabDeDatabase[0].contenido = <p style={{color: 'red'}}>contenido11</p>;

function App() {
  console.log("arrDb: ", arrDd.arrDd.slice(0, 3));
  const [isLoading, setIsLoading] = useState(true);
  const [illnessesArr, setIllnessesArr] = useState();
  //const arrInsert = arrDd.arrDd.slice(0, 3);
  const arrInsert = arrDd.arrDd;
  const [heart, setHeart] = useState(<FaRegHeart />);
  let [arrEfermedades,setArrEfermedades] = useState([]);

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

  const onClick = (e,x) => {
    e.preventDefault();
    setHeart(<FaRegHeart />);
    console.log("has presionado el boton", x);
    //arrEfermedades.push(x);
    console.log("arrEfermedades: ", arrEfermedades);

    let newStateData = [...arrEfermedades, x ]

    // update the state
    setArrEfermedades(newStateData);

  }

  useEffect(() => {
    getAllCases()
      .then(({ success, data }) => {
        if (success) {
          console.log("data: ", data);
          setIsLoading(false);
        } else console.log("Sucedio un error");
      })
      .catch((e) => console.log(e));

    getAllIllnesses()
      .then(({ success, data }) => {
        if (success) {
          console.log("dataIllnesses: ", data);
          //setIsLoading(false);
          setIllnessesArr(data);

          const element = data.map((x, key) => (
            <tr key={key} style={{fontSize: '1rem'}}>
              <td>{x}</td>
              <td>
              <button className="btn" onClick={(e) => onClick(e,x)}>{heart}</button>
              </td>
            </tr>
          ));

          tabDeDatabase[0].contenido =<table>
{/*             <tr>
              <th>illness</th>
              <th>corazon</th>
            </tr> */}
            {element}
          </table>;
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
      <Header />
      <div className="body-organizer">
        <Tabs tabs={tabDeDatabase} />
        <Body />
      </div>
    </div>
  );
}

export default App;
