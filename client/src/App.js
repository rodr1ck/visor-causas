import "./App.css";
import React, { useEffect, useState } from "react";
import getAllCases from "./actions/getAllCases";
import getAllIllnesses from "./actions/getAllIllnesses";
import Main from "./views/Main";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [allCasesArr, setAllCasesArr] = useState([]);
  const [illnessesArr, setIllnessesArr] = useState([]);

  useEffect(() => {
    getAllCases()
      .then(({ success, data }) => {
        if (success) {
          setAllCasesArr(data);
        } else console.log("Sucedio un error");
      })
      .catch((e) => console.log(e));

    getAllIllnesses()
      .then(({ success, data }) => {
        if (success) {
          const newData = data.map((x) => {
            return { illness: x, heart: false };
          });
          setIllnessesArr(newData);
          setIsLoading(false);
        } else console.log("Sucedio un error");
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        "Loading..."
      ) : (
        <Main
          allCasesArr={allCasesArr}
          illnessesArr={illnessesArr}
          setIllnessesArr={setIllnessesArr}
        />
      )}
    </div>
  );
}

export default App;
