let homeScore = 0;
let awayScore = 0;

function homePlusOne() {
    homeScore += 1;
    document.getElementById("home-score").textContent = homeScore;
    HomeWinner();
    highlightWinner()
}

function homePlusTwo(){
    homeScore += 2;
    document.getElementById("home-score").textContent = homeScore;
    HomeWinner();
    highlightWinner()
    
}

function homePlusThree(){
    homeScore += 3;
    document.getElementById("home-score").textContent = homeScore;
    HomeWinner();
    highlightWinner()
}

function awayPlusOne() {
    awayScore += 1;
    document.getElementById("away-score").textContent = awayScore;
    AwayWinner();
    highlightWinner();

}

function awayPlusTwo() {
    awayScore += 2;
    document.getElementById("away-score").textContent = awayScore;
    AwayWinner();
    highlightWinner();
}

function awayPlusThree() {
    awayScore += 3;
    document.getElementById("away-score").textContent = awayScore;
    AwayWinner();
    highlightWinner()
}



function reset() {
    homeScore = 0;
    awayScore = 0;
    document.getElementById("home-score").textContent = homeScore;
    document.getElementById("away-score").textContent = awayScore;
}


function HomeWinner() {
    if (homeScore >= 21){
        alert("Home Team Wins!");
        homeScore = 0;
        awayScore = 0;
        document.getElementById("home-score").textContent = homeScore;
        document.getElementById("away-score").textContent = awayScore;
    }
}

function AwayWinner() {
    if (awayScore >= 21){
        alert("Away Team Wins!");
        homeScore = 0;
        awayScore = 0;
        document.getElementById("home-score").textContent = homeScore;
        document.getElementById("away-score").textContent = awayScore;
    }     
}

function highlightWinner() {
    if (homeScore > awayScore) {
        document.getElementById("home-score").style.color = "green";
        document.getElementById("away-score").style.color = "red";
    } else if (awayScore > homeScore) {
        document.getElementById("home-score").style.color = "red";
        document.getElementById("away-score").style.color = "green";
    }

    else {
        document.getElementById("home-score").style.color = "orange";
        document.getElementById("away-score").style.color = "orange";
    }

}

