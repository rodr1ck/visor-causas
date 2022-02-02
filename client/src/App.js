import guardarDeathCase from "./actions/guardarDeathcase";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import arrDd from "./db/dbjson";

const tabDeDatabase = [
  { etiqueta: "Enfermedad", contenido: "contenido1" },
  { etiqueta: "Favoritos", contenido: "contenido2" },
];

function App() {
  console.log("arrDb: ", arrDd.arrDd.slice(0, 3));

  const arrInsert = arrDd.arrDd.slice(0, 3);

  const onSubmit = async (e) => {
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

    /*
    const { success, data } = await guardarDeathCase({
        year: firstNameValue,
        month: lastNameValue,
        cases: emailValue,
        illness: addressValue
    })
    console.log(success, data)*/

  }

  return (
    <div className="App">
      <form className="new-form" onSubmit={onSubmit}>
        <button type="button">Cancel</button>
        <button type="submit">Submit</button>
      </form>
      <Header />
      <div className="body-organizer">
        <Tabs tabs={tabDeDatabase} />
        <Body />
      </div>
    </div>
  );
}

export default App;
