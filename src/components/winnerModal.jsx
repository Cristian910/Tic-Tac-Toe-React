import { Square } from "./square.jsx"
export function WinnerModal({winner,reset}) {
if (winner === null) return null

const winnerText = winner === false ?"Empate": "Ganador:"
    return (
      <section className="modal-winner">
        <div className='modal-text'>
        <h2 className='title-modal'>{winnerText}</h2>
        {winner && <Square>{winner}</Square>}
        <footer>
          <button  onClick={reset} className='btn-again'>empezar de nuevo</button>
        </footer>
        </div>
      </section>
    )
}
