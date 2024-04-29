// import "bootstrap/dist/css/bootstrap.css";
import { CheckerBoard } from "./component/checkerboard.jsx";
import { nqueen } from "./utilities/nqueen.jsx";
import { useState } from "react";
import "./App.css"

function App() {
  const [count, setCount] = useState(2);
  const [result, setResult] = useState("");
  const [queenPos, setQueenPos] = useState([]);
let  ajay=1
  const placeQueens = async (setQueenPos, count, setResult) => {
    setResult("");
    const queenPos = [];
    const solution = await nqueen(count, queenPos, 0, setQueenPos);
    if (solution.solved) {
      setResult("Solved! All queens are placed in non attacking positions!");
    } else {
      setResult("Cannot find safe positions for all the queens!");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        
      <div className="col-md-4 subbox-1" style={{ padding: "3vh" }}>
          <div className="row">
            <div className="col-md-12">
              <label style={{ color: "white" }}>Chess Board Size:  </label>
              <input
                type="number"
                min="2"
                max="16"
                value={count}
                onChange={(v) => {
                  console.log(v.target.value);
                  setCount(()=> v.target.value);
                }}
              />
              <button
                onClick={() => placeQueens(setQueenPos, count+1, setResult)}
              >
                Place Queens
              </button>
            </div>
          </div>
        </div>



        <div className="col-md-8 subbox-2" style={{ padding: "3vh" }}>
          <div className="matrix">
          <div className="row">
            <div className="col-md-12">
              <CheckerBoard size={count} queenPositions={queenPos} />
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12"
              style={{ color: "#eee", padding: "4vh" }}
            >
              {result}
            </div>
          </div>
          </div>
        </div>

      </div>
    </div>
  );
}
export default App;
