let a = [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]];
let player = 1;
let mode = "X";
let count = 0;

function tttbutton(row, col, number){
    a[row][col] = player;
    document.querySelector(`.col${number}`).innerHTML = mode;
    document.querySelector(`.col${number}`).disabled = true;
    if(
        (a[0][0] === player && a[0][1] === player && a[0][2] === player) ||
        (a[1][0] === player && a[1][1] === player && a[1][2] === player) ||
        (a[2][0] === player && a[2][1] === player && a[2][2] === player) ||
        (a[0][0] === player && a[1][0] === player && a[2][0] === player) ||
        (a[0][1] === player && a[1][1] === player && a[2][1] === player) ||
        (a[0][2] === player && a[1][2] === player && a[2][2] === player) ||
        (a[0][0] === player && a[1][1] === player && a[2][2] === player) ||
        (a[2][0] === player && a[1][1] === player && a[0][2] === player)
    ) 
    {
        let msg = prompt(`Player ${player} has won. Do you want to play a new match? Yes or No`);
        if(msg === null)    window.close();
        else if(msg.toLowerCase() === "yes" || msg === "") window.location.reload();
        else window.close();
    } 

    player = (player === 1) ? 2 : 1;
    mode = (mode === "X") ? "O" : "X";
    count++;

    if(count === 9)
    {
        let msg = prompt(`It is a draw. Do you want to play a new match? Yes or No`);
        if(msg === null)    window.close();
        else if(msg.toLowerCase() === "yes" || msg === "") window.location.reload();
        else window.close();
    }
}
