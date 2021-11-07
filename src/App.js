import { useState, useEffect } from "react";
import generateRandomArr from "./utils/randomArrayGenerator";
import mergeSort from "./utils/mergedSort";
import Bar from "./Bar";
import "./styles/App.css";

const ARRAY_SIZE = 50;

function App() {
  let [array, setArray] = useState([]);

  const generateNewArray = () => {
    setArray(generateRandomArr(5, 650, ARRAY_SIZE));
  };

  const mergedSortArray = async () => {
    console.log("This is the initial array");
    console.log(JSON.parse(JSON.stringify(array)));
    let tempArr = await mergeSort([...array], setArray, [...array]);
    setArray(tempArr);
  };

  useEffect(() => {
    setArray(generateRandomArr(5, 650, ARRAY_SIZE));
  }, []);

  return (
    <div className="App">
      <button onClick={generateNewArray}>Generate New Array</button>
      <button onClick={mergedSortArray}>Merge Sort</button>

      <div className="containter">
        <ul>
          {array.map((element) => {
            return (
              <li key={element.id}>
                <Bar
                  props={{
                    element,
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
