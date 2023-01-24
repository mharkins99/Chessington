import Piece from './piece';
import Square from '../square';
import Player from '../player';
import King from './king';


export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        const moves = []
        function knightMoves(row, col) {
            if (board.getPiece(Square.at(row, col)) === undefined) {
                moves.push(Square.at(row, col))
            }
            else if (board.getPiece(Square.at(row, col)).player === Player.BLACK) {
                moves.push(Square.at(row, col))
            }
        };
        knightMoves(location.row + 1, location.col - 2);
        knightMoves(location.row + 1, location.col + 2);
        knightMoves(location.row - 1, location.col + 2);
        knightMoves(location.row - 1, location.col - 2);
        knightMoves(location.row + 2, location.col + 1);
        knightMoves(location.row + 2, location.col - 1);
        knightMoves(location.row - 2, location.col + 1);
        knightMoves(location.row - 2, location.col - 1);

        return moves
    }
}