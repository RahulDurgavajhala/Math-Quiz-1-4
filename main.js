 function addUser(){
    player1name = document.getElementById("playerName1").value
    player2name = document.getElementById("playerName2").value
    
    localStorage.setItem("Player1Name" , player1name)
    localStorage.setItem("Player2Name" , player2name)

    window.location = "game.html"
}