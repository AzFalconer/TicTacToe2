$(document).ready(function() {
  //Variables
  var human = "X",
      computer = "O",
      turn = "H",
      round = 0,
      winner = "";
      board = ["","","","","","","","",""];

  //Listen
  $("#close").click(function(){ //For X or O choice
    $(".choice").hide();
    human = $("input:radio[name ='xo']:checked").val();
    round = 0; winner = ""; board = ["","","","","","","","",""];
    $("#header").text("Tic ~ Tac ~ Toe");
    $("#display").text("Tic ~ Tac ~ Toe");
    updateBoard();
    if (human == "X") {$("#header").text("You are playing as X"); turn="H"; computer="O";} else {$("#header").text("You are playing as O"); computer = "X"; turn="C";play();}
  });
  //Listen for user moves...
  $("#1").click(function(){board[0]=human; round += 1;turn="C"; updateBoard(); play();});
  $("#2").click(function(){board[1]=human; round += 1;turn="C"; updateBoard(); play();});
  $("#3").click(function(){board[2]=human; round += 1;turn="C"; updateBoard(); play();});
  $("#4").click(function(){board[3]=human; round += 1;turn="C"; updateBoard(); play();});
  $("#5").click(function(){board[4]=human; round += 1;turn="C"; updateBoard(); play();});
  $("#6").click(function(){board[5]=human; round += 1;turn="C"; updateBoard(); play();});
  $("#7").click(function(){board[6]=human; round += 1;turn="C"; updateBoard(); play();});
  $("#8").click(function(){board[7]=human; round += 1;turn="C"; updateBoard(); play();});
  $("#9").click(function(){board[8]=human; round += 1;turn="C"; updateBoard(); play();});

  //Functions
  function updateBoard() {
    for (n=1;n<10;n++) {var key = "#" + n.toString();$(key).text(board[n-1]);}
    chkWinner();
    if (winner == human){$("#display").text("You win!"); $(".choice").show();}
    else if (winner == computer) {$("#display").text("You lose!");$(".choice").show();}
    else if (winner == "-") {$("#display").text("Draw!");$(".choice").show();}
  }

  function chkWinner(){
    if (board[0] == "X" && board[1] == "X" && board[2] =="X") {winner = "X"}
    if (board[3] == "X" && board[4] == "X" && board[5] =="X") {winner = "X"}
    if (board[6] == "X" && board[7] == "X" && board[8] =="X") {winner = "X"}
    if (board[0] == "X" && board[3] == "X" && board[6] =="X") {winner = "X"}
    if (board[1] == "X" && board[4] == "X" && board[7] =="X") {winner = "X"}
    if (board[2] == "X" && board[5] == "X" && board[8] =="X") {winner = "X"}
    if (board[0] == "X" && board[4] == "X" && board[8] =="X") {winner = "X"}
    if (board[6] == "X" && board[4] == "X" && board[2] =="X") {winner = "X"}
    if (board[0] == "O" && board[1] == "O" && board[2] =="O") {winner = "O"}
    if (board[3] == "O" && board[4] == "O" && board[5] =="O") {winner = "O"}
    if (board[6] == "O" && board[7] == "O" && board[8] =="O") {winner = "O"}
    if (board[0] == "O" && board[3] == "O" && board[6] =="O") {winner = "O"}
    if (board[1] == "O" && board[4] == "O" && board[7] =="O") {winner = "O"}
    if (board[2] == "O" && board[5] == "O" && board[8] =="O") {winner = "O"}
    if (board[0] == "O" && board[4] == "O" && board[8] =="O") {winner = "O"}
    if (board[6] == "O" && board[4] == "O" && board[2] =="O") {winner = "O"}
    if (board.indexOf("") < 0) {winner = "-"}
  }

  function play() {
    if (round == 0 && turn == "C") {board[0]=computer; turn="H"; round += 1;updateBoard();}
    if (round == 1 && turn == "C") {turn="H"; round+=1; if (board[4]==""){board[4]=computer; updateBoard();} else {board[0]=computer; updateBoard();}}
    if (round == 2 && turn == "C") {turn="H"; round+=1; if (board[6]==""){board[6]=computer; updateBoard();} else {board[2]=computer; updateBoard();}}
    if (round >= 3 && turn == "C") {turn="H"; round+=1; board[winBlock()]=computer; updateBoard();}
  }

  function winBlock() {
    if (board[0] == computer && board[1] == computer && board[2] == "") {return 2;}
    if (board[1] == computer && board[2] == computer && board[0] == "") {return 0;}
    if (board[0] == computer && board[3] == computer && board[6] == "") {return 6;}
    if (board[0] == computer && board[6] == computer && board[3] == "") {return 3;}
    if (board[6] == computer && board[7] == computer && board[8] == "") {return 8;}
    if (board[6] == computer && board[8] == computer && board[7] == "") {return 7;}
    if (board[7] == computer && board[8] == computer && board[6] == "") {return 6;}
    if (board[2] == computer && board[5] == computer && board[8] == "") {return 8;}
    if (board[5] == computer && board[8] == computer && board[2] == "") {return 2;}
    if (board[2] == computer && board[8] == computer && board[5] == "") {return 5;}
    if (board[4] == computer && board[6] == computer && board[2] == "") {return 2;}
    if (board[2] == computer && board[4] == computer && board[6] == "") {return 6;}
    if (board[0] == computer && board[4] == computer && board[8] == "") {return 8;}
    if (board[1] == computer && board[4] == computer && board[7] == "") {return 7;}
    if (board[0] == computer && board[2] == computer && board[1] == "") {return 1;}
    if (board[4] == computer && board[7] == computer && board[1] == "") {return 1;}
    if (board[0] == human && board[1] == human && board[2] == "") {return 2;}
    if (board[1] == human && board[2] == human && board[0] == "") {return 0;}
    if (board[0] == human && board[3] == human && board[6] == "") {return 6;}
    if (board[0] == human && board[6] == human && board[3] == "") {return 3;}
    if (board[6] == human && board[7] == human && board[8] == "") {return 8;}
    if (board[6] == human && board[8] == human && board[7] == "") {return 7;}
    if (board[1] == human && board[4] == human && board[7] == "") {return 7;}
    if (board[7] == human && board[8] == human && board[6] == "") {return 6;}
    if (board[2] == human && board[5] == human && board[8] == "") {return 8;}
    if (board[5] == human && board[8] == human && board[2] == "") {return 2;}
    if (board[2] == human && board[8] == human && board[5] == "") {return 5;}
    if (board[4] == human && board[6] == human && board[2] == "") {return 2;}
    if (board[2] == human && board[4] == human && board[6] == "") {return 6;}
    if (board[0] == human && board[4] == human && board[8] == "") {return 8;}
    for (i=0;i<9;i++) {if (board[i] == ""){return i;}}
  }

  });
