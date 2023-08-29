import { winner_comb } from "../components/const.js"

export const checkWinner = (boardToCheck) => {
    for (const combo of winner_comb) {
      const [a,b,c] = combo
      if(boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
        return boardToCheck[a]
      }
    }
    return null
  }