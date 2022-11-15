const SIZE = 8;
let board = "";

for (let row = 0; row < SIZE; row++) {
    
    for (let column = 0; column < SIZE; column++) {
        if ((row + column) % 2 == 0)
            board += " ";
        else
            board += "#";
    }

    board += "\n";
}

console.log(board);