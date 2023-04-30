$(document).ready(function () {

  //variables
  let game = 0;
  let gameRed = 0;
  let gameBlue = 0;
  let draw = 0;
  let red = `<svg class="red" height="80" width="80">
<circle cx="40" cy="40" r="30" stroke="rgb(191, 64, 41)" stroke-width="3" fill="tomato" />
</svg>`;
  let blue = `<svg class="blue" height="80" width="80">
<circle cx="40" cy="40" r="30" stroke="rgb(84, 124, 198)" stroke-width="3" fill="cornflowerblue" />
</svg>`;
  let startingMark = red;
  let turns = 0;

//Turn swapper
  document.querySelectorAll("td").forEach((cell) =>
    cell.addEventListener("click", function () {
      console.log(cell);
      if (cell.innerHTML == "") {
        if (startingMark == red) {
          cell.innerHTML = startingMark;
          startingMark = blue;
          document.querySelector("#turn").innerHTML = startingMark;
          turns++;
        } else {
          cell.innerHTML = startingMark;
          startingMark = red;
          document.querySelector("#turn").innerHTML = startingMark;

          turns++;
        }
      } else {
        alert("You cannot place a token here");
      }

    })
  );

//Adding functions
  document.querySelector("#tie").addEventListener("click", function () {
    draw++
    document.querySelector("#gameDraws").innerHTML = `Draws: ` + draw;
  }
  );


  document.querySelector("#redWin").addEventListener("click", function () {
    gameRed++
    document.querySelector("#gameRedWins").innerHTML = `Games red has won: ` + gameRed;
  }
  );

  document.querySelector("#blueWin").addEventListener("click", function () {
    gameBlue++
    document.querySelector("#gameBlueWins").innerHTML = `Games blue has won: ` + gameBlue;
  }
  );

  document.querySelector("#newGame").addEventListener("click", function () {
    document.querySelectorAll("td").forEach((cell) => {
      cell.innerHTML = "";
    }
    );
    // Reset Plays
    turns = 0;

    // Increase game count
    game++;
    document.querySelector("#games").innerHTML = game;
  });

});