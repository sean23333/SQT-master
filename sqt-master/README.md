# Computing 2 SQT Submission.
In this code repository is a module that can simulate a game of Tetris
`web-app/common/Tetris.js`
and a web app to play the game.
`web-app/browser/`

The module and app will play a tetris game,
but are missing some features that you might expect.
(For comparison, see https://tetris.com/play-tetris)

This assignment will have you implement some additional features,
which are targeted to the module assessment criteria.

## Tasks ##
### Colourful blocks
In Tetris, each piece has a colour. In this version they're all blue.

**Change the css such that each piece has a different colour.**

### Next Tetromino
Part of the game state is the next tetromino to descend after the current one
locks.
In most tetris games this is displayed to the player.
In this module the next tetromino is stored as a property of the game object.
`game.next_tetromino`.

* Unlike in the online game, you should only show the **one** next piece.

**Add a display of the next tetromino to the sidebar**

### Hold Piece
One feature you often see in Tetris games is the ability to *hold* a piece.
If you press hold, `c`, then the current piece is taken off the field and held.
If there was no piece already held, then the next piece is deployed,
otherwise if there is a piece already held then it is deployed.
In each case the piece is deployed from the top of the field.
Once you hold a piece, you can't hold again until you have locked in a piece.

See https://tetris.com/play-tetris for an example of how this works.

**You are going to implement the hold mechanism.**
1. Add to the documentation of type definition of a `Tetris.Game` (line 16) two fields:
    1. `held_tetromino`, the tetromino you are holding.
    2. `can_hold`, a boolean that determines if holding is allowed.
2. Modify the `Tetris.new_game()` function to have these new fields, and have sensible initial values.
3. Modify `Tetris.next_turn()` so that the next turn returned also has these two fields.
4. Document in **jsdoc** a new function `Tetris.hold()` that takes a game, and returns a new game with the current tetromino held.
5. Implement the `Tetris.hold()` function as specified.
6. Modify `main.js` to listen for the `c` key being pressed, and holds the piece when triggered.
7. Add a display of the held piece to the UI.

### Hold Piece - Unit Tests
We are going to test three behaviours of the hold mechanism.
1. A held piece can be retrieved on a subsequent turn.
2. Hold can't be performed twice in a row.
3. If there is no held piece and a hold performed, the *next tetromino* is deployed.

Use the starter code in `web-app/tests/Tetris.test.js`.

For the first test, I have specified using Given-When-Then for this behaviour
and have implemented the test. You need not modify this one.

For the second test, I have provided a Given-When-Then specification for the test.
**You should implement this test**

The third test,
*If there is no held piece and a hold performed, the **next tetromino** is deployed.*,
needs to be further specified and implemented by you.

**Further specify and implement this test**

## Submission Details
For this SQT, Fork this repository into your own GitHub.
When you are complete send me an email with a link to your github repo.

Please submit before 16:00 on Friday 19th August 2022.

Please do get in contact with any questions.
