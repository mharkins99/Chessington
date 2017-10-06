import Piece from './piece';
import Square from '../square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    // Rook can move any number of spaces horizontally or vertically. 
    // (1,2) = 1st row, 2nd column (starting from 0 to 7)

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        const moves = []
        for (let i = 0; i <= 7; i++) {
        if (location.col !==i) moves.push(Square.at(location.row, i))
            }   
        for (let i = 0; i <= 7; i++) {
        if (location.row !==i) moves.push(Square.at(i, location.col)) 
        }
        return moves
    }
}
