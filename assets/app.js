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
    let rps = $(this).attr("alt"){
        p1.choice = rps
    } else {
        p2.choice = rps
    }
})
$(document).on("click", "#player-one-submit", function() {
    p1.hasChosen = true
    p1.finalChoice = p2.choice
    $("#player-one-submit").hide()
    $("#player-one-selected-choice").html("<h5>" + player1.finalChoice.charAt(0).toUpperCase() + player1.finalChoice.slice(1)
psPretty + "</h5>")
    return p1.hasChosen, p1.finalChoice
})

$(document).on("click", "#player-two-submit", function() {
    p2.hasChosen = true
    p2.finalChoice = p2.choice
    $("#player-two-submit").hide()
    $("#player-two-selected-choice").html("<h5>" + rpsPretty + "</h5>")
    return p2.hasChosen, p2finalChoice
})

function compare(choice1, choice2) {
    let rBox = $("#battle-box")
    let $h4 = $("<h4>")

    if (choice1 == choice2) {
        $h4.text("The result is a tie!")
    } else if (choice1 == "rock") {
        if (choice2 == "scissors") {
            $h4.text("rock wins")
        } else {
            $h4.text("paper wins")
        }
    } else if (choice1 == "paper") {
        if (choice2 == "rock") {
            $h4.text("paper wins")
        } else {
            $h4.text("scissors wins")
        }
    } else if (choice1 == "scissors") {
        if (choice2 == "rock") {
            $h4.text("rock wins")
        } else {
            $h4.text("scissors wins")
        }
    }
    rBox.html($h4)
}
//TODO: Add Firebase database calls, Add check for 2 players

