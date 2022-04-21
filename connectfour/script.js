(function () {
    // console.log("sane");
    // console.log($);

    var currentPlayer = "player1";
    var playerMode = 2;
    var player1color;
    var player2color;

    $(".col").on("click", function (event) {
        var colSlots = $(event.currentTarget).children().children();
        var selectedCol = $(event.currentTarget).index(); //selected slot of player

        for (var i = colSlots.length - 1; i >= 0; i--) {
            var slot = $(colSlots.eq(i));
            // check for every column from the bottom if slot is taken
            if (slot.hasClass("player1") || slot.hasClass("player2")) {
                console.log("slot taken");
            } else {
                slot.addClass(currentPlayer);

                // setting the colors of the slots
                if (slot.hasClass("player1")) {
                    slot.css({
                        backgroundColor: player1color,
                    });
                }
                if (slot.hasClass("player2")) {
                    slot.css({
                        backgroundColor: player2color,
                    });
                }

                // find index of selected hole
                var X = slot.parent().index();
                var Y = slot.parent().parent().index() - 1;

                // determine sum & difference
                var XplusY = X + Y;
                var XminusY = X - Y;

                //get all holes in up&down diagonals
                var upDiagonals = getUpDiagonals(XplusY);
                var downDiagonals = getDownDiagonals(XminusY);

                //winchecking
                var verticalWin = checkForVerticalDiagonal(colSlots);
                var horizontalWin = horizontalWinChecker();
                var upDiagonalWin = checkForVerticalDiagonal(upDiagonals);
                var downDiagonalWin = checkForVerticalDiagonal(downDiagonals);

                setTimeout(() => {
                    if (
                        verticalWin ||
                        horizontalWin ||
                        upDiagonalWin ||
                        downDiagonalWin
                    ) {
                        window.alert(currentPlayer + " won the game!");
                    }
                    // check player mode!
                    if (playerMode === 1) {
                        // choose random column +-1 of selectedSlot from player
                        var randomColumn = randomCol(selectedCol);
                        // add node list to array
                        var holes = $(".col")
                            .eq(randomColumn)
                            .children()
                            .children();
                        // addClass to last element of that array if not already taken
                        computer(holes);

                        //check for win
                    } else {
                        togglePlayer();
                    }
                }, 100);
                break;
                //switch player
            }
        }
    });

    // toggle player after every play
    function togglePlayer() {
        currentPlayer = currentPlayer === "player1" ? "player2" : "player1";
    }
    // computers next move
    function computer(array) {
        // console.log(array.eq(1));

        for (var i = array.length - 1; i >= 0; i--) {
            // console.log("random holes: ", array.eq(i));

            if (
                array.eq(i).hasClass("player1") ||
                array.eq(i).hasClass("player2")
            ) {
                // console.log("taken");
            } else {
                var selectedSlot = array.eq(i);
                array.eq(i).addClass("player2");

                // setting color of computer
                if (array.eq(i).hasClass("player2")) {
                    array.eq(i).css({
                        backgroundColor: player2color,
                    });
                }

                var X = selectedSlot.parent().index();
                var Y = selectedSlot.parent().parent().index() - 1;

                // console.log("X: ", X, "Y: ", Y);
                var XplusY = X + Y;
                var XminusY = X - Y;
                var upDiagonals = getUpDiagonals(XplusY);
                var downDiagonals = getDownDiagonals(XminusY);
                console.log(upDiagonals, downDiagonals);

                //check for wins
                var verticalWin = checkForVerticalDiagonal(array);
                var horizontalWin = horizontalWinChecker();
                var upDiagonalWin = checkForVerticalDiagonal(upDiagonals);
                var downDiagonalWin = checkForVerticalDiagonal(downDiagonals);

                setTimeout(() => {
                    if (
                        verticalWin ||
                        horizontalWin ||
                        upDiagonalWin ||
                        downDiagonalWin
                    ) {
                        window.alert("Computer won the game!");
                    }
                }, 100);

                break;
            }
        }
    }

    function checkForVerticalDiagonal(slots) {
        var countVer = 0;
        for (var i = 0; i < slots.length; i++) {
            var currentPlayerSlotVer = $(slots[i]).hasClass(currentPlayer);

            if (currentPlayerSlotVer) {
                countVer++;
                if (countVer === 4) {
                    return true;
                }
            } else {
                countVer = 0;
            }
        }

        // diagonal win checker

        return false;
    } //checkForVictory function end

    //horizontal win checker
    function horizontalWinChecker() {
        var countHor = 0;
        var countHor2 = 0;
        for (var j = $(".col").eq(0).children().length - 1; j >= 0; j--) {
            for (var k = 0; k < $(".col").length; k++) {
                var currentPlayerSlotHor = $(".col")
                    .eq(k)
                    .children()
                    .eq(j)
                    .children()
                    .hasClass(currentPlayer);
                if (currentPlayerSlotHor) {
                    countHor++;
                    if (countHor === 4) {
                        return true;
                    }
                } else {
                    countHor = 0;
                }
                //check if one row was counted through!
                countHor2++;
                if (countHor2 === 7) {
                    countHor = 0;
                }
            }
        }
        return false;
    } //end of horizontalWinChecker()

    function getUpDiagonals(XplusY) {
        var upVerticals = [];

        // for loop over all holes
        for (var j = $(".col").eq(0).children().length - 1; j >= 0; j--) {
            for (var k = 0; k < $(".col").length; k++) {
                // determine indices
                var X = $(".col").eq(k).children().eq(j).index(); // row index
                var Y = $(".col").eq(k).index() - 1; // column index
                // determine sum of indices
                var XY = X + Y;
                // if sum is equal to XplusY add hole element to array
                if (XY === XplusY) {
                    upVerticals.push(
                        $(".col").eq(k).children().eq(j).children()
                    );
                }
            }
        }
        // return array
        return upVerticals;
        // check array in predefined function
    }

    function getDownDiagonals(XminusY) {
        var downVerticals = [];

        for (var j = $(".col").eq(0).children().length - 1; j >= 0; j--) {
            for (var k = 0; k < $(".col").length; k++) {
                var X = $(".col").eq(k).children().eq(j).index(); // row index
                var Y = $(".col").eq(k).index() - 1; // column index
                var XY = X - Y;
                if (XY === XminusY) {
                    downVerticals.push(
                        $(".col").eq(k).children().eq(j).children()
                    );
                }
            }
        }
        // return array
        return downVerticals;
        // check array in predefined function
    }
    //getting a random column in dependence of the players selection
    function randomCol(num) {
        var random = 0;
        var min = Math.floor(num - 1);
        var max = Math.ceil(num + 1);
        if (num === 0) {
            random = Math.floor(Math.random() * (max - min + 1) + min) + 1;
        } else if (num === 6) {
            random = Math.floor(Math.random() * (max - min + 1) + min) - 1;
        } else {
            random = Math.floor(Math.random() * (max - min + 1) + min);
        }
        return random;
    }

    // resetting game -> getting all holes and removing classes
    function reset() {
        console.log("reset");
        for (var j = $(".col").eq(0).children().length - 1; j >= 0; j--) {
            for (var k = 0; k < $(".col").length; k++) {
                $(".col")
                    .eq(k)
                    .children()
                    .eq(j)
                    .children()
                    .removeClass("player1");

                $(".col")
                    .eq(k)
                    .children()
                    .eq(j)
                    .children()
                    .removeClass("player2");

                $(".col")
                    .eq(k)
                    .children()
                    .eq(j)
                    .children()
                    .addClass("empty-board");

                $(".col").eq(k).children().eq(j).children().css({
                    backgroundColor: "white",
                });
            }
        }
        setTimeout(() => {
            for (var a = $(".col").eq(0).children().length - 1; a >= 0; a--) {
                for (var b = 0; b < $(".col").length; b++) {
                    $(".col")
                        .eq(b)
                        .children()
                        .eq(a)
                        .children()
                        .removeClass("empty-board");
                }
            }
        }, 500);

        //reset current player
        currentPlayer = "player1";

        //reset buttons and playerColors
        player1color = "yellow";
        player2color = "red";
        $("#playerOneColor").css({
            backgroundColor: "yellow",
        });
        $("#playerTwoColor").css({
            backgroundColor: "red",
        });
    }

    $("#2player").on("click", function () {
        if ($("#1player").hasClass("on")) {
            $("#1player").removeClass("on");
            $("#2player").addClass("on");
        }
        playerMode = 2;
        reset();
    });

    $("#1player").on("click", function () {
        if ($("#2player").hasClass("on")) {
            $("#2player").removeClass("on");
            $("#1player").addClass("on");
        }
        playerMode = 1;
        reset();
    });
    $("#reset").on("click", function () {
        reset();
    });

    $("#playerOneColor").on("click", function () {
        var color = randomColor();
        $("#playerOneColor").css({
            backgroundColor: color,
        });
        player1color = color;
    });
    $("#playerTwoColor").on("click", function () {
        var color = randomColor();
        $("#playerTwoColor").css({
            backgroundColor: color,
        });
        player2color = color;
    });
    // function that sets new color for players
    function randomColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);

        var color = "rgb(" + r + "," + g + "," + b + ")";
        return color;
    }
})(); //end of IIFE
