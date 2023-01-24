import Piece from './piece';
import Square from '../square';
import Player from '../player';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        const moves = []
        function kingMoves(row, col) {
            if (board.getPiece(Square.at(row, col)) === undefined) {
                moves.push(Square.at(row, col))
            }
            else if (board.getPiece(Square.at(row, col)).player === Player.BLACK) {
                moves.push(Square.at(row, col))
            }
        };
        kingMoves(location.row + 1, location.col - 1);
        kingMoves(location.row + 1, location.col);
        kingMoves(location.row + 1, location.col + 1);
        kingMoves(location.row, location.col + 1);
        kingMoves(location.row - 1, location.col + 1);
        kingMoves(location.row - 1, location.col);
        kingMoves(location.row - 1, location.col - 1);
        kingMoves(location.row, location.col - 1);

        return moves
    }
}