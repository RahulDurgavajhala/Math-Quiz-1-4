player_1 = localStorage.getItem("Player1Name")
player_2 = localStorage.getItem("Player2Name")
question_turn = "player1"
answer_turn = "player2"
player1_score = 0
word = ""
player2_score = 0
document.getElementById("playerName1").innerHTML = player_1 + ":"
document.getElementById("playerName2").innerHTML = player_2 + ":"
document.getElementById("player1_Score").innerHTML = player1_score
document.getElementById("player2_Score").innerHTML = player2_score
document.getElementById("player_question").innerHTML = "question turn = " + player_1
document.getElementById("player_answer").innerHTML = "answer turn = " + player_2
function send(){
    number_1 = document.getElementById("number1").value
    number_2 = document.getElementById("number2").value
    actual_answer = parseInt(number_1) * parseInt(number_2)
    question_number = "<h4>" + number_1 + "X" + number_2+"<h4>"
    input_box = "<br>Answer: <input type='text' id='input_check_box'>"
    button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row = question_number + input_box + button
    document.getElementById("output").innerHTML = row
    document.getElementById("number1").value = ""
    document.getElementById("number2").value = ""

}

function check(){
get_answer = document.getElementById("input_check_box").value
if(get_answer == actual_answer){
     if(answer_turn == "player1"){
    player1_score = player1_score + 1
     document.getElementById("player1_score").innerHTML = player1_score
     }

     else{

    player2_score = player2_score + 1
     document.getElementById("player2_score").innerHTML = player2_score
}
}
if(question_turn == "player1"){
question_turn = "player2"
document.getElementById("player_question").innerHTML = "Question_turn - " + player_2
}

else{
    question_turn = "player1"
document.getElementById("player_question").innerHTML = "Question_turn - " + player_1
}
}