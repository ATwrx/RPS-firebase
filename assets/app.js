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
    choice: null,
    selected: null
}
const p2 = {
    hasChosen: false,
    choice: null,
    selected: null
}
$(document).on("click", ".answer-choice", function() {
    let rps = $(this).attr("alt")
    if ($(this).attr("player") == 1) {
        $(this).siblings().removeClass("selected")
        p1.selected = rps
        $(this).addClass("selected")
    } else {
        $(this).siblings().removeClass("selected")
        p2.selected = rps
        $(this).addClass("selected")
    }
})
$(document).on("click", "#player-one-submit", function() {
    p1.hasChosen = true
    p1.choice = p1.selected
    $("#player-one-submit").hide()
    $("#player-one-selected-choice").html("<h5>" + p1.choice.charAt(0).toUpperCase() + p1.choice.slice(1) + "</h5>")
    compare(p1.choice, p2.choice)
})
$(document).on("click", "#player-two-submit", function() {
    p2.hasChosen = true
    p2.choice = p2.selected
    $("#player-two-submit").hide()
    $("#player-two-selected-choice").html("<h5>" + p2.choice.charAt(0).toUpperCase() + p2.choice.slice(1) + "</h5>")
    compare(p1.choice, p2.choice)
})
$(document).on("click", "#reset", function() {
    p1.hasChosen = false, p2.hasChosen = false
    p1.choice = null, p2.choice = null
    $(".answer-choice").removeClass("selected")
    $("#player-one-submit").show()
    $("#player-two-submit").show()
    $("#battle-box").html("")
    $("#player-one-selected-choice").html("")
    $("#player-two-selected-choice").html("")
    return p1.hasChosen, p2.hasChosen, p1.choice, p2.choice
})

function compare(choice1, choice2) {
    let rBox = $("#battle-box")
    let $h4 = $("<h4>")
    if (p1.hasChosen == false || p2.hasChosen == false) {
        return
    } else {
        if (choice1 == choice2) {
            $h4.text("The result is a tie!")
        } else if (choice1 == "rock") {
            if (choice2 == "scissors") {
                $h4.text("Rock wins")
            } else {
                $h4.text("Paper wins")
            }
        } else if (choice1 == "paper") {
            if (choice2 == "rock") {
                $h4.text("Paper wins")
            } else {
                $h4.text("Scissors wins")
            }
        } else if (choice1 == "scissors") {
            if (choice2 == "rock") {
                $h4.text("Rock wins")
            } else {
                $h4.text("Scissors wins")
            }
        }
    rBox.html($h4)
    }
}
