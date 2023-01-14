import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import { useState } from 'react';
import './ChessGame.css'
import axios from 'axios';

export default function ChessGame() {
  const [game, setGame] = useState(new Chess());

  function makeMove(move) {
    const gameCopy = new Chess(game.fen());
    const result = gameCopy.move(move);

    if (result) {
      // programatically get engine move from server
    }

    setGame(gameCopy);
    return result;
  }

  function onDrop(sourceSquare, targetSquare) {
    if (game.turn() !== 'w') return false; // not your turn

    const move = makeMove({
      from: sourceSquare,
      to: targetSquare,
    });

    if (move === null) return false; // illegal move

    return true;
  }

  return (
    <div className='chess-game-wrapper'>
      <div className='inner-chess-game-wrapper'>
        <Chessboard id='chessboard' position={game.fen()} onPieceDrop={onDrop}  />
      </div>
    </div>
  );
}