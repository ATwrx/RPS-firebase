// Initialize Firebase
var config = {
    apiKey: 'AIzaSyCYWVZBBlcCTjQsGcEyLoe_gayyZXoS2Fg',
    authDomain: 'rpb-smu.firebaseapp.com',
    databaseURL: 'https://rpb-smu.firebaseio.com',
    projectId: 'rpb-smu',
    storageBucket: 'rpb-smu.appspot.com',
    messagingSenderId: '597172240588',
}
firebase.initializeApp(config)
var database = firebase.database()

const p1 = {
    hasChosen: false,
    choice: null
}
const p2 = {
    hasChosen: false,
    choice: null
}
$(document).on("click", ".answer-choice", function() {
    let rps = $(this).attr("alt")
    let rpsPretty = rps.charAt(0).toUpperCase() + rps.slice(1)
    if ($(this).attr("player") == "1") {
        p1.choice = rps
        $("#player-one-selected-choice").html("<h5>" + rpsPretty + "</h5>")
    } else {
        p2.choice = rps
        $("#player-two-selected-choice").html("<h5>" + rpsPretty + "</h5>")
    }
})

function compare(p1.choice, p2.choice) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    }
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins";
        } else {
            return "paper wins";
        }
    }
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";
        } else {
            return "scissors wins";
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "rock wins";
        } else {
            return "scissors wins";
        }
    }
}

//TODO: Add Firebase database calls, Add check for 2 players

