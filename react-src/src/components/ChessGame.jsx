import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import { useState } from 'react';
import './ChessGame.css'
import axios from 'axios';
import WhiteKing from '../sprites/white-chess-king.jpg'
import BlackKing from '../sprites/black-chess-king.jpg'

async function queryFen(fen, time) {
    console.log('Querying fen:', fen, 'time:', time);

    try {
        const response = await axios.post('http://localhost:8080/query/fen', {
            Fen: fen,
            Time: time,
        });

        console.log('Response:', response.data);
        // split on space
        // first part is useless
        // second part is move
        // third part is eval

        let move = response.data.split(' ')[1];
        console.log('Move:', move);
        let engine_eval = parseFloat(response.data.split(' ')[2]);
        console.log('Engine eval:', engine_eval);

        return {
            from: move.slice(0, 2),
            to: move.slice(2, 4),
        };
    } catch (error) {
        console.error('Error:', error.message);
    }
}

export default function ChessGame() {
    const [game, setGame] = useState(new Chess());

    function makeMove(move) {
        const gameCopy = new Chess(game.fen());
        const result = gameCopy.move(move);

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

    if (game.turn() === 'b') {
        queryFen(game.fen(), 1000).then((move) => {
            makeMove(move);
        });
    }

    return (
        <div className='chess-game-wrapper'>
            <div className='chess-game-header'>
                <div className='chess-game-player'>
                    <img src={WhiteKing} alt="White king" className='chess-profile-pic' />
                    <div className='inner-chess-game-player'>
                        <h2 className='chess-game-player-username'>You (white)</h2>
                    </div>
                </div>
                <div className='chess-game-player'>
                    <div className='inner-chess-game-player'>
                        <h2 className='chess-game-player-username'>My AI (black)</h2>
                    </div>
                    <img src={BlackKing} alt="Black king" className='chess-profile-pic' />
                </div>
            </div>
            <div className='inner-chess-game-wrapper'>
                <Chessboard id='chessboard' position={game.fen()} onPieceDrop={onDrop} />
            </div>
        </div>
    );
}
