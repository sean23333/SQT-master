import Tetris from "../common/Tetris.js";

const grid_columns = Tetris.field_width;
const grid_rows = Tetris.field_height;

let game = Tetris.new_game();

document.documentElement.style.setProperty("--grid-rows", grid_rows);
document.documentElement.style.setProperty("--grid-columns", grid_columns);

const grid = document.getElementById("grid");

const range = (n) => Array.from({ "length": n }, (ignore, k) => k);
const cells = range(grid_rows).map(function () {
    const row = document.createElement("div");
    row.className = "row";
    const rows = range(grid_columns).map(function () {
        const cell = document.createElement("div");
        cell.className = "cell";

        row.append(cell);

        return cell;
    });

    grid.append(row);
    return rows;
});


const update_grid = function () {
    game.field.forEach(function (line, line_index) {
        line.forEach(function (block, column_index) {
            const cell = cells[line_index][column_index];
            cell.className = `cell ${block}`;
        });
    });
    // console.log(game.next_tetromino)
    // game.next_tetromino.grid
    Tetris.tetromino_coordiates(game.current_tetromino, game.position).forEach(
        function (coord) {
            try {
                const cell = cells[coord[1]][coord[0]];
                cell.className = (
                    `cell current ${game.current_tetromino.block_type}`
                );
            } catch (ignore) {

            }
        }
    );
};
function createEle(game) {
    return
}
function next_grid() {
    let next_grid = document.getElementById('next_grid');
    next_grid.innerHTML = ``
    let rows = range(6).map(e => {
        let row = document.createElement('div');
        row.className = 'row'
        range(6).map(e => {
            let cell = document.createElement('div')
            cell.className = 'cell';
            row.appendChild(cell);
        })
        next_grid.appendChild(row)
        return row;
    })
    console.log(game)
    game.next_tetromino.grid.map((e, i) => {
        // console.log(e)
        let row = i + 1;
        e.map((e, i) => {
            let col = i + 1;
            rows[row].children[col].className = 'cell ' + e;
        })
    })
}
function gridToDom(grid, domStr) {
    // let grid = game.next_tetromino
    let next_griddom = document.getElementById(domStr);
    next_griddom.innerHTML = ``
    let rows = range(5).map(e => {
        let row = document.createElement('div');
        row.className = 'row'
        range(6).map(e => {
            let cell = document.createElement('div')
            cell.className = 'cell';
            row.appendChild(cell);
        })
        next_griddom.appendChild(row)
        return row;
    })
    console.log(game)
    grid.map((e, i) => {
        // console.log(e)
        let row = i + 1;
        e.map((e, i) => {
            let col = i + 1;
            rows[row].children[col].className = 'cell ' + e;
        })
    })
}
// Don't allow the player to hold down the rotate key.
let key_locked = false;

document.body.onkeyup = function () {
    key_locked = false;
};

document.body.onkeydown = function (event) {
    if (!key_locked && event.key === "ArrowUp") {
        key_locked = true;
        game = Tetris.rotate_ccw(game);
    }
    if (event.key === "ArrowDown") {
        game = Tetris.soft_drop(game);
    }
    if (event.key === "ArrowLeft") {
        game = Tetris.left(game);
    }
    if (event.key === "ArrowRight") {
        game = Tetris.right(game);
    }
    if (event.key === " ") {
        game = Tetris.hard_drop(game);
    }
    if (event.key === "c") {
        game = Tetris.hold(game);
    }
    update_grid();
};

const timer_function = function () {
    game = Tetris.next_turn(game);
    update_grid();
    gridToDom(game.next_tetromino.grid, 'next_grid')
    if (game.held_tetromino)
        gridToDom(game.held_tetromino.grid, 'hold_grid')
    setTimeout(timer_function, 500);
};

setTimeout(timer_function, 500);

update_grid();
