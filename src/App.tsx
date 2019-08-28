import React, { useState } from 'react';
import './App.css';
export function fieldGen() {
  let grid: string[][] = []
  for (let i = 0; i < 3; i++) {
    let temparr: string[] = []
    for (let j = 0; j < 3; j++) {
      temparr.push("")
    }
    grid.push(temparr)
  }
  return grid
}
export function checkWin(field: string[][]) {
  //horizontal
    if(field[0][0]!==""&&field[0][0]===field[0][1]&&field[0][0]===field[0][2]){return true}
    if(field[1][0]!==""&&field[1][0]===field[1][1]&&field[1][0]===field[1][2]){return true}
    if(field[2][0]!==""&&field[2][0]===field[2][1]&&field[2][0]===field[2][2]){return true}
  //vertical
  if(field[0][0]!==""&&field[0][0]===field[1][0]&&field[0][0]===field[2][0]){return true}
  if(field[0][1]!==""&&field[0][1]===field[1][1]&&field[0][1]===field[2][1]){return true}
  if(field[0][2]!==""&&field[0][2]===field[1][2]&&field[0][2]===field[2][2]){return true}
  //diagonal
  if(field[1][1]!==""&&field[0][0]===field[1][1]&&field[0][0]===field[2][2]){return true}
  if(field[1][1]!==""&&field[0][2]===field[1][1]&&field[0][2]===field[2][0]){return true}
  return false
}
let activePlayer = "X"
export const App: React.FC = () => {
  const [field, setField] = useState(fieldGen())
  function resetGame(){
    setField(fieldGen())
    activePlayer="X"
  }
  function clickHandler(rowIndex: number, cellIndex: number) {
    if(!checkWin(field)){
      if (!field[rowIndex][cellIndex]) {
        field[rowIndex][cellIndex] = activePlayer;
        setField([...field])
        if(!checkWin(field)){
          if (activePlayer === "X") {
            activePlayer = "O"
          } else {
            activePlayer = "X"
          }
        }
        console.log(field)
      }
      console.log(checkWin(field))
    }
  }
  return (
    <div className="App">
      Active player {activePlayer}
      <table className="pepe">
        {field.map((row: any, rowIndex: number) => <tr>
          {row.map((_cell: any, cellIndex: number) => <td onClick={() => clickHandler(rowIndex, cellIndex)}>
            {field[rowIndex][cellIndex]}
          </td>)}
        </tr>)}
      </table>
      {checkWin(field)?<h1>Winner {activePlayer}</h1>:""}
      {checkWin(field)?<button onClick={() => resetGame()}>Reset</button>:""}
    </div>
  );
}

export default App;
