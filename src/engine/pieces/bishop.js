import Piece from './piece';
import Square from '../square';
import Player from '../player';
import King from './king';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        const moves = []
        let rowCountRight = location.row + 1;
        let rowCountLeft = location.row - 1;
        for (let i = location.col + 1; i <= 7; i++) {
            if (board.getPiece(Square.at(rowCountRight, i)) === undefined) {
                    moves.push(Square.at(rowCountRight, i))
                    rowCountRight++
                    if (rowCountRight === 8) { break }
            
            }
            else if (board.getPiece(Square.at(rowCountRight, i)) instanceof King === true) { break }
            else if (board.getPiece(Square.at(rowCountRight, i)).player === Player.BLACK) {
                moves.push(Square.at(rowCountRight, i))
                break
            } else {
                break
            }
        }
         rowCountRight = location.row + 1;
         rowCountLeft = location.row - 1;
        for (let i = location.col + 1; i <= 7; i++) {
            if (board.getPiece(Square.at(rowCountLeft, i)) === undefined) {
                    moves.push(Square.at(rowCountLeft, i))
                    rowCountLeft--
                    if (rowCountLeft === -1) { break }
                }
            
            else if (board.getPiece(Square.at(rowCountLeft, i)) instanceof King === true) { break }
            else if (board.getPiece(Square.at(rowCountLeft, i)).player === Player.BLACK) {
                moves.push(Square.at(rowCountLeft, i))
                break
            } else {
                break
            }
        }
        rowCountRight = location.row + 1;
        rowCountLeft = location.row - 1;
        for (let i = location.col - 1; i >= 0; i--) {
            if (board.getPiece(Square.at(rowCountRight, i)) === undefined) {
                    moves.push(Square.at(rowCountRight, i))
                    rowCountRight++
                    if (rowCountRight === 8) { break }
                }
            else if (board.getPiece(Square.at(rowCountRight, i)) instanceof King === true) { break }
            else if (board.getPiece(Square.at(rowCountRight, i)).player === Player.BLACK) {
                moves.push(Square.at(rowCountRight, i))
                break
            } else {
                break
            }
        }
        rowCountRight = location.row + 1;
        rowCountLeft = location.row - 1;
        for (let i = location.col - 1; i >= 0; i--) {
            if (board.getPiece(Square.at(rowCountLeft, i)) === undefined) {
                    moves.push(Square.at(rowCountLeft, i))
                    rowCountLeft--
                    if (rowCountLeft === -1) { break }
            }
            else if (board.getPiece(Square.at(rowCountLeft, i)) instanceof King === true) { break }
            else if (board.getPiece(Square.at(rowCountLeft, i)).player === Player.BLACK) {
                moves.push(Square.at(rowCountLeft, i))
                break
            } else {
                break
            }
        }
        return moves;
    }
}
