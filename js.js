const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const game = (() => {
    const noGame = () => {
        var reject = document.getElementById("play");
        var rejection = reject.innerHTML = "> Aight' then ...";
        var game = document.getElementById("game");
        var gameCanceled = game.style.display = "none";
        return rejection, gameCanceled;
    };

    const yesGame = () => {
        var game = document.getElementById("game");
        game.style.display = "block";

        let board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        const getBoard = () => board;

        const makePlay = (cell, playerNumber) => {
            board[cell] = playerNumber;
        };

        const checkRows = () => {
            if (board[0] === board[1] && board[0] === board[2]) {
                return board[0];
            } else if (board[3] === board[4] && board[3] === board[5]) {
                return board[3];
            } else if (board[6] === board[7] && board[6] === board[8]) {
                return board[6];
            } else {
                return 0;
            }
        };

        const checkColumns = () => {
            if (board[0] === board[3] && board[0] === board[6]) {
                return board[0];
            } else if (board[1] === board[4] && board[1] === board[7]) {
                return board[1];
            } else if (board[2] === board[5] && board[2] === board[8]) {
                return board[2];
            } else {
                return 0;
            }
        };

        const checkDiagonals = () => {
            if (board[0] === board[4] && board[0] === board[6]) {
                return board[0];
            } else if (board[2] === board[4] && board[2] === board[6]) {
                return board[2];
            } else {
                return 0;
            }
        };

        const checkForWinner = () => {
            if (checkRows() !== 0 || checkColumns() !== 0 || checkDiagonals() !== 0) {
                return checkRows() + checkColumns() + checkDiagonals();
            } else if (!board.inclused(0)) {
                return 3;
            } else {
                return 0;
            }
        };

        const resetBoard = () => (board = [0, 0, 0, 0, 0, 0, 0, 0]);

        return { getBoard, makePlay, checkForWinner, resetBoard };
    };

    const playerFactory = (number, name, score = 0) => {
        return { number, name, score };
    };

    const match = (() => {
        let playerOne = playerFactory(1, "Player 1");
        let playerTwo = playerFactory(2, "Player 2");

        const getPlayerOneName = () => playerOne.name;
        const getPlayerTwoName = () => playerTwo.name;
        const getPlayerOneScore = () => playerOne.score;
        const getPlayerTwoScore = () => playerTwo.score;

        const startNew = (playerOneName = "Player 1", playerTwoName = "Player 2") => {
            playerOne = playerFactory(1, playerOneName);
            playerTwo = playerFactory(2, playerTwoName);
        };

        const declareRoundWinner = playerNumber => {
            playerNumber === 1 ? playerOne.score++ : playerTwo.score++;
        };

        return {
            startNew,
            declareRoundWinner,
            getPlayerOneName,
            getPlayerTwoName,
            getPlayerOneScore,
            getPlayerTwoScore
        };
    })();

    const renderBoard = () => {
        game.getBoard().forEach((cell, index) => {
            if ($(`div[data-id='${index}']`).hasChildNodes())
                $(`div[data-id='${index}']`).removeChild(
                    $(`div[data-id='${index}']`).firstChild
                );
        });

        const makeChip = playerValue => {
            const chip = document.createElement("div");
            switch(playerValue) {
                case 1:
                    chip.classList.add("player-one");
                    chip.textContent = "X";
                    return chip;
                    break;
                case 2: 
                    chip.classList.add("player-two");
                    chip.textContent = "0";
                    return chip;
                default:
                    break;
            }
        };

        game.getBoard().forEach((cell, index) => {
            if (cell !== 0 && !$(`div[data-id='${index}']`).hasChildNodes())
                $(`div[data-id='${index}']`).appendChild(makeChip(cell));
        });
    };

    return { noGame, yesGame };
})();
