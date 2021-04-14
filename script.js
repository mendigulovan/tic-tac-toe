import Board from "./board.js";


const board = new Board(["x", "o", "", "x", "o", "", "o", "", "x"]);
board.printFormattedBoard();
console.log(board.isTerminal());
console.log(board.getAvailableMoves());
board.insert("o", 7);
board.printFormattedBoard();
console.log(board.isTerminal());