
function checkBoard(board) {
    let king, rook;

   
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 'K') king = { x: i, y: j };
            if (board[i][j] === 'R') rook = { x: i, y: j };
        }
    }

    
    if (king.y === rook.y) {
        return isPathClear(board, king.x, rook.x, rook.y);
    }
    if (king.x === rook.x) {
        return isPathClear(board, king.y, rook.y, rook.x, true);
    }
    return false; 
}

function isPathClear(board, start, end, fixed, isHorizontal = false) {
    for (let i = start + 1; i < end; i++) {
        if (isHorizontal ? board[fixed][i] !== '.' : board[i][fixed] !== '.') {
            return false; 
        }
    }
    return true; 
}

module.exports = { checkBoard };
