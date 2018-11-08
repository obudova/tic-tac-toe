import {
  OPPONENT,
  PLAYER,
  EMPTY
} from "../constants";

export function findBestMove(board) {
  return minimax(1, OPPONENT, board).position;
}

function minimax(depth, minmaxer, board) {

  var nextMoves = getAvailableMoves(board);
  var bestMove = { score: minmaxer === OPPONENT ? -10000 : 10000, position: -1 };

  // Collect every available move
  var randomizedMoves = [];

  if (!nextMoves.length || depth === 0) {
    bestMove.score = evaluate(board);
  } else {

    for (var i = 0; i < nextMoves.length; ++i) {
     // if (window.CP.shouldStopExecution(0)) break;

      var moveSimulation = nextMoves[i];
      board[moveSimulation] = minmaxer;

      var score = minimax(depth - 1, minmaxer === OPPONENT ? PLAYER : OPPONENT, board).score;

      randomizedMoves.push({ score: score, position: moveSimulation });

      if (minmaxer === OPPONENT && score > bestMove.score ||
        minmaxer === PLAYER && score < bestMove.score) {
        bestMove = { score: score, position: moveSimulation };
      }

      board[moveSimulation] = EMPTY;
    }
    // window.CP.exitedLoop(0);
  }

  // Take one random move if several moves with the same score are available.
  if (randomizedMoves.length) {

    // First AI move
    if (randomizedMoves.length === board.length) {
      bestMove = randomizedMoves[Math.floor(Math.random() * randomizedMoves.length)];
    } else {
      randomizedMoves = randomizedMoves.filter(function (m) {return m.score === bestMove.score;});
      bestMove = randomizedMoves[Math.floor(Math.random() * randomizedMoves.length)];
    }
  }

  return bestMove;
}

function getAvailableMoves(board) {
  return board.reduce(function (acc, current, idx) {
    current === EMPTY && acc.push(idx);
    return acc;
  }, []);
}

// function evaluateLine(a, b, c) {
//
//   var score = 0;
//   var cA = board[a];
//   var cB = board[b];
//   var cC = board[c];
//
//   // first cell
//   if (cA == OPPONENT) {
//     score = 1;
//   } else if (cA == PLAYER) {
//     score = -1;
//   }
//
//   // second cell
//   if (cB == OPPONENT) {
//     if (score == 1) {
//       score = 10;
//     } else if (score == -1) {
//       return 0;
//     } else {
//       score = 1;
//     }
//   } else if (cB == PLAYER) {
//     if (score == -1) {
//       score = -10;
//     } else if (score == 1) {
//       return 0;
//     } else {
//       score = -1;
//     }
//   }
//
//   // third cell
//   if (cC == OPPONENT) {
//     if (score > 0) {
//       score *= 10;
//     } else if (score < 0) {
//       return 0;
//     } else {
//       score = 1;
//     }
//   } else if (cC == PLAYER) {
//     if (score < 0) {
//       score *= 10;
//     } else if (score > 1) {
//       return 0;
//     } else {
//       score = -1;
//     }
//   }
//
//   return score;
// }

function evaluate(board) {
  const evaluateLine = (a, b, c) => {
    var score = 0;
    var cA = board[a];
    var cB = board[b];
    var cC = board[c];

    // first cell
    if (cA == OPPONENT) {
      score = 1;
    } else if (cA == PLAYER) {
      score = -1;
    }

    // second cell
    if (cB == OPPONENT) {
      if (score == 1) {
        score = 10;
      } else if (score == -1) {
        return 0;
      } else {
        score = 1;
      }
    } else if (cB == PLAYER) {
      if (score == -1) {
        score = -10;
      } else if (score == 1) {
        return 0;
      } else {
        score = -1;
      }
    }

    // third cell
    if (cC == OPPONENT) {
      if (score > 0) {
        score *= 10;
      } else if (score < 0) {
        return 0;
      } else {
        score = 1;
      }
    } else if (cC == PLAYER) {
      if (score < 0) {
        score *= 10;
      } else if (score > 1) {
        return 0;
      } else {
        score = -1;
      }
    }

    return score;
  };

  var score = 0;

  score += evaluateLine(0, 1, 2); // row 1
  score += evaluateLine(3, 4, 5); // row 2
  score += evaluateLine(6, 7, 8); // row 3
  score += evaluateLine(0, 3, 6); // col 1
  score += evaluateLine(1, 4, 7); // col 2
  score += evaluateLine(2, 5, 8); // col 3
  score += evaluateLine(0, 4, 8); // diag.
  score += evaluateLine(2, 4, 6); // alt. diag.

  return score;
}


