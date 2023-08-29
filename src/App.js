import './App.css';
import { useState } from 'react'
import confetti from "canvas-confetti"
import {Square} from "./components/square.jsx"
import {Turns} from "./components/const.js"
import {checkWinner} from "./logic/board.js"
import {WinnerModal} from "./components/winnerModal.jsx"

function App() {
  //estados del tablero,turnos y ganador
  const [board,setBoard] = useState(Array(9).fill(null))
  const [turn,setTurn] = useState(Turns.x)
  const [winner,setwinner] = useState(null)
//reset
  const reset = () => {
    setBoard(Array(9).fill(null))
    setTurn(Turns.x)
    setwinner(null)
  }
//revisar si se finalizo el juego
const checkEnd = (newBoard) => { return newBoard.every(square => square !== null)}

//actualiza tablero,marca y pasa de turno
  const updateBoard =  (index) => {
    if(board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === Turns.x ?Turns.o :Turns.x
    setTurn(newTurn)
    const newWinner = checkWinner(newBoard)
    if(newWinner){
      confetti()
      setwinner(newWinner)
    }else if(checkEnd(newBoard)){
      setwinner(false)
    }
  }
  //renderiza el juego
  return (
    <div className="App">
      <h1 className='title'>Tic Tac Toe</h1>
      <button  onClick={reset} className='btn-again'>empezar de nuevo</button>
      <article className="game">
        {board.map((square,index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>{square}</Square>
          )

        })}
      </article>
      <section className='turn'>
      <Square isSelected={turn === Turns.x}>{Turns.x}</Square>
      <Square isSelected={turn === Turns.o}>{Turns.o}</Square>
      </section>

      <WinnerModal reset={reset} winner={winner}></WinnerModal>
</div>
  );
}

export default App;
