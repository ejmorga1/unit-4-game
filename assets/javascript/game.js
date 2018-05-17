$(document).ready(function() {
    var wins = 0;
    var loses = 0;
    var playerScore = 0;

    var crystalOne = RNG(12, 0);
    var crystalTwo = RNG(12, 0);
    var crystalThree = RNG(12, 0);
    var crystalFour = RNG(12, 0);
    var goal = RNG(100, 20);


    function RNG(x, y) {
        return Math.floor((Math.random() * x) + 1 + y);
    }

    $("#goal").append(goal);
    $("#wins").append(wins);
    $("#loses").append(loses);
    $("#score").append(playerScore);

    $("#1").on("click", function () {
        playerScore = playerScore + crystalOne;
        $("#score").empty().append(playerScore);
        console.log(playerScore);
        console.log(goal);
        endCheck();
    })

    $("#2").on("click", function () {
        playerScore = playerScore + crystalTwo;
        $("#score").empty().append(playerScore);
        console.log(playerScore);
        console.log(goal);
        endCheck();
    })

    $("#3").on("click", function () {
        playerScore = playerScore + crystalThree;
        $("#score").empty().append(playerScore);
        console.log(playerScore);
        console.log(goal);
        endCheck();
    })

    $("#4").on("click", function () {
        playerScore = playerScore + crystalFour;
        $("#score").empty().append(playerScore);
        console.log(playerScore);
        console.log(goal);
        endCheck();
    })

    function endCheck() {
        function reset() {
            crystalOne = RNG(12, 0);
            crystalTwo = RNG(12, 0);
            crystalThree = RNG(12, 0);
            crystalFour = RNG(12, 0);
            goal = RNG(100, 20);
            playerScore = 0;
            $("#goal").empty().append(goal);
            $("#wins").empty().append(wins);
            $("#loses").empty().append(loses);
            $("#score").empty().append(playerScore);
        }
        if (playerScore == goal) {
            wins++;
            reset();
        }
        if (playerScore > goal) {
            loses++;
            reset();
        }
    }

});