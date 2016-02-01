console.log("TELCOM GO");
console.log("GNC GO");
console.log("EECOM GO");
console.log("SURGEON GO");
console.log("CAPCOM, We're GO for Powered Descent.");


// global var
var redSleeperAgents = 0,
    blueSleeperAgents = 0,
    round = 0,
    winner = '', //'blue' 'red' is a user input, default blue
    currentPlayer = "", //"blueFA", "redSM","redFA" //SM = spymaster FA = field agent
    latestStartingTeam = "red", //vs "red"
    board = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
              {},{},{},{},{},{},{},{}],
    blueFirst = ['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue',
                'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red',
                'white', 'white', 'white', 'white', 'white', 'white',
                'white', 'white', 'black'],
    redFirst = ['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue',
                'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red',
                'white', 'white', 'white', 'white', 'white', 'white',
                'white', 'white', 'black'];

// jQuery Variable


/* Model */

/* create game board */



// 1. Random word generator and remove the selected words from word list
// 2. change board into arrays of object {color, word}
// 3. add color to board depending on round, even = blue first / odd = red first

//okay
function setBoard() {

  for ( var i = 0; i < 25; i++ ) {
    var numWord = Math.floor( Math.random() * wordArray.length );
    // console.log(numWord);
    board[i].word = wordArray[numWord];
    // console.log(board[i])
    wordArray.splice( (numWord), 1 );

    board[i].state = false;
  };
};
setBoard()

// generating the 5x5 board with js (done done)
for (i= 0; i < 25; i++) {
  var $word_box = $("<div class='word_box'><p class='words'></p></div>");
  $word_box.appendTo('.middlebox');
  $('div>p:last').attr("id", "box" + i)
  $("#box"+i).text("???")
};



// generate random state
// add board state (true = clicked/false = not clicked)

//okay
function setColor() {}
  if (latestStartingTeam === "red") {
    for ( var i = 0; i < 25; i++ ) {
      var numColor = Math.floor( Math.random() * blueFirst.length );
      // console.log(numColor);
      board[i].color = blueFirst[numColor];
      blueFirst.splice( (numColor), 1 );
      blueSleeperAgents = 9;
      redSleeperAgents = 8;
      }
    latestStartingTeam = "blue";
    } else {
    for ( var i = 0; i < 25; i++ ) {
      var numColor = Math.floor( Math.random() * redFirst.length );
      // console.log(numColor);
      board[i].color = redFirst[numColor];
      redFirst.splice( (numColor), 1 );
      redSleeperAgents = 9;
      blueSleeperAgents = 8;
    };
  latestStartingTeam = "red";
  };


  // Putting word into correlating boxes
function wordInBox() {
  for (i= 0; i < 25; i++) {
    $("#box"+i).text(board[i].word);
  };
};


/* Behavior */
// 1. MOVES
//    a. Spymaster move

// need work
/*
function moves() {};
switch(currentPlayer) {
  case "blueSM":
      return = #blueteam word/num input#;
      break;
    case "blueFA":
      return = #blueteam click input#;
      break;
    case "redSM":
      return = #redteam word/num input#;
      break;
    case "redFA":
      return = #blueteam click input#;
      break;
    default:
      console.log("error on player move");
};
*/

//    b. field agent move

// 2. selecting next player  (day1)blueSM --> blueFA --> redSM -->redFA -->(day2) blueSM

//okay
function nextPlayer() {}
  switch(currentPlayer) {
      case "blueSM":
        currentPlayer = "blueFA";
        break;
      case "blueFA":
        currentPlayer = "redSM";
        break;
      case "redSM":
        currentPlayer = "redFA";
        break;
      case "redFA":
        currentPlayer = "blueSM";
        break;
      default:
        console.log("error on current player");
  };





// win condition

//okay
function win() {}
  if (blueSleeperAgents === 0) {
    winner = 'blue team';
  } else if (redSleeperAgents === 0) {
    winner = 'red team';
  };



//Immediate loss (8-ball) condition and where is teh 8ball
// Where is the 8ball
// for ( var e = 0; 2 < board.length; e++) { if (board[e].color === "black") {console.log(e)}; };
// VM1218:2 11

//okay
function searchBlack(state, board) {
    for (var i=0; i < 25; i++) {
        if ( board[i].color === "black") {
            console.log(i)
            return i;
        };
    };
};
// loss condition

// need work (need to connect with click)
if (currentPlayer === "blueFA" && board[11].color === "black" && board[11].state === true) {
  winner = "red team";
} else if (currentPlayer === "redFA" && board[11].color === "black" && board[11].state === true) {
  winner = "blue team";
}


//ending a round
//1. ending by running out of moves
//2. selecting wrong sleeper agent
/*
  if (currentPlayer === "blueFA" && #box selected# !== "blue" ) {
    round ends
  } (currentPlayer === "redFA" && #box selected# !== "red" ) {
    round ends
  }

  */
//3. end by player decision (player interaction)



/* Render */

// render for field agent

function render() {
  for (var i =0; i < 25; i++) {
    if (board[i].state === true) {
      $('.word_box').eq(i).css('background', board[i].color);
      $("#box"+i).text("").css('background', board[i].color);
    }
  };
};


// render for Spymaster




/* Player Interaction */

// adding event listener

function clickOn() {
  for (i= 0; i < 25; i++) {
    $("#box"+i).on("click", activate )
  };
};

//In field agent round, remove event listener if its already been activated (state:true)

function FAclickOff() {
  for (var i =0; i < 25; i++) {
    if (board[i].state === true) {
      $("#box"+i).off()
    }
  }
};




// turn board state from false to true when clicked
function activate() {
  console.log( $( this ).text() );
  for (var i = 0; i <25 ; i++) {
    if ( board[i].word === $(this).text() ) {
          board[i].state = true;

    };
    console.log(board[i].word, board[i].state, board[i].color);
  };
};

// SPYMASTER CONTROL

// remove event listener during spy master round

function SMeventOff() {
  for (var i =0; i < 25; i++) {
    $("#box"+i).off()
  };
};

// submit no refresh

function blueSubmit() {
  $( "#send-buttonB" ).click( function( evt ) {
    evt.preventDefault();
    var newClue = $('#textareaB').val() + ' ' + $('select')[0].value;
    $li = $("<li id='clueB'>").text(newClue);
    $( "#clueBlue" ).append( $li );
    });
};


function redSubmit() {
  $( "#send-buttonR" ).click(function( evt ) {
    evt.preventDefault();
    var newClue = $('#textareaR').val() + ' ' + $('select')[1].value;
    $li = $("<li id='clueR'>").text(newClue);
    $( "#clueRed" ).append( $li );
  });
};



// preventing opposite team to submit





