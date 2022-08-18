import Tetris from "../common/Tetris.js";
import R from "../common/ramda.js";

describe("Hold", function () {
    it(
        `A held piece can be retrieved on a subsequent turn:
        Given a Tetris Game;
        When the sequence Hold > Hard Drop > Hold is performed;
        Then the current tetromino before and after the sequence, is the same.`,
        function () {
            const initial_game = Tetris.new_game();
            const initial_piece = initial_game.current_tetromino;
            // You'll need to implement Tetris.hold before this works.
            const final_game = Tetris.hold(
                Tetris.hard_drop(
                    Tetris.hold(initial_game)
                )
            );
            const final_piece = final_game.current_tetromino;
            if (!R.equals(initial_piece, final_piece)) {
                throw new Error(
                    `The inital and final tetrominos do not match
                    Initial: ${JSON.stringify(initial_piece)}
                    Final:   ${JSON.stringify(final_piece)}`
                );
            }
        }
    );

    it(
        `Hold can't be performed twice in a row:
        Given a Tetris Game where a Hold is performed;
        When one further Hold is performed;
        Then the game state before and after the second hold, is the same.`,
        function () {
            const initial_game = Tetris.hold(Tetris.new_game());
            const current_tetromino = R.clone(initial_game.current_tetromino);
            const final_game = Tetris.hold(initial_game)
            if (!R.equals(final_game.current_tetromino, current_tetromino)) {
                throw new Error(
                    `The inital and final tetrominos do not match
                    Initial: ${JSON.stringify(initial_piece)}
                    Final:   ${JSON.stringify(final_piece)}`
                );
            }
        }
    );

    it(
        `The position of the tetromino need be the same:
         when the gamer use the function hold;
         the block will be saved and move the the next_tetromino to the current position;
         restart the game.`,
        function () {
            const newGame = Tetris.new_game();
            const next_tetromino = R.clone(newGame.next_tetromino);
            const initial_game = Tetris.hold(newGame);
            console.log(next_tetromino)
            console.log(initial_game.current_tetromino)
            if (!R.equals(initial_game.current_tetromino, next_tetromino)) {
                throw new Error(
                    `The inital and final tetrominos do not match
                    Initial: ${JSON.stringify(initial_game.current_tetromino)}
                    Final:   ${JSON.stringify(next_tetromino)}`
                );
            }
        }
    );
});
