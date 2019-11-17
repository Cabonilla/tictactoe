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
    };
    return { noGame, yesGame }
})();