import "./App.css";
import { useState } from "react";

function App() {
  const [board, setBoard] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [player, setPlayer] = useState(1); 
  const [turnMessage, setTurnMessage] = useState("Player X's turn");

  function checkWinner() {
    for (let i = 0; i < 3; i++) {
      if (
        (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== 0) ||
        (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== 0)
      ) {
        return board[i][i];
      }
    }

    
    if (
      (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== 0) ||
      (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== 0)
    ) {
      return board[1][1]; 
    }

    return null; 
  }



  function resetGame() {
    setBoard([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
    setPlayer(1); 
    setTurnMessage("Player X's turn");
  }

  

  return (
    <div className="game">
      <h1>2-Player Tic Tac Toe</h1>
      <h2>{turnMessage}</h2>
      <div id="bigbox">
        {[0, 1, 2].map((row) => (
          <div key={row} className="row">
            {[0, 1, 2].map((col) => renderCell(row, col))}
          </div>
        ))}
      </div>
      <button id="reset" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
}

export default App;
