import Piece from './piece';
import Square from '../square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    // Rook can move any number of spaces horizontally or vertically. 
    // (1,2) = 1st row, 2nd column (starting from 0 to 7)

    // Cannot move through friendly pieces
    // check if there's a piece between current position and desired position. 
    // Cannot move through opposing pieces
    // check if there's a piece between current position and desired position. 


    getAvailableMoves(board) {
        let location = board.findPiece(this)
        const moves = []
        for (let i = 0; i <= 7; i++) {
            // while getPiece === undefined push the move
            //while(board.getPiece(Square.at ====== unfinished
        if (location.col !==i) moves.push(Square.at(location.row, i))
            }  
        for (let i = 0; i <= 7; i++) {
        if (location.row !==i) moves.push(Square.at(i, location.col)) 
        }
        return moves
    }
}
