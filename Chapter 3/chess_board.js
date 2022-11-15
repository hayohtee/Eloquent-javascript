let board = "";

for (let row = 1; row <= 8; row++)
{
    let isEven = (row % 2 == 0);

    for (let column = 1; column <= 8; column++)
    {
        if (isEven)
            board += (column % 2 == 0) ? " " : "#";
        else
            board += (column % 2 == 0) ? "#" : " ";
    }

    board += "\n";
}

console.log(board);