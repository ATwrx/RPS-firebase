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
     if($(this).attr("player") == 1) {
	$(this).siblings().removeClass("selected")
        p1.choice = rps
	$(this).addClass("selected")
    } else {
	$(this).siblings().removeClass("selected")
        p2.choice = rps
	$(this).addClass("selected")
    }
})
$(document).on("click", "#player-one-submit", function() {
    p1.hasChosen = true
    $("#player-one-submit").hide()
    $("#player-one-selected-choice").html("<h5>" + p1.choice.charAt(0).toUpperCase() + p1.choice.slice(1)
    + "</h5>")
    compare(p1.choice, p2.choice)
    return p1.hasChosen 
})

$(document).on("click", "#player-two-submit", function() {
    p2.hasChosen = true
    $("#player-two-submit").hide()
    $("#player-two-selected-choice").html("<h5>" + p2.choice.charAt(0).toUpperCase() + p2.choice.slice(1)+ "</h5>")
    return p2.hasChosen 
})

function compare(choice1, choice2) {
    let rBox = $("#battle-box")
    let $h4 = $("<h4>")
    if (p1.hasChosen == false || p2.hasChosen == false){
    return
    }
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

