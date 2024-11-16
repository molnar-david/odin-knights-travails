function knightMoves(start, end) {
    const possibleKnightMoves = [
        [1, 2], [1, -2],
        [2, 1], [2, -1],
        [-1, 2], [-1, -2],
        [-2, 1], [-2, -1]
    ];
    
    let path = [];
    path.push(start);
    const queue = [];
    while (path[path.length-1][0] !== end[0] || path[path.length-1][1] !== end[1]) {
        possibleKnightMoves.forEach((move) => {
            const nextMove = [path[path.length-1][0] + move[0], path[path.length-1][1] + move[1]];
            const outOfBounds = nextMove.some((pos) => pos < 0 || pos > 7);
            const duplicateMove = JSON.stringify(path).includes(JSON.stringify(nextMove));
            if (!outOfBounds && !duplicateMove) {
                const nextPath = path.slice();
                nextPath.push(nextMove);
                queue.push(nextPath);
            }
        });
        path = queue.shift();
    }
    console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
    path.forEach((move) => console.log(move));
    return;
}

knightMoves([3,3],[4,3]);